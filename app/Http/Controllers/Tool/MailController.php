<?php

namespace App\Http\Controllers\Tool;

use App\Jobs\SendRegisterOrResetPwdEmail;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Mail;

class MailController extends Controller
{
    private $mail;

    public function __construct(Mail $mail)
    {
        $this->mail = $mail;
    }

    /**
     * 注册时候发送验证码
     * @param Request $request
     * @return \Dingo\Api\Http\Response|void
     */
    public function sendMailToRegister(Request $request)
    {
        $validator = \Validator::make($request->input(), [
            'email' => 'required|email|unique:users,email',
        ]);

        if ($validator->fails()) {
            return $this->errorBadRequest($validator);
        }
        $email = $request->get('email');
        //发送重置密码的链接
        $code = $this->randomkeys(8);
        // 用户注册成功后发送邮件
        dispatch(new SendRegisterOrResetPwdEmail($email, $code,1));

        return $this->response->noContent();
    }

    public function resetPwd(Request $request)
    {
        $validator = \Validator::make($request->input(), [
            'email' => 'required|email|exists:users,email',
        ]);

        if ($validator->fails()) {
            return $this->errorBadRequest($validator);
        }
        $email = $request->get('email');
        //发送重置密码的链接
        $code = $this->randomkeys(8);
        // 用户注册成功后发送邮件
        dispatch(new SendRegisterOrResetPwdEmail($email, $code,2));

        return $this->response->noContent();
    }
}
