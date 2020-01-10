<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDemo;
use App\Models\Demo;
use App\Transformers\DemoTransformer;
use Illuminate\Http\Request;

class DemoController extends Controller
{
    //
    private $demo;

    public function __construct(Demo $demo)
    {
        $this->demo = $demo;
    }

    public function index(Request $request)
    {
        $demos = $this->demo->filter($request->all())->paginate();

        return $this->response->paginator($demos, new DemoTransformer());
    }

    public function store(StoreDemo $storeDemo)
    {
        $newDemo = $storeDemo->validated();
//        $newDemo['transfer'] = json_encode($newDemo['transfer']);
//        $newDemo['checkbox'] = json_encode($newDemo['checkbox']);
//        dd($newDemo);
        $demo = $this->demo->create($newDemo);

        return $this->response->created();
    }

    public function show($id)
    {
        $validator = \Validator::make(['id' => $id], [
            'id' => 'required|exists:demo,id',
        ]);

        if ($validator->fails()) {
            return $this->errorBadRequest($validator);
        }
        $demo = $this->demo->find($id);
        return $this->response->item($demo, new DemoTransformer());
    }

    public function update($id, StoreDemo $storeDemo)
    {
        $validator = \Validator::make(['id' => $id], [
            'id' => 'required|exists:demo,id',
        ]);
        if ($validator->fails()) {
            return $this->errorBadRequest($validator);
        }

        $newDemo = $storeDemo->validated();

        $demo = $this->demo->find($id)->update($newDemo);

        return $this->response->noContent();
    }

    public function delete($id)
    {
        $validator = \Validator::make(['id' => $id], [
            'id' => 'required|exists:demo,id',
        ]);
        if ($validator->fails()) {
            return $this->errorBadRequest($validator);
        }

        $this->demo->find($id)->delete();

        return $this->response->noContent();
    }
}
