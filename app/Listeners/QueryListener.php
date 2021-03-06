<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Database\Events\QueryExecuted;
use Illuminate\Queue\InteractsWithQueue;

class QueryListener
{
    /**
     * Create the event listener.
     *
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
    public function handle(QueryExecuted $event)
    {
        //
        if ($event->sql) {
            // 把sql  的日志独立分开
//            $fileName = storage_path('logs/sql/' . date('Y-m-d') . '.log');
//            \Log::useFiles($fileName, 'info');
            $sql = str_replace("?", "'%s'", $event->sql);
            $log = vsprintf($sql, $event->bindings);
            $connectionName = $event->connectionName;
            $log = '[' . date('Y-m-d H:i:s') . ',数据库名称：'.$connectionName.',执行时长：'.$event->time.'ms] ' . $log . "\r\n";
            \Log::info($log);
//            file_put_contents($fileName, $log, FILE_APPEND);
        }
    }
}
