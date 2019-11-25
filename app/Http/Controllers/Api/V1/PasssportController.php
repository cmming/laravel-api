<?php

namespace App\Http\Controllers\Api\V1;

use App\Exceptions\ErrorMessage;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PasssportController extends Controller
{
    //
    public function login(Request $request)
    {
        // 校验账号是由存在
        $validator = \Validator::make(request()->all(), [
            'email' => 'required|email|exists:users,email',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->errorBadRequest($validator);
        }
        try {
            $response = app(Client::class)->post(url('/oauth/token'), [
                'form_params' => [
                    'grant_type' => 'password',
                    'client_id' => config('passport.clients.password.client_id'),
                    'client_secret' => config('passport.clients.password.client_secret'),
                    'username' => $request->get('email'),
                    'password' => $request->get('password'),
                    'scope' => '*',
                ],
            ]);
            return json_decode((string)$response->getBody(), true);
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json(ErrorMessage::getMessage(ErrorMessage::PASSWORD_OR_NAME_ERROR), 400);
        }
    }

    public function me(Request $request)
    {
        $user = \Auth::user();
        return response()->json($user);
    }

    public function refresh(Request $request)
    {
        $validator = \Validator::make(request()->all(), [
            'refresh_token' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->errorBadRequest($validator);
        }
        $refresh_token = $request->get('refresh_token');
        try {
            $response = app(Client::class)->post(url('/oauth/token'), [
                'form_params' => [
                    'grant_type' => 'refresh_token',
                    'refresh_token' => $refresh_token,
                    'client_id' => config('passport.clients.password.client_id'),
                    'client_secret' => config('passport.clients.password.client_secret'),
                    'scope' => '',
                ],
            ]);
        } catch (\Exception $e) {
            \Log::info($e->getMessage());
            return response()->json(ErrorMessage::getMessage(ErrorMessage::PASSPORT_REFRESH_ERROR), 401);
        }

        // 清空 使用的记录
//        DB::table('oauth_refresh_tokens')->where('revoked', '=', 1)->delete();
        return json_decode((string)$response->getBody(), true);
    }

    public function logout(){
        if (\Auth::guard('api')->check()) {
            $access_token = \Auth::guard('api')->user()->token();
            $access_token_id = $access_token->toArray()['id'];

            $access_token->delete();
            DB::table('oauth_refresh_tokens')->where('access_token_id', '=', $access_token_id)->delete();
        }
        return $this->success();
    }
}
