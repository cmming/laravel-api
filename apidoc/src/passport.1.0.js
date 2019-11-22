

/**
 * @api {post} /passport/login 登录
 * @apiVersion 1.0.0
 * @apiName login
 * @apiGroup passport
 * @apiPermission none
 * @apiDescription  登录
 *
 * @apiParam {String} email  邮箱（必填）
 * @apiParam {String} password  密码（必填）
 *
 * @apiSuccess {String}   access_token           身份凭证
 * @apiSuccess {String}   token_type             token 头
 * @apiSuccess {String}   expires_in            有效期
 * @apiSuccess {String}   refresh_token            刷新token(当token过期的时候，获取新的token)
 *
 * @apiSuccessExample {json} 正常:
 *     HTTP/1.1 200
 *     {
    "token_type": "Bearer",
    "expires_in": 1296000,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMTFjZDAxNDYyYjA5M2EyMzE0Mjk5Y2IyMGJhZTVlNmIwYWE4Y2IzZjA0YWNiNmVkY2ExOTQ5OWQ3NWYwNGIxNjQ4NjkzY2I5NDlhMzRmMWMiLCJpYXQiOjE1NzQzOTU0NzUsIm5iZiI6MTU3NDM5NTQ3NSwiZXhwIjoxNTc1NjkxNDc1LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.Z2QBJZWG3F8Mv6hNnm2rowfvd1feuRmDy2a29oDM97Wl7ZbThowu2AuYKfamas15XtaVrqK-8r0K2WmEnEMXcl5th40o38inUciR69Kus1RhkIlw3FnRysldfaJWMFqFgt91b-tOgK4OZg34-n7t4skLuYwONcyED73B4WTQw_0dSx5BgKHXu9JXXsBdDEz1yNGIrqexhZZH-NuDrAs45F1-Ss5oikYoEzb6BFKbaofbDirdjoZ8z_1XDIcj02ZLZLy7vQxALZ7OKcE2DfoRE6BqLNSgo0CuYDZ_rYrtFiJIWrcaHKjifqjGPUSqEL_UpqZsfJxoxLKKKGFRu_5mcM193Qy5E5yhix2C8LFT3wUcNVQvYaUXxOUPfgBslrRPgSoGhDBxKopenxMm2gqTR6Vgm3YZ0iz11pX44UjDzBLLdt2sdote4pFABzugZcL2pQbdWeFEMGlNYxFP-92qIqG1CZYLGmWu4M5h_-QG0xgs8_V_FudWWR4MZaWuh4WiqneIYQ8-C55xweU0aLG96o4M74EfxR0Ea54agHL2r2e0B56qvmRTHakNCL9-PQdoqp6LE0WWOOSwetW6FWPY4o3uSHyHqLmW6SPQkGUPkP9fIBbKX_f-mqYXYoTplzw49PYvHYtd5J617CQgwELwwvY_axMFuI-vLc26tfqxZ5o",
    "refresh_token": "def502002d2dc9fe6ebf8fd2308daf47f2c805c441667bd5a77c43faa77768a8a58e419aacb4b925525aa05ffdf36f3842318901dc1f36134ddc82adbc6b8af3dcf36572eeecf2d4bc67640ffd3ee36007afffd96bf0d238a1eacef37c90248000269e5b6d0446e758e37b87537db1c38397afc1b3b96a38d3dfdf2151e1989777fe422e9b7382af8bc837df7991654690e7aba074b9bf8cb0915569f0e9db8dc25192f2547039a28e8ee42db93d0935e1f70693964efe93050fec71bff96269ce05bbb20b90cd558960ad7ff181abfad7909fa837dadf836b6711dbb57bf0f928bfacbf47c8184da06ee92c9e820364a4cfdef38ed6eb717d3511a02acc055d5225f2b75e22454311a659d06ad10944c6eb2f1e0235bd93d1846aef0a2f60c1f66c425513eeaa8ee00b4b0ea0f60e4c565029337075e1b50ceffe11b4f21ab839a7aa21ec38f17351d82adff21bf094db1a6d177e892b29e78ef447f512a3e981edf3b4"
}

 * @apiErrorExample {json} 缺少参数:
 *     HTTP/1.1 422 Unprocessable Entity
 *     {
 *      "message": "422 Unprocessable Entity",
 *      "errors":[{field:"password",code:'密码必填'}]
 *     }
 * @apiErrorExample {json} 账号或者密码错误:
 *     HTTP/1.1 400
 *     {
    "message": "账号或密码错误",
    "code": 400001
}
 *
 */
function login() { return; }


