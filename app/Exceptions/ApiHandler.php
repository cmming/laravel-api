<?php
/**
 * Created by PhpStorm.
 * User: chenming
 * Date: 2019/7/23
 * Time: 23:42
 */

namespace App\Exceptions;

use Exception;
use Dingo\Api\Exception\Handler as DingoHandler;
use Illuminate\Auth\AuthenticationException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use App\Exceptions\ErrorMessage;
use Tymon\JWTAuth\Exceptions\JWTException;

class ApiHandler extends DingoHandler
{
    public function handle(Exception $exception)
    {
//        自定义一要捕获的异常
        if ($exception instanceof UnauthorizedHttpException) {
            $preException = $exception->getPrevious();
            if ($preException instanceof
                \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                return response()->json(ErrorMessage::getMessage(ErrorMessage::TOKEN_EXPIRED), 401);
            } elseif ($preException instanceof
                \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                // token 错误
                return response()->json(ErrorMessage::getMessage(ErrorMessage::TOKEN_INVALID), 401);
            } elseif ($preException instanceof
                \Tymon\JWTAuth\Exceptions\TokenBlacklistedException) {
                // token 列入黑名单
                return response()->json(ErrorMessage::getMessage(ErrorMessage::TOKEN_BLACKLISTED), 401);
            }
            if ($exception->getMessage() === 'Token not provided') {
                return response()->json(ErrorMessage::getMessage(ErrorMessage::TOKEN_NOT_PROVIDED), 401);
            }
        }

        // JWT  的异常
        if ($exception instanceof JWTException) {
            if ($exception instanceof
                \Tymon\JWTAuth\Exceptions\TokenExpiredException) {
                return response()->json(ErrorMessage::getMessage(ErrorMessage::TOKEN_CANT_REFRESHED), 401);
            } elseif ($exception instanceof
                \Tymon\JWTAuth\Exceptions\TokenInvalidException) {
                // token 错误
                return response()->json(ErrorMessage::getMessage(ErrorMessage::TOKEN_INVALID), 401);
            } elseif ($exception instanceof
                \Tymon\JWTAuth\Exceptions\TokenBlacklistedException) {
                // token 列入黑名单
                return response()->json(ErrorMessage::getMessage(ErrorMessage::TOKEN_BLACKLISTED), 401);
            }
            if ($exception->getMessage() === 'Token could not be parsed from the request.') {
                return response()->json(ErrorMessage::getMessage(ErrorMessage::TOKEN_NOT_PROVIDED), 401);
            }
        }
        // passport 异常
        if ($exception instanceof AuthenticationException) {
            return response()->json(ErrorMessage::getMessage(ErrorMessage::PASSPORT_ERROR), 401);
        }

        return parent::handle($exception);
    }

    /**
     * Determine if the exception should be reported.
     *
     * @param  \Exception $e
     * @return bool
     */
    public function shouldReport(Exception $e)
    {
        // TODO: Implement shouldReport() method.
    }
}
