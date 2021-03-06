<?php
/**
 * Created by PhpStorm.
 * User: chenming
 * Date: 2019/7/23
 * Time: 23:43
 */

namespace App\Providers;

use Dingo\Api\Provider\DingoServiceProvider as DingoServiceProviders;
use App\Exceptions\ApiHandler as ExceptionHandler;
use Illuminate\Support\Facades\Config;

class DingoServiceProvider extends DingoServiceProviders
{
    protected function registerExceptionHandler()
    {
        $this->app->singleton('api.exception', function ($app) {
            return new ExceptionHandler($app['Illuminate\Contracts\Debug\ExceptionHandler'], $this->config('errorFormat'), $this->config('debug'));
        });
    }
}
