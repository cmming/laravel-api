<?php

namespace App\Http\Controllers\Api\V1\User;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use App\User;
use App\Models\Mail;

class RegisterController extends Controller
{
    private $user;

    //
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    //
    public function register(Request $request)
    {
        $validator = \Validator::make($request->input(), [
//            'email' => 'required|email|unique:users',
            'email' => 'required|email|unique:users,email',
            'name' => 'required|string',
            'password' => 'required',
            //判断 code 是否存在于 邮箱验证表中
            'code' => 'required|exists:email_code,code,email,'.$request->input('email')
        ]);

        if ($validator->fails()) {
            return $this->errorBadRequest($validator);
        }

        $newUser = [
            'email' => $request->input('email'),
            'name' => $request->input('name'),
            'password' => bcrypt($request->input('password'))
        ];

        $user = User::create($newUser);

        //删除 邮箱的验证码
        Mail::where('email', '=', $request->input('email'))->where('send_type', '=', 1)->delete();

        return response()->json(['message' => 'Successfully Register']);
    }


    public function resetPwd(Request $request)
    {
        $validator = \Validator::make($request->input(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required',
            //判断 code 是否存在于 邮箱验证表中
            'code' => 'required|exists:email_code,code,email,'.$request->input('email')
        ]);

        if ($validator->fails()) {
            return $this->errorBadRequest($validator);
        }


        $this->user->where('email', '=', $request->input('email'))->update(['password'=>bcrypt($request->input('password'))]);

        //删除 邮箱的验证码
        Mail::where('email', '=', $request->input('email'))->where('send_type', '=', 2)->delete();

        return response()->json(['message' => 'Successfully']);
    }
}
