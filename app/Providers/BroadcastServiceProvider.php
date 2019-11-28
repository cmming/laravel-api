<?php

namespace App\Providers;

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
//        Broadcast::routes();
        Config::set('auth.guards.api.driver', 'jwt');
        Config::set('auth.defaults.guard', 'api');
        Broadcast::routes(["prefix" => "api", "middleware" => ['api', 'jwt.auth']]);

        require base_path('routes/channels.php');
    }
}
