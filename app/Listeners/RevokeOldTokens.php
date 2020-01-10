<?php

namespace App\Listeners;

use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class RevokeOldTokens
{
    /**
     * Create the event listener.
     * 登录的时候将同一客户端下的同一用户的其它token数据进行删除
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        //将用户前 一天的数据清空
        $access_tokens =  DB::table('oauth_access_tokens')->where('id', '!=', $event->tokenId)
            ->where('user_id', $event->userId)
            ->where('client_id', $event->clientId);


        $access_token_ids = $access_tokens->get('id')->toArray();

        // 同一客户端 和 同一用户生产的token
        $refresh_tokens = DB::table('oauth_refresh_tokens')
            ->whereIn('access_token_id', array_column($access_token_ids, 'id'))
//            ->where('created_at', '<', Carbon::now()->toDateString())
            ->where('revoked', 0)
            ->delete();


        $access_tokens
//            ->where('created_at', '<', Carbon::now()->toDateString())
            ->where('revoked', 0)
            ->delete();
    }
}
