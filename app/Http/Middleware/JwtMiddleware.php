<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Config;

/**
 * Class JwtMiddleware 动态修改 config/auth.php
 * @package App\Http\Middleware
 */
class JwtMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $request->headers->set('accept', 'application/json');
        Config::set('auth.guards.api.driver', 'jwt');
        Config::set('auth.defaults.guard', 'api');
        return $next($request);
    }
}
