<?php

namespace App\Providers;

use App\Listeners\PruneOldTokens;
use App\Listeners\RevokeOldTokens;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;
use Laravel\Passport\Events\AccessTokenCreated;
use Laravel\Passport\Events\RefreshTokenCreated;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        // 监听token生产 清空历史的数据
        AccessTokenCreated::class => [
            RevokeOldTokens::class,
        ],
        RefreshTokenCreated::class => [
            PruneOldTokens::class
        ],
//'Illuminate\Database\Events\QueryExecuted' => [
//            'App\Listeners\QueryListener',
//        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}
