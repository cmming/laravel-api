<?php
/**
 * Created by PhpStorm.
 * User: chenming
 * Date: 2019/7/28
 * Time: 15:37
 */

namespace App\Exceptions;


use Illuminate\Support\Facades\Lang;

class ErrorMessage
{
    const OK = 2000000;

    const PASSWORD_OR_NAME_ERROR = 400001;
    const USER_NOT_LOGIN = 400002;

    //鉴权错误
    const TOKEN_EXPIRED = 401001;
    const TOKEN_INVALID = 401002;
    const TOKEN_BLACKLISTED = 401003;
    const TOKEN_NOT_PROVIDED = 401004;
    const TOKEN_CANT_REFRESHED = 401005;

    // passport 授权错误
    const PASSPORT_ERROR = 401006;
    const PASSPORT_REFRESH_ERROR = 401007;

    //未知错误
    const UNKNOWN = 404001;


    static public $message = [
        2000000 => "ok",
        400001 => "password or name invalid",
        400002 => "user not login",

        401001 => "token expired",
        401002 => "token invalid",
        401003 => "token black list",
        401004 => "token not provided",    #请求头中没有token
//        401005 => "Token has expired and can no longer be refreshed",    #请求头中没有token (改为更加口语化，用户长时间未操作自动退出)
        401005 => "The user is permanently inactive, and automatically exits!",    #请求头中没有token (改为更加口语化，用户长时间未操作自动退出)
        401006 => "token error",    #登录失败
        401007 => "token refresh error",    #token 刷新失败


        404001 => "unknown",


    ];


    static public function getMessage($code)
    {
        if (!isset(self::$message[$code])) {
            $code = self::UNKNOWN;
        }
        $result = ['message' => Lang::get('message.'.self::$message[$code]), 'code' => $code];

        return $result;

    }

}
