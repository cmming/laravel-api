<?php

//use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});


$api = app('Dingo\Api\Routing\Router');

//一分钟最多访问 20 次
$api->version('v1', [
    'namespace' => 'App\Http\Controllers',
],function ($api) {
    // 登录
    $api->group(['prefix' => 'auth'], function ($api) {

        $api->post('register', ['uses' => 'User\RegisterController@register', 'description' => "用户注册"])->name('register');
        $api->post('restPwd', ['uses' => 'User\RegisterController@resetPwd', 'description' => "重置密码"])->name('resetPwd');

        $api->post('login', ['uses' => 'AuthController@login', 'description' => "用户登陆"]);

        $api->group(['middleware' => ['jwt.auth']], function ($api) {
            $api->post('logout', 'AuthController@logout');
            $api->post('refresh', 'AuthController@refresh');
            $api->post('me', 'AuthController@me');
            $api->post('restPwdByOldPwd', 'User\IndexController@resetPwd');
        });
    });

    // 限速 一分钟内只能发送1次请求
    $api->group(['prefix' => 'mail','middleware' => 'api.throttle', 'limit' => 1, 'expires' => 1], function ($api) {
        //发送 注册或者重置密码 邮件 验证码
        $api->post('sendMailToRegister', ['uses' => 'Tool\MailController@sendMailToRegister', 'description' => "注册时邮箱验证码"]);
        $api->post('resetPwd', ['uses' => 'Tool\MailController@resetPwd', 'description' => "注册时邮箱验证码"]);
    });
});


