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
    'namespace' => 'App\Http\Controllers\Api\V1',
    'middleware' => 'jwt-auth'
], function ($api) {
    // 登录
    $api->group(['prefix' => 'auth'], function ($api) {

        $api->post('register', ['uses' => 'User\RegisterController@register', 'description' => "用户注册"])->name('register');
        $api->post('restPwd', ['uses' => 'User\RegisterController@resetPwd', 'description' => "重置密码"])->name('resetPwd');
        $api->get('captcha.jpg', ['uses' => 'User\IndexController@captcha', 'description' => "获取验证码"]);

        $api->post('login', ['uses' => 'AuthController@login', 'description' => "用户登陆"]);
        $api->post('refresh', 'AuthController@refresh');

        $api->group(['middleware' => ['jwt.auth']], function ($api) {
            $api->post('logout', 'AuthController@logout');
            $api->post('me', 'AuthController@me');
            $api->post('restPwdByOldPwd', 'User\IndexController@resetPwd');
            $api->post('authorization/user/info', ['uses' => 'AuthController@info', 'description' => "用户信息"]);
        });
    });

    // 限速 一分钟内只能发送1次请求
    $api->group(['prefix' => 'mail', 'middleware' => 'api.throttle', 'limit' => 1, 'expires' => 1], function ($api) {
        //发送 注册或者重置密码 邮件 验证码
        $api->post('sendMailToRegister', ['uses' => 'Tool\MailController@sendMailToRegister', 'description' => "注册时邮箱验证码"]);
        $api->post('resetPwd', ['uses' => 'Tool\MailController@resetPwd', 'description' => "注册时邮箱验证码"]);
    });


    //管理用户
    $api->group(['prefix' => 'user'], function ($api) {
        //管理员列表
        $api->get('', ['uses' => 'User\IndexController@index', 'description' => "获取管理员信息"]);
        $api->get('/export', ['uses' => 'User\IndexController@export', 'description' => "导出管理员列表"]);
        //管理员信息
        $api->get('/{userid}', ['uses' => 'User\IndexController@show', 'description' => "获取管理员详情"]);
        //添加用户
        $api->post('', ['uses' => 'User\IndexController@store', 'description' => "添加管理员"]);
        //修改用户信息
        $api->put('/{userid}', ['uses' => 'User\IndexController@update', 'description' => "修改管理员信息"]);
        //删除用户
        $api->delete('/{userid}', ['uses' => 'User\IndexController@delete', 'description' => "删除管理员"]);

        //测试redis 使用
        $api->post('pushInstructions.do', ['uses' => 'User\IndexController@setInstructions', 'description' => "从redis设置数据"]);
        $api->get('pullInstructions.do', ['uses' => 'User\IndexController@getInstructions', 'description' => "从redis读取数据"]);

    });


    //角色管理
    $api->group(['prefix' => 'role'], function ($api) {
        $api->get('', ['uses' => 'Role\IndexController@index', 'description' => "获取角色列表"]);
        $api->post('', ['uses' => 'Role\IndexController@store', 'description' => "添加一个角色"]);
        $api->get('/{roleId}', ['uses' => 'Role\IndexController@show', 'description' => "获取一个角色详情"]);
        $api->put('/{roleId}', ['uses' => 'Role\IndexController@update', 'description' => "更新一个角色信息"]);
        $api->delete('/{roleId}', ['uses' => 'Role\IndexController@delete', 'description' => "删除一个角色"]);
        $api->get('/routers/{roleId}', ['uses' => 'Role\IndexController@routers', 'description' => "获取路由的router"]);
        $api->put('/routers/{roleId}', ['uses' => 'Role\IndexController@storeRouter', 'description' => "修改一个角色拥有的路由"]);
    });



    //router 管理
    $api->group(['prefix' => 'router'], function ($api) {
        //管理员列表
        $api->get('', ['uses' => 'Router\IndexController@index', 'description' => "获取Router信息"]);
        //管理员信息
        $api->get('/{id}', ['uses' => 'Router\IndexController@show', 'description' => "获取Router详情"]);
        //添加用户
        $api->post('', ['uses' => 'Router\IndexController@store', 'description' => "添加Router"]);
        //修改用户信息
        $api->put('/{id}', ['uses' => 'Router\IndexController@update', 'description' => "修改Router信息"]);
        //删除用户
        $api->delete('', ['uses' => 'Router\IndexController@destroy', 'description' => "删除管理员"]);
    });

    //日志管理
    $api->group(['prefix' => 'log'], function ($api) {
        $api->get('', ['uses' => 'Log\IndexController@index', 'description' => "获取日志列表"]);
        $api->get('/export', ['uses' => 'Log\IndexController@export', 'description' => "导出日志列表"]);
        //删除用户
        $api->delete('/{id}', ['uses' => 'Log\IndexController@delete', 'description' => "删除日志"]);
    });


    //文件管理
    $api->group(['prefix' => 'file'], function ($api) {
        $api->get('/curentFile', ['uses' => 'File\IndexController@index', 'description' => "获取指定文件路径的结构"]);
        $api->post('/uploadCompanyImg', ['uses' => 'File\IndexController@uploadCompanyImg', 'description' => "上传图片"]);
        $api->post('/chunk', ['uses' => 'File\IndexController@chunk', 'description' => "文件分片上传"]);

        //测试redis 使用
        $api->get('set', ['uses' => 'User\IndexController@setInstructions', 'description' => "从redis设置数据"]);
        $api->get('get', ['uses' => 'User\IndexController@getInstructions', 'description' => "从redis读取数据"]);
    });

    //日志管理
    $api->group(['prefix' => 'demo'], function ($api) {
        $api->get('', ['uses' => 'DemoController@index', 'description' => "获取demo列表"]);
        $api->post('', ['uses' => 'DemoController@store', 'description' => "保存"]);
        $api->get('/{id}', ['uses' => 'DemoController@show', 'description' => "获取详情"]);
        $api->put('/{id}', ['uses' => 'DemoController@update', 'description' => "修改信息"]);
        $api->delete('/{id}', ['uses' => 'DemoController@delete', 'description' => "删除数据"]);
    });

});


$api->version('v1', [
    'namespace' => 'App\Http\Controllers\Api\V1',
    'middleware' => 'passport-auth'
], function ($api) {
    // 登录
    $api->group(['prefix' => 'passport'], function ($api) {

        $api->post('login', ['uses' => 'PasssportController@login', 'description' => "用户登陆"]);
        $api->post('refresh', 'PasssportController@refresh');

        $api->group(['middleware' => ['auth:api']], function ($api) {
            $api->post('logout', 'PasssportController@logout');
            $api->post('me', 'PasssportController@me');
        });
    });

});

