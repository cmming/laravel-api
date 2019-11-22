
## 接口文档 apidocs

```shell script
apidoc>apidoc -i src -o output
```


## laravel

> version :6.*

## dingo/api

## jwt-auth

```shell script
composer require tymon/jwt-auth:^1.0.0-rc.5

php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\LaravelServiceProvider"

php artisan jwt:secret
```


## passport

## 刷新token 

> 当客户端token 存在，且返回值为401；然后去刷新token;如果刷新成功就继续。否则客户端的token，退出到登录页面

>## 监听token 定时清空 access_token和 refresh_token

## 跨域

```shell script
composer require barryvdh/laravel-cors
```
> 
>



