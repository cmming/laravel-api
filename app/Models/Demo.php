<?php

namespace App\Models;

use EloquentFilter\Filterable;
use Illuminate\Database\Eloquent\Model;

class Demo extends Model
{
    use Filterable;

    protected $table = 'demo';

    protected $guarded = [];

    // 定义返回值的类型
    protected $casts = [
        'transfer' => 'array',
        'checkbox' => 'array',
    ];
}
