/**
 * Created by chmi on 2019/10/12.
 */

// ------------------------------------------------------------------------------------------
// Custom Errors.
// ------------------------------------------------------------------------------------------
/**
 * @apiDefine TokenExpired
 * @apiVersion 1.0.0
 *
 * @apiError(401 Unauthorized) code 错误码
 * @apiError(401 Unauthorized) message 错误信息
 *
 * @apiErrorExample  token过期，请刷新！
 *     HTTP/1.1 401
 *     {
 *       "code": 401001,
 *       "message":"token 过期"
 *     }
 *
 *
 */


 /**
 * @apiDefine TokenInvalid
 * @apiVersion 1.0.0
 *
 * @apiError(401 Unauthorized) code 错误码
 * @apiError(401 Unauthorized) message 错误信息
 *
 * @apiErrorExample  token 格式错误！
 *     HTTP/1.1 401
 *     {
 *       "code": 401002,
 *       "message":"token 格式错误"
 *     }
 *
 *
 *
 */

 /**
 * @apiDefine TokenBlackList
 * @apiVersion 1.0.0
 *
 * @apiError(401 Unauthorized) code 错误码
 * @apiError(401 Unauthorized) message 错误信息
 *
 * @apiErrorExample  token 已列入黑名单！
 *     HTTP/1.1 401
 *     {
 *       "code": 401003,
 *       "message":"token 已列入黑名单"
 *     }
 *
 *
 */


 /**
 * @apiDefine TokenNotFound
 * @apiVersion 1.0.0
 *
 * @apiError(401 Unauthorized) code 错误码
 * @apiError(401 Unauthorized) message 错误信息
 *
 * @apiErrorExample  没有解析到token
 *     HTTP/1.1 401
 *     {
 *       "code": 401004,
 *       "message":"没有解析到token"
 *     }
 *
 *
 *
 */


 /**
 * @apiDefine TokenCantRefresh
 * @apiVersion 1.0.0
 *
 * @apiError(401 Unauthorized) code 错误码
 * @apiError(401 Unauthorized) message 错误信息
 *
 * @apiErrorExample  token过期，且不能刷新，请重新登录
 *     HTTP/1.1 401
 *     {
        "message": "token失效，不能刷新",
        "code": 401005
    }
 */