define({ "api": [
  {
    "type": "post",
    "url": "/auth/login",
    "title": "登录",
    "version": "1.0.0",
    "name": "login",
    "group": "jwt",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>登录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>用户名（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码（必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>身份凭证</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token_type",
            "description": "<p>token 头</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expires_in",
            "description": "<p>有效期</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常:",
          "content": "HTTP/1.1 200\n{\n    \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjUwLjU4OjgzXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNTcwODU4MDQ4LCJleHAiOjE1NzA4NjE2NDgsIm5iZiI6MTU3MDg1ODA0OCwianRpIjoiRk81aTZTNWdKSVVQY1hsZyIsInN1YiI6MTEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.Kho5UCDsoRl8OZnHfA2pP1fzVMnBLrJUI_ten81zQMI\",\n    \"token_type\": \"bearer\",\n    \"expires_in\": 3600\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "缺少参数:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n \"message\": \"422 Unprocessable Entity\",\n \"errors\":[{field:\"code\",code:'缺少参数'}]\n}",
          "type": "json"
        },
        {
          "title": "账号或者密码错误:",
          "content": "HTTP/1.1 400 Unprocessable Entity\n{\n    \"message\": \"password or name invalid.\",\n    \"code\": 400001\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/jwt.1.0.js",
    "groupTitle": "jwt",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/auth/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/logout",
    "title": "退出登录",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token用户令牌</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "logout",
    "group": "jwt",
    "permission": [
      {
        "name": "jwt_auth",
        "title": "用户登录",
        "description": "<p>用户必须登录才能操作</p>"
      }
    ],
    "description": "<p>退出登录</p>",
    "success": {
      "examples": [
        {
          "title": "正常:",
          "content": "HTTP/1.1 200\n {\n    \"message\": \"Successfully logged out\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/jwt.1.0.js",
    "groupTitle": "jwt",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/auth/logout"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/me",
    "title": "获取自己信息",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token用户令牌</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "me",
    "group": "jwt",
    "permission": [
      {
        "name": "jwt_auth",
        "title": "用户登录",
        "description": "<p>用户必须登录才能操作</p>"
      }
    ],
    "description": "<p>获取自己信息</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名字</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常:",
          "content": "HTTP/1.1 200\n{\n        \"id\": 11,\n        \"name\": \"test\",\n        \"email\": \"294225707@qq.com\",\n        \"email_verified_at\": null,\n        \"rand_key\": \"\",\n        \"created_at\": \"2019-10-12 03:37:39\",\n        \"updated_at\": \"2019-10-12 03:37:39\"\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/jwt.1.0.js",
    "groupTitle": "jwt",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/auth/me"
      }
    ],
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "token过期，请刷新！",
          "content": "HTTP/1.1 401\n{\n  \"code\": 401001,\n  \"message\":\"token 过期\"\n}",
          "type": "json"
        },
        {
          "title": "token 格式错误！",
          "content": "HTTP/1.1 401\n{\n  \"code\": 401002,\n  \"message\":\"token 格式错误\"\n}",
          "type": "json"
        },
        {
          "title": "token 已列入黑名单！",
          "content": "HTTP/1.1 401\n{\n  \"code\": 401003,\n  \"message\":\"token 已列入黑名单\"\n}",
          "type": "json"
        },
        {
          "title": "没有解析到token",
          "content": "HTTP/1.1 401\n{\n  \"code\": 401004,\n  \"message\":\"没有解析到token\"\n}",
          "type": "json"
        },
        {
          "title": "token过期，且不能刷新，请重新登录",
          "content": "HTTP/1.1 401\n{\n    \"message\": \"token失效，不能刷新\",\n    \"code\": 401005\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/refresh",
    "title": "刷新token",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token用户令牌</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "refresh",
    "group": "jwt",
    "permission": [
      {
        "name": "jwt_auth",
        "title": "用户登录",
        "description": "<p>用户必须登录才能操作</p>"
      }
    ],
    "description": "<p>获取自己信息</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>身份凭证</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token_type",
            "description": "<p>token 头</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expires_in",
            "description": "<p>有效期</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常:",
          "content": "HTTP/1.1 200\n {\n    \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjUwLjU4OjgzXC9hcGlcL2F1dGhcL3JlZnJlc2giLCJpYXQiOjE1NzA4NTgyNTIsImV4cCI6MTU3MDg2NjQwNywibmJmIjoxNTcwODYyODA3LCJqdGkiOiIzSFc1eXFUOG12Y2RrNXhuIiwic3ViIjoxMSwicHJ2IjoiODdlMGFmMWVmOWZkMTU4MTJmZGVjOTcxNTNhMTRlMGIwNDc1NDZhYSJ9.WwrjjfTc3V3ukbRnUTHN8VC31O887UErO2tIvXTW4s0\",\n   \"token_type\": \"bearer\",\n   \"expires_in\": 3600\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/jwt.1.0.js",
    "groupTitle": "jwt",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/auth/refresh"
      }
    ],
    "error": {
      "fields": {
        "401 Unauthorized": [
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "code",
            "description": "<p>错误码</p>"
          },
          {
            "group": "401 Unauthorized",
            "optional": false,
            "field": "message",
            "description": "<p>错误信息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "token过期，且不能刷新，请重新登录",
          "content": "HTTP/1.1 401\n{\n    \"message\": \"token失效，不能刷新\",\n    \"code\": 401005\n}",
          "type": "json"
        }
      ]
    }
  },
  {
    "type": "post",
    "url": "/auth/register",
    "title": "用户注册",
    "version": "1.0.0",
    "name": "register",
    "group": "jwt",
    "description": "<p>注册</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱（唯一）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证码（从邮箱中获取）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "正常:",
          "content": "HTTP/1.1 200\n {\n    \"message\": \"Successfully Register\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/jwt.1.0.js",
    "groupTitle": "jwt",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/auth/register"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/restPwd",
    "title": "重置密码（通过邮箱验证码）",
    "version": "1.0.0",
    "name": "resetPwd",
    "group": "jwt",
    "description": "<p>重置密码（通过邮箱验证码）</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱（唯一）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证码（从邮箱中获取）</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "正常:",
          "content": "HTTP/1.1 200\n {\n    \"message\": \"Successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/jwt.1.0.js",
    "groupTitle": "jwt",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/auth/restPwd"
      }
    ]
  },
  {
    "type": "post",
    "url": "/auth/restPwdByOldPwd",
    "title": "重置密码（通过旧密码）",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token用户令牌</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "restPwdByOldPwd",
    "group": "jwt",
    "description": "<p>重置密码（通过旧密码）</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newPassword",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "permission": [
      {
        "name": "jwt_auth",
        "title": "用户登录",
        "description": "<p>用户必须登录才能操作</p>"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "正常:",
          "content": "HTTP/1.1 200\n {\n    \"message\": \"Successfully\"\n }",
          "type": "json"
        }
      ]
    },
    "filename": "src/jwt.1.0.js",
    "groupTitle": "jwt",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/auth/restPwdByOldPwd"
      }
    ]
  },
  {
    "type": "post",
    "url": "/mail/resetPwd",
    "title": "重置密码时候的验证码",
    "version": "1.0.0",
    "name": "resetPwd",
    "group": "mail",
    "description": "<p>注册时候的验证码（限速 一分钟内只能发送1次请求）</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "正常:",
          "content": "HTTP/1.1 204",
          "type": "json"
        }
      ]
    },
    "filename": "src/mail.1.0.js",
    "groupTitle": "mail",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/mail/resetPwd"
      }
    ]
  },
  {
    "type": "post",
    "url": "/mail/sendMailToRegister",
    "title": "注册时候的验证码",
    "version": "1.0.0",
    "name": "sendMailToRegister",
    "group": "mail",
    "description": "<p>注册时候的验证码 （限速 一分钟内只能发送1次请求）</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "正常:",
          "content": "HTTP/1.1 204",
          "type": "json"
        }
      ]
    },
    "filename": "src/mail.1.0.js",
    "groupTitle": "mail",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/mail/sendMailToRegister"
      }
    ]
  },
  {
    "type": "post",
    "url": "/passport/login",
    "title": "登录",
    "version": "1.0.0",
    "name": "login",
    "group": "passport",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>登录</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱（必填）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码（必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>身份凭证</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token_type",
            "description": "<p>token 头</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expires_in",
            "description": "<p>有效期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>刷新token(当token过期的时候，获取新的token)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常:",
          "content": "    HTTP/1.1 200\n    {\n    \"token_type\": \"Bearer\",\n    \"expires_in\": 1296000,\n    \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMTFjZDAxNDYyYjA5M2EyMzE0Mjk5Y2IyMGJhZTVlNmIwYWE4Y2IzZjA0YWNiNmVkY2ExOTQ5OWQ3NWYwNGIxNjQ4NjkzY2I5NDlhMzRmMWMiLCJpYXQiOjE1NzQzOTU0NzUsIm5iZiI6MTU3NDM5NTQ3NSwiZXhwIjoxNTc1NjkxNDc1LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.Z2QBJZWG3F8Mv6hNnm2rowfvd1feuRmDy2a29oDM97Wl7ZbThowu2AuYKfamas15XtaVrqK-8r0K2WmEnEMXcl5th40o38inUciR69Kus1RhkIlw3FnRysldfaJWMFqFgt91b-tOgK4OZg34-n7t4skLuYwONcyED73B4WTQw_0dSx5BgKHXu9JXXsBdDEz1yNGIrqexhZZH-NuDrAs45F1-Ss5oikYoEzb6BFKbaofbDirdjoZ8z_1XDIcj02ZLZLy7vQxALZ7OKcE2DfoRE6BqLNSgo0CuYDZ_rYrtFiJIWrcaHKjifqjGPUSqEL_UpqZsfJxoxLKKKGFRu_5mcM193Qy5E5yhix2C8LFT3wUcNVQvYaUXxOUPfgBslrRPgSoGhDBxKopenxMm2gqTR6Vgm3YZ0iz11pX44UjDzBLLdt2sdote4pFABzugZcL2pQbdWeFEMGlNYxFP-92qIqG1CZYLGmWu4M5h_-QG0xgs8_V_FudWWR4MZaWuh4WiqneIYQ8-C55xweU0aLG96o4M74EfxR0Ea54agHL2r2e0B56qvmRTHakNCL9-PQdoqp6LE0WWOOSwetW6FWPY4o3uSHyHqLmW6SPQkGUPkP9fIBbKX_f-mqYXYoTplzw49PYvHYtd5J617CQgwELwwvY_axMFuI-vLc26tfqxZ5o\",\n    \"refresh_token\": \"def502002d2dc9fe6ebf8fd2308daf47f2c805c441667bd5a77c43faa77768a8a58e419aacb4b925525aa05ffdf36f3842318901dc1f36134ddc82adbc6b8af3dcf36572eeecf2d4bc67640ffd3ee36007afffd96bf0d238a1eacef37c90248000269e5b6d0446e758e37b87537db1c38397afc1b3b96a38d3dfdf2151e1989777fe422e9b7382af8bc837df7991654690e7aba074b9bf8cb0915569f0e9db8dc25192f2547039a28e8ee42db93d0935e1f70693964efe93050fec71bff96269ce05bbb20b90cd558960ad7ff181abfad7909fa837dadf836b6711dbb57bf0f928bfacbf47c8184da06ee92c9e820364a4cfdef38ed6eb717d3511a02acc055d5225f2b75e22454311a659d06ad10944c6eb2f1e0235bd93d1846aef0a2f60c1f66c425513eeaa8ee00b4b0ea0f60e4c565029337075e1b50ceffe11b4f21ab839a7aa21ec38f17351d82adff21bf094db1a6d177e892b29e78ef447f512a3e981edf3b4\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "缺少参数:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n{\n \"message\": \"422 Unprocessable Entity\",\n \"errors\":[{field:\"password\",code:'密码必填'}]\n}",
          "type": "json"
        },
        {
          "title": "账号或者密码错误:",
          "content": "    HTTP/1.1 400\n    {\n    \"message\": \"账号或密码错误\",\n    \"code\": 400001\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/passport.1.0.js",
    "groupTitle": "passport",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/passport/login"
      }
    ]
  },
  {
    "type": "post",
    "url": "/passport/logout",
    "title": "退出登录",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token用户令牌</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "logout",
    "group": "passport",
    "permission": [
      {
        "name": "passport_auth",
        "title": "用户登录 auth2.0",
        "description": "<p>用户必须登录才能操作 （请求中 Authorization:Bearer token）</p>"
      }
    ],
    "description": "<p>退出登录</p>",
    "success": {
      "examples": [
        {
          "title": "正常:",
          "content": "HTTP/1.1 200\n {\n        \"message\": \"成功\",\n        \"code\": 2000000\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/passport.1.0.js",
    "groupTitle": "passport",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/passport/logout"
      }
    ]
  },
  {
    "type": "post",
    "url": "/passport/me",
    "title": "获取自己信息",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token用户令牌</p>"
          }
        ]
      }
    },
    "version": "1.0.0",
    "name": "me",
    "group": "passport",
    "permission": [
      {
        "name": "passport_auth",
        "title": "用户登录 auth2.0",
        "description": "<p>用户必须登录才能操作 （请求中 Authorization:Bearer token）</p>"
      }
    ],
    "description": "<p>获取自己信息</p>",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>名字</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常:",
          "content": "HTTP/1.1 200\n{\n        \"id\": 11,\n        \"name\": \"test\",\n        \"email\": \"294225707@qq.com\",\n        \"email_verified_at\": null,\n        \"rand_key\": \"\",\n        \"created_at\": \"2019-10-12 03:37:39\",\n        \"updated_at\": \"2019-10-12 03:37:39\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "token异常:",
          "content": "HTTP/1.1 400\n{\n    \"message\": \"授权失败\",\n    \"code\": 401006\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "src/passport.1.0.js",
    "groupTitle": "passport",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/passport/me"
      }
    ]
  },
  {
    "type": "post",
    "url": "/passport/refresh",
    "title": "刷新token",
    "version": "1.0.0",
    "name": "refresh",
    "group": "passport",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>刷新token</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>refresh_token（必填）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "access_token",
            "description": "<p>身份凭证</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token_type",
            "description": "<p>token 头</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "expires_in",
            "description": "<p>有效期</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "refresh_token",
            "description": "<p>刷新token(当token过期的时候，获取新的token)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "正常:",
          "content": "    HTTP/1.1 200\n    {\n    \"token_type\": \"Bearer\",\n    \"expires_in\": 1296000,\n    \"access_token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIyIiwianRpIjoiMTFjZDAxNDYyYjA5M2EyMzE0Mjk5Y2IyMGJhZTVlNmIwYWE4Y2IzZjA0YWNiNmVkY2ExOTQ5OWQ3NWYwNGIxNjQ4NjkzY2I5NDlhMzRmMWMiLCJpYXQiOjE1NzQzOTU0NzUsIm5iZiI6MTU3NDM5NTQ3NSwiZXhwIjoxNTc1NjkxNDc1LCJzdWIiOiIxIiwic2NvcGVzIjpbIioiXX0.Z2QBJZWG3F8Mv6hNnm2rowfvd1feuRmDy2a29oDM97Wl7ZbThowu2AuYKfamas15XtaVrqK-8r0K2WmEnEMXcl5th40o38inUciR69Kus1RhkIlw3FnRysldfaJWMFqFgt91b-tOgK4OZg34-n7t4skLuYwONcyED73B4WTQw_0dSx5BgKHXu9JXXsBdDEz1yNGIrqexhZZH-NuDrAs45F1-Ss5oikYoEzb6BFKbaofbDirdjoZ8z_1XDIcj02ZLZLy7vQxALZ7OKcE2DfoRE6BqLNSgo0CuYDZ_rYrtFiJIWrcaHKjifqjGPUSqEL_UpqZsfJxoxLKKKGFRu_5mcM193Qy5E5yhix2C8LFT3wUcNVQvYaUXxOUPfgBslrRPgSoGhDBxKopenxMm2gqTR6Vgm3YZ0iz11pX44UjDzBLLdt2sdote4pFABzugZcL2pQbdWeFEMGlNYxFP-92qIqG1CZYLGmWu4M5h_-QG0xgs8_V_FudWWR4MZaWuh4WiqneIYQ8-C55xweU0aLG96o4M74EfxR0Ea54agHL2r2e0B56qvmRTHakNCL9-PQdoqp6LE0WWOOSwetW6FWPY4o3uSHyHqLmW6SPQkGUPkP9fIBbKX_f-mqYXYoTplzw49PYvHYtd5J617CQgwELwwvY_axMFuI-vLc26tfqxZ5o\",\n    \"refresh_token\": \"def502002d2dc9fe6ebf8fd2308daf47f2c805c441667bd5a77c43faa77768a8a58e419aacb4b925525aa05ffdf36f3842318901dc1f36134ddc82adbc6b8af3dcf36572eeecf2d4bc67640ffd3ee36007afffd96bf0d238a1eacef37c90248000269e5b6d0446e758e37b87537db1c38397afc1b3b96a38d3dfdf2151e1989777fe422e9b7382af8bc837df7991654690e7aba074b9bf8cb0915569f0e9db8dc25192f2547039a28e8ee42db93d0935e1f70693964efe93050fec71bff96269ce05bbb20b90cd558960ad7ff181abfad7909fa837dadf836b6711dbb57bf0f928bfacbf47c8184da06ee92c9e820364a4cfdef38ed6eb717d3511a02acc055d5225f2b75e22454311a659d06ad10944c6eb2f1e0235bd93d1846aef0a2f60c1f66c425513eeaa8ee00b4b0ea0f60e4c565029337075e1b50ceffe11b4f21ab839a7aa21ec38f17351d82adff21bf094db1a6d177e892b29e78ef447f512a3e981edf3b4\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/passport.1.0.js",
    "groupTitle": "passport",
    "sampleRequest": [
      {
        "url": "http://192.168.50.179:280/api/passport/refresh"
      }
    ]
  }
] });
