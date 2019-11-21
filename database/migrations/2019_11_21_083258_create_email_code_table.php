<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmailCodeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('email_code', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('code', '20')->comment('验证码');
            $table->string('email', '40')->comment('邮箱');
            //1 register 2 forget
            $table->integer('send_type')->comment('1:注册；2：找回密码');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('email_code');
    }
}
