/**
 * @api {post} /mail/sendMailToRegister 注册时候的验证码
 * @apiVersion 1.0.0
 * @apiName sendMailToRegister
 * @apiGroup mail
 * @apiDescription  注册时候的验证码 （限速 一分钟内只能发送1次请求）
 * @apiParam {String} email  邮箱
 * @apiSuccessExample {json} 正常:
 *     HTTP/1.1 204
 *
 */
function sendMailToRegister() { return; }


/**
 * @api {post} /mail/resetPwd 重置密码时候的验证码
 * @apiVersion 1.0.0
 * @apiName resetPwd
 * @apiGroup mail
 * @apiDescription  注册时候的验证码（限速 一分钟内只能发送1次请求）
 * @apiParam {String} email  邮箱
 * @apiSuccessExample {json} 正常:
 *     HTTP/1.1 204
 *
 */
function resetPwd() { return; }


