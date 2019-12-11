<?php
/**
 * Created by PhpStorm.
 * User: chmi
 * Date: 2018/12/24
 * Time: 18:56
 */

namespace App\Transformers;

use App\Models\Demo;
use League\Fractal\TransformerAbstract;

class DemoTransformer extends TransformerAbstract
{

    public function transform(Demo $demo)
    {
        return $demo->attributesToArray();
    }
}
