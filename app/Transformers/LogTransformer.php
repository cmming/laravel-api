<?php
/**
 * Created by PhpStorm.
 * User: chmi
 * Date: 2018/12/24
 * Time: 18:56
 */

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\Models\Log;

class LogTransformer extends TransformerAbstract
{
    public function transform(Log $log)
    {
        return [
            'id' => $log->id,
            'ip' => $log->ip,
            'operation' => $log->operation,
            'url' => $log->url,
            'updated_at' => $log->updated_at->toDateTimeString(),
            'user_id' => $log->user_id,
        ];
//        return $log->attributesToArray();
    }
}
