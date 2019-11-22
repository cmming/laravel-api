

/**
 * @api {post} /auth/login 登录
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup jwt
 * @apiPermission none
 * @apiDescription  登录
 *
 * @apiParam {String} name  用户名（必填）
 * @apiParam {String} password  密码（必填）
 *
 * @apiSuccess {String}   access_token           身份凭证
 * @apiSuccess {String}   token_type             token 头
 * @apiSuccess {String}   expires_in            有效期
 *
 * @apiSuccessExample {json} 正常:
 *     HTTP/1.1 200
 *     {
        "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjUwLjU4OjgzXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTcwODU4MDQ4LCJleHAiOjE1NzA4NjE2NDgsIm5iZiI6MTU3MDg1ODA0OCwianRpIjoiRk81aTZTNWdKSVVQY1hsZyIsInN1YiI6MTEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.Kho5UCDsoRl8OZnHfA2pP1fzVMnBLrJUI_ten81zQMI",
        "token_type": "bearer",
        "expires_in": 3600
    }

 * @apiErrorExample {json} 缺少参数:
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
 *      "message": "422 Unprocessable Entity",
 *      "errors":[{field:"code",code:'缺少参数'}]
 *     }
 * @apiErrorExample {json} 账号或者密码错误:
 *     HTTP/1.1 400 Unprocessable Entity
 *     {
        "message": "password or name invalid.",
        "code": 400001
        }
 *
 */
function login() { return; }


/**
 * @api {post} /auth/me 获取自己信息
 * @apiHeader Authorization token用户令牌
 * @apiVersion 1.0.0
 * @apiName me
 * @apiGroup jwt
 * @apiPermission jwt_auth
 * @apiDescription  获取自己信息
 *
 *
 * @apiSuccess {Number}   id           id
 * @apiSuccess {String}   name            名字
 * @apiSuccess {String}   email            邮箱
 *
 * @apiSuccessExample {json} 正常:
 *     HTTP/1.1 200
 *     {
            "id": 11,
            "name": "test",
            "email": "294225707@qq.com",
            "email_verified_at": null,
            "rand_key": "",
            "created_at": "2019-10-12 03:37:39",
            "updated_at": "2019-10-12 03:37:39"
        }

 *
 * @apiUse TokenExpired
 * @apiUse TokenInvalid
 * @apiUse TokenBlackList
 * @apiUse TokenNotFound
 * @apiUse TokenCantRefresh
 *
 */
function me() { return; }


/**
 * @api {post} /auth/refresh 刷新token
 * @apiHeader Authorization token用户令牌
 * @apiVersion 1.0.0
 * @apiName refresh
 * @apiGroup jwt
 * @apiPermission jwt_auth
 * @apiDescription  获取自己信息
 *
 *
 * @apiSuccess {String}   access_token           身份凭证
 * @apiSuccess {String}   token_type             token 头
 * @apiSuccess {String}   expires_in            有效期
 *
 * @apiSuccessExample {json} 正常:
 *     HTTP/1.1 200
 *      {
 *         "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjUwLjU4OjgzXC9hcGlcL2F1dGhcL3JlZnJlc2giLCJpYXQiOjE1NzA4NTgyNTIsImV4cCI6MTU3MDg2NjQwNywibmJmIjoxNTcwODYyODA3LCJqdGkiOiIzSFc1eXFUOG12Y2RrNXhuIiwic3ViIjoxMSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.WwrjjfTc3V3ukbRnUTHN8VC31O887UErO2tIvXTW4s0",
 *        "token_type": "bearer",
 *        "expires_in": 3600
 *      }

 *
 * @apiUse TokenCantRefresh
 */
function refresh() { return; }



/**
 * @api {post} /auth/logout 退出登录
 * @apiHeader Authorization token用户令牌
 * @apiVersion 1.0.0
 * @apiName logout
 * @apiGroup jwt
 * @apiPermission jwt_auth
 * @apiDescription  退出登录
 *
 *
 * @apiSuccessExample {json} 正常:
 *     HTTP/1.1 200
 *      {
 *         "message": "Successfully logged out"
 *      }

 *
 */
function logout() { return; }

/**
 * @api {post} /auth/register 用户注册
 * @apiVersion 1.0.0
 * @apiName register
 * @apiGroup jwt
 * @apiDescription  注册
 * @apiParam {String} email  邮箱（唯一）
 * @apiParam {String} name  名称
 * @apiParam {String} password  密码
 * @apiParam {String} code  验证码（从邮箱中获取）
 *
 *
 * @apiSuccessExample {json} 正常:
 *     HTTP/1.1 200
 *      {
 *         "message": "Successfully Register"
 *      }

 *
 */
function register() { return; }

/**
 * @api {post} /auth/restPwd 重置密码（通过邮箱验证码）
 * @apiVersion 1.0.0
 * @apiName resetPwd
 * @apiGroup jwt
 * @apiDescription  重置密码（通过邮箱验证码）
 * @apiParam {String} email  邮箱（唯一）
 * @apiParam {String} password  密码
 * @apiParam {String} code  验证码（从邮箱中获取）
 *
 *
 * @apiSuccessExample {json} 正常:
 *     HTTP/1.1 200
 *      {
 *         "message": "Successfully"
 *      }

 *
 */
function resetPwd() { return; }


/**
 * @api {post} /auth/restPwdByOldPwd 重置密码（通过旧密码）
 * @apiHeader Authorization token用户令牌
 * @apiVersion 1.0.0
 * @apiName restPwdByOldPwd
 * @apiGroup jwt
 * @apiDescription  重置密码（通过旧密码）
 * @apiParam {String} password  密码
 * @apiParam {String} newPassword  新密码
 * @apiPermission jwt_auth
 * @apiSuccessExample {json} 正常:
 *     HTTP/1.1 200
 *      {
 *         "message": "Successfully"
 *      }

 *
 */
function restPwdByOldPwd() { return; }