/**
 * @api {post} /passport/me 获取自己信息
 * @apiHeader Authorization token用户令牌
 * @apiVersion 1.0.0
 * @apiName me
 * @apiGroup passport
 * @apiPermission passport_auth
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
 * * @apiErrorExample {json} token异常:
 *     HTTP/1.1 400
 *     {
        "message": "授权失败",
        "code": 401006
        }
 *
 */
function me() { return; }


/**
 * @api {post} /passport/refresh 刷新token
 * @apiVersion 1.0.0
 * @apiName refresh
 * @apiGroup passport
 * @apiPermission none
 * @apiDescription  刷新token
 * @apiParam {String} refresh_token  refresh_token（必填）
 *
 *
 * @apiSuccess {String}   access_token           身份凭证
 * @apiSuccess {String}   token_type             token 头
 * @apiSuccess {String}   expires_in            有效期
 * @apiSuccess {String}   refresh_token            刷新token(当token过期的时候，获取新的token)
 *
 * @apiSuccessExample {json} 正常:
 *     HTTP/1.1 200
 *     {
    "token_type": "Bearer",
    "expires_in": 1296000,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMTFjZDAxNDYyYjA5M2EyMzE0Mjk5Y2IyMGJhZTVlNmIwYWE4Y2IzZjA0YWNiNmVkY2ExOTQ5OWQ3NWYwNGIxNjQ4NjkzY2I5NDlhMzRmMWMiLCJpYXQiOjE1NzQzOTU0NzUsIm5iZiI6MTU3NDM5NTQ3NSwiZXhwIjoxNTc1NjkxNDc1LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.Z2QBJZWG3F8Mv6hNnm2rowfvd1feuRmDy2a29oDM97Wl7ZbThowu2AuYKfamas15XtaVrqK-8r0K2WmEnEMXcl5th40o38inUciR69Kus1RhkIlw3FnRysldfaJWMFqFgt91b-tOgK4OZg34-n7t4skLuYwONcyED73B4WTQw_0dSx5BgKHXu9JXXsBdDEz1yNGIrqexhZZH-NuDrAs45F1-Ss5oikYoEzb6BFKbaofbDirdjoZ8z_1XDIcj02ZLZLy7vQxALZ7OKcE2DfoRE6BqLNSgo0CuYDZ_rYrtFiJIWrcaHKjifqjGPUSqEL_UpqZsfJxoxLKKKGFRu_5mcM193Qy5E5yhix2C8LFT3wUcNVQvYaUXxOUPfgBslrRPgSoGhDBxKopenxMm2gqTR6Vgm3YZ0iz11pX44UjDzBLLdt2sdote4pFABzugZcL2pQbdWeFEMGlNYxFP-92qIqG1CZYLGmWu4M5h_-QG0xgs8_V_FudWWR4MZaWuh4WiqneIYQ8-C55xweU0aLG96o4M74EfxR0Ea54agHL2r2e0B56qvmRTHakNCL9-PQdoqp6LE0WWOOSwetW6FWPY4o3uSHyHqLmW6SPQkGUPkP9fIBbKX_f-mqYXYoTplzw49PYvHYtd5J617CQgwELwwvY_axMFuI-vLc26tfqxZ5o",
    "refresh_token": "def502002d2dc9fe6ebf8fd2308daf47f2c805c441667bd5a77c43faa77768a8a58e419aacb4b925525aa05ffdf36f3842318901dc1f36134ddc82adbc6b8af3dcf36572eeecf2d4bc67640ffd3ee36007afffd96bf0d238a1eacef37c90248000269e5b6d0446e758e37b87537db1c38397afc1b3b96a38d3dfdf2151e1989777fe422e9b7382af8bc837df7991654690e7aba074b9bf8cb0915569f0e9db8dc25192f2547039a28e8ee42db93d0935e1f70693964efe93050fec71bff96269ce05bbb20b90cd558960ad7ff181abfad7909fa837dadf836b6711dbb57bf0f928bfacbf47c8184da06ee92c9e820364a4cfdef38ed6eb717d3511a02acc055d5225f2b75e22454311a659d06ad10944c6eb2f1e0235bd93d1846aef0a2f60c1f66c425513eeaa8ee00b4b0ea0f60e4c565029337075e1b50ceffe11b4f21ab839a7aa21ec38f17351d82adff21bf094db1a6d177e892b29e78ef447f512a3e981edf3b4"
}
 *
 */
function refresh() { return; }



/**
 * @api {post} /passport/logout 退出登录
 * @apiHeader Authorization token用户令牌
 * @apiVersion 1.0.0
 * @apiName logout
 * @apiGroup passport
 * @apiPermission passport_auth
 * @apiDescription  退出登录
 *
 *
 * @apiSuccessExample {json} 正常:
 *     HTTP/1.1 200
 *      {
            "message": "成功",
            "code": 2000000
        }

 *
 */
function logout() { return; }



