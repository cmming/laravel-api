<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;


use App\Models\Mail;

class SendRegisterOrResetPwdEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $email;
    protected $code;
    protected $type;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($email, $code, $type)
    {
        //
        $this->email = $email;
        $this->code = $code;
        $this->type = $type;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //
        $code = ['code' => $this->code];
        $email = $this->email;
        //删除

        Mail::where('email', '=', $email)->where('send_type', '=', 1)->delete();

        Mail::create(['email' => $this->email, 'code' => $this->code, 'send_type' => $this->type]);


        \Log::info('[注册验证码]:' . $this->email . '验证码为：' . $this->code.'有效取为30分钟');
        \Mail::send('mail.emailCode', $code, function ($message) use ($email) {
            $message->from('13037125104@163.com', '陈明');
            $message->subject('注册验证码');
            $message->to($email);
        });

        //存入数据中
    }
}
