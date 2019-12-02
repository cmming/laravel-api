<?php

namespace App\Http\Controllers\Api\V1\File;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
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
            $filename = date('Ymd') . '/' . date('His'). uniqid() . '.' . $ext;
            $bool = \Storage::disk('upload_company_img')->put($filename, file_get_contents($request->file('file')));

            if ($bool) {
                $url = \Storage::disk('upload_company_img')->url($filename);
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

        if ($request->input('phase') === 'start') {
            return $this->startChunk();
        }

        if ($request->input('phase') === 'upload') {
            return $this->uploadChunk($request);
        }

        if ($request->input('phase') === 'finish') {
            return $this->finishChunk($request);
        }

    }


    private function startChunk()
    {
        $result = [
            'data' => [
                'end_offset' => 1024 * 1024 * 0.5,
                'session_id' => Uuid::uuid4()->toString(),
            ],
            "status" => "success"
        ];

        return response()->json($result);
    }

    private function uploadChunk($request)
    {
        // 文件上传
        $filename = $request->get('session_id') . '/' . $request->get('start_offset');
        $bool = \Storage::disk('upload_company_img')->put($filename, file_get_contents($request->file('chunk')->getRealPath()));
        if ($bool) {
            return response()->json(["status" => "success"]);
        }
    }

    private function finishChunk($request)
    {
        $filePath = Storage::files( storage_path('upload_company_img').$request->get('session_id'));

        \Log::info($filePath);
//        foreach ($list as $value) {
//            if (!empty($value)) {
//                $handle = fopen($value, "rb");
//                fwrite($fp, fread($handle, filesize($value)));
//                fclose($handle);
//                unset($handle);
//            }
//        }
    }
}
