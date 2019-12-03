<?php

namespace App\Http\Controllers\Api\V1\File;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Storage;
use Ramsey\Uuid\Uuid;

class IndexController extends Controller
{
    /**
     * 获取指定文件夹下的文件
     * @param Request $request
     */
    public function index(Request $request)
    {
        $allFile = Storage::files($request->get('path'));
//        dd($allFile);
        $result = [];
        foreach ($allFile as $key => $val) {
            $result[] = $this->getFileDetailByPath(($val));
        }
        return $result;
    }

    private function getFileDetailByPath($path)
    {
        $name = $path;
        //取出所用的文件驱动类型
        $path = config('filesystems.disks.' . config('filesystems.default') . '.root') . '/' . $path;
        return [
            "name" => $name,
            "type" => \File::type($path),
            "size" => \File::size($path),
            "lastModified" => \File::lastModified($path),
            "isDirectory" => \File::isDirectory($path),
            "isFile" => \File::isFile($path),
            "isWritable" => \File::isWritable($path),
            "extension" => \File::extension($path),

        ];
    }

    public function uploadCompanyImg(Request $request)
    {

        $validator = \Validator::make(request()->all(), [
            'file' => 'required|file|max:2048',
        ]);
        if ($validator->fails()) {
            return $this->errorBadRequest($validator);
        }

        $file = $request->file('file');
//        header('Content-type: application/json');
        // 文件是否上传成功
        if ($file->isValid()) {
            // 获取文件相关信息
            $originalName = $file->getClientOriginalName(); //文件原名
            $ext = $file->getClientOriginalExtension();     // 扩展名

            $type = $file->getClientMimeType();     // image/jpeg
            $size = $file->getSize();
            if ($size > 2 * 1024 * 1024) {
                return array('error' => '文件大小超过2M');
            }
            $extArr = array('jpg', 'jpeg', 'png', 'gif');
            if (!in_array($ext, $extArr)) {
                return array('error' => '图片格式只能是：jpg, jpeg, png, gif');
            }

            // 拼接文件名称
            $filename = date('Ymd') . '/' . date('His') . uniqid() . '.' . $ext;
            $bool = \Storage::disk('upload_file')->put($filename, file_get_contents($request->file('file')));

            if ($bool) {
                $url = \Storage::disk('upload_file')->url($filename);
                return array('url' => $url);
            } else {
                return array('error' => '上传失败');
            }

        } else {
            return array('error' => '上传失败');
        }

    }

    public function chunk(Request $request)
    {
//        $validator = \Validator::make($request->all(), [
//            'phase' => 'in_array:start',
//        ]);
//
//        if ($validator->fails()) {
//            return $this->errorBadRequest($validator);
//        }

        //
        if ($request->input('phase') === 'start') {
            $fileName = $request->input('name');
            return $this->startChunk($request);
        }

        if ($request->input('phase') === 'upload') {
            return $this->uploadChunk($request);
        }

        if ($request->input('phase') === 'finish') {
            return $this->finishChunk($request);
        }

    }


    private function startChunk($request)
    {
        $save_file = $request->get('name');
        if (!\Storage::disk('upload_file')->exists($save_file)) {
            $result = [
                'data' => [
                    'end_offset' => intval(env('FILE_CHUNCK_SIZE')),
                    'session_id' => Uuid::uuid4()->toString(),
                ],
                "status" => "success"
            ];
        }else{
            $result = ['message' => '文件已存在！', 'status' => 'error'];
        }

        return response()->json($result);
    }

    private function uploadChunk($request)
    {
        // 文件上传
        $filename = 'tmp/' . $request->get('session_id') . '/' . $request->get('chunks');
        $bool = \Storage::disk('upload_file')->put($filename, file_get_contents($request->file('chunk')->getRealPath()));
        if ($bool) {
            return response()->json(["status" => "success"]);
        }
    }

    private function finishChunk($request)
    {
        @set_time_limit(5 * 60);
        ini_set('memory_limit', -1);
        $result = [];

        $save_file = $request->get('name');
        $chunks = $request->get('chunks');

        if (!\Storage::disk('upload_file')->exists($save_file)) {
            //创建最终的文件
            $isCreate = \Storage::disk('upload_file')->put($save_file, '');
            $outPath = config('filesystems.disks.upload_file.root') . DIRECTORY_SEPARATOR . $save_file;
            if (!$out = @fopen($outPath, "wb")) {
                $result = ['all' => '文件打开失败！', 'message' => 'error'];
            }
//
            if ($isCreate) {
                $file = config('filesystems.disks.upload_file_tmp.root') . $request->get('session_id');

                if (flock($out, LOCK_EX)) {
                    for ($index = 0; $index < $chunks; $index++) {
                        \Log::info("{$file}/{$index}");
                        $in = \File::get("{$file}/{$index}");
                        \File::append($outPath, $in);
                    }
                    flock($out, LOCK_UN);
                }
                @fclose($out);

                $url = \Storage::disk('upload_file')->url($save_file);
                $result = [
                    'status' => 'success',
                    'url' => $url
                ];
            } else {
                $result = ['message' => '文件创建失败！', 'status' => 'error'];
            }
        } else {
            $result = ['message' => '文件已存在！', 'status' => 'error'];
        }
        return $result;
    }


    public function setInstructions(Request $request)
    {
        $instructions = $request->get('instructions');
        \Log::info($instructions);
        Redis::set('name', $instructions);
        return ['status'=>'ok'];
    }

    public function getInstructions()
    {
        return Redis::get('name');
    }
}
