<?php

namespace App\Http\Controllers\Api\V1;

use App\Events\LoginRemind;
use App\Exceptions\ErrorMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware(['jwt.auth','verified'], ['except' => ['login']]);
//        $this->middleware('auth:api', ['except' => ['login']]);
    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'name' => 'required',
            'password' => 'required',
            'ckey' => 'required',
            'captcha' => 'required|captcha_api:' . $request->input('ckey')
        ], [
        'captcha.required' => '验证码不能为空',
        'captcha.captcha_api' => '请输入正确的验证码',
        ]);

        if ($validator->fails()) {
            // 错误批量处理
            return $this->errorBadRequest($validator);
        }

        $credentials = request(['name', 'password']);

        if (! $token = auth('api')->attempt($credentials)) {
            return response()->json(ErrorMessage::getMessage(ErrorMessage::PASSWORD_OR_NAME_ERROR), 400);
        }

        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken(auth()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    public function info()
    {
//        $all_router = \DB::select("SELECT * FROM routers ORDER BY sort DESC");
        $all_router = auth()->user()->routers();
        array_multisort(array_column($all_router, 'sort'), SORT_DESC, $all_router);
        $testRouterList = $this->getTree($all_router, 0);

        $result = [
            "indexPage" => "/admin/dashborad/index",
            "routerList" => $testRouterList,
            "info" => auth()->user(),
            'test'=>'test'
        ];

        // test event
        event(new LoginRemind(auth()->user()));
        return $result;
    }

    private function getTree($data, $pId)
    {
        $tree = [];
        foreach ($data as $k => $v) {
            if ($v['parent_id'] == $pId) {         //父亲找到儿子
                $v['children'] = $this->getTree($data, $v['id']);
                $tree[] = $v;
            }
        }
        return $tree;
    }

}
