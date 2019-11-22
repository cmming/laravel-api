<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Config;

class PassportMiddleware
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
        Config::set('auth.guards.api.driver', 'passport');
        $request->headers->set('accept', 'application/json');
//        Config::set('auth.defaults.guard', 'api');
        return $next($request);
    }
}
