<?php

namespace App\Http\Controllers\Api\V1;

use App\Exceptions\ErrorMessage;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Dingo\Api\Routing\Helpers;
use Dingo\Api\Exception\ValidationHttpException;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests, Helpers;

    public function randomkeys($length)
    {
        $pattern = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLOMNOPQRSTUVWXYZ'; //字符池
        $key = '';
        for ($i = 0; $i < $length; $i++) {
            $key .= $pattern{mt_rand(0, 35)}; //生成php随机数
        }
        return $key;
    }

    /**
     * 返回请求参数异常
     * @param $validator 响应的错误信息
     */
    protected function errorBadRequest($validator)
    {
        // github like error messages
        // if you don't like this you can use code bellow
        //
        throw new ValidationHttpException($validator->errors());
    }

    /**
     * 创建数据失败
     */
    protected function createError()
    {
        return $this->response->error(__("Create error"), 404);
    }

    /**
     * 更新数据失败
     */
    protected function updateError()
    {
        return $this->response->error(__("Update error"), 404);
    }

    /**
     * 删除失败
     */
    protected function deleteError()
    {
        return $this->response->error(__("Delete error"), 404);
    }

    public function noMustHas($valArr = array())
    {
        $result = array();
        foreach ($valArr as $item) {
            foreach ($item as $key => $value) {
                if (request()->has($key)) {
                    $validator = \Validator::make(request([$key]), [
                        $key => $value,

                    ]);
                    if ($validator->fails()) {
                        return $this->errorBadRequest($validator);
                    } else {
                        $result[$key] = request($key);
                    }
                };
            }
        }
        return $result;
    }

    public function success()
    {
        return response()->json(ErrorMessage::getMessage(ErrorMessage::OK));
    }
}
