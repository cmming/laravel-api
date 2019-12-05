/*
Navicat MySQL Data Transfer

Source Server         : 23306
Source Server Version : 50728
Source Host           : 192.168.50.179:23306
Source Database       : laravel-api

Target Server Type    : MYSQL
Target Server Version : 50728
File Encoding         : 65001

Date: 2019-12-05 09:10:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for email_code
-- ----------------------------
DROP TABLE IF EXISTS `email_code`;
CREATE TABLE `email_code` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '验证码',
  `email` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '邮箱',
  `send_type` int(11) NOT NULL COMMENT '1:注册；2：找回密码',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of email_code
-- ----------------------------

-- ----------------------------
-- Table structure for failed_jobs
-- ----------------------------
DROP TABLE IF EXISTS `failed_jobs`;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of failed_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for jobs
-- ----------------------------
DROP TABLE IF EXISTS `jobs`;
CREATE TABLE `jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `queue` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `attempts` tinyint(3) unsigned NOT NULL,
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `jobs_queue_index` (`queue`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of jobs
-- ----------------------------

-- ----------------------------
-- Table structure for logs
-- ----------------------------
DROP TABLE IF EXISTS `logs`;
CREATE TABLE `logs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '操作用户的id',
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '接口的url',
  `method` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '请求的方法',
  `params` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '请求的参数',
  `ip` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '0.0.0.0' COMMENT '请求人的',
  `operation` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '接口注释',
  `response` longtext COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '响应数据',
  `time` int(11) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of logs
-- ----------------------------

-- ----------------------------
-- Table structure for migrations
-- ----------------------------
DROP TABLE IF EXISTS `migrations`;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of migrations
-- ----------------------------
INSERT INTO `migrations` VALUES ('1', '2014_10_12_000000_create_users_table', '1');
INSERT INTO `migrations` VALUES ('2', '2014_10_12_100000_create_password_resets_table', '1');
INSERT INTO `migrations` VALUES ('3', '2016_06_01_000001_create_oauth_auth_codes_table', '1');
INSERT INTO `migrations` VALUES ('4', '2016_06_01_000002_create_oauth_access_tokens_table', '1');
INSERT INTO `migrations` VALUES ('5', '2016_06_01_000003_create_oauth_refresh_tokens_table', '1');
INSERT INTO `migrations` VALUES ('6', '2016_06_01_000004_create_oauth_clients_table', '1');
INSERT INTO `migrations` VALUES ('7', '2016_06_01_000005_create_oauth_personal_access_clients_table', '1');
INSERT INTO `migrations` VALUES ('8', '2018_12_24_021138_create_table_roles', '1');
INSERT INTO `migrations` VALUES ('9', '2018_12_25_064712_ceate_table_log', '1');
INSERT INTO `migrations` VALUES ('10', '2019_07_10_182006_create_routers_rel', '1');
INSERT INTO `migrations` VALUES ('11', '2019_07_10_215958_create_routers', '1');
INSERT INTO `migrations` VALUES ('12', '2019_07_11_093919_create_roles_routers', '1');
INSERT INTO `migrations` VALUES ('13', '2019_07_22_151210_create_users_roles', '1');
INSERT INTO `migrations` VALUES ('14', '2019_08_19_000000_create_failed_jobs_table', '1');
INSERT INTO `migrations` VALUES ('15', '2019_11_21_083258_create_email_code_table', '1');
INSERT INTO `migrations` VALUES ('16', '2019_11_27_153757_create_jobs_table', '1');

-- ----------------------------
-- Table structure for oauth_access_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_access_tokens`;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_access_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for oauth_auth_codes
-- ----------------------------
DROP TABLE IF EXISTS `oauth_auth_codes`;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_auth_codes
-- ----------------------------

-- ----------------------------
-- Table structure for oauth_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_clients`;
CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_clients
-- ----------------------------

-- ----------------------------
-- Table structure for oauth_personal_access_clients
-- ----------------------------
DROP TABLE IF EXISTS `oauth_personal_access_clients`;
CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_personal_access_clients
-- ----------------------------

-- ----------------------------
-- Table structure for oauth_refresh_tokens
-- ----------------------------
DROP TABLE IF EXISTS `oauth_refresh_tokens`;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of oauth_refresh_tokens
-- ----------------------------

-- ----------------------------
-- Table structure for password_resets
-- ----------------------------
DROP TABLE IF EXISTS `password_resets`;
CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of password_resets
-- ----------------------------

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS `roles`;
CREATE TABLE `roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(40) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO `roles` VALUES ('1', '管理员', '管理员', '2019-12-04 18:20:37', '2019-12-04 18:20:37');

-- ----------------------------
-- Table structure for roles_routers
-- ----------------------------
DROP TABLE IF EXISTS `roles_routers`;
CREATE TABLE `roles_routers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `role_id` int(11) NOT NULL,
  `router_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of roles_routers
-- ----------------------------
INSERT INTO `roles_routers` VALUES ('1', '1', '1', null, null);
INSERT INTO `roles_routers` VALUES ('2', '1', '2', null, null);
INSERT INTO `roles_routers` VALUES ('3', '1', '3', null, null);
INSERT INTO `roles_routers` VALUES ('4', '1', '4', null, null);
INSERT INTO `roles_routers` VALUES ('5', '1', '5', null, null);
INSERT INTO `roles_routers` VALUES ('6', '1', '6', null, null);
INSERT INTO `roles_routers` VALUES ('7', '1', '7', null, null);
INSERT INTO `roles_routers` VALUES ('8', '1', '8', null, null);
INSERT INTO `roles_routers` VALUES ('9', '1', '9', null, null);
INSERT INTO `roles_routers` VALUES ('10', '1', '10', null, null);
INSERT INTO `roles_routers` VALUES ('11', '1', '11', null, null);
INSERT INTO `roles_routers` VALUES ('12', '1', '12', null, null);
INSERT INTO `roles_routers` VALUES ('13', '1', '13', null, null);
INSERT INTO `roles_routers` VALUES ('14', '1', '14', null, null);
INSERT INTO `roles_routers` VALUES ('15', '1', '15', null, null);
INSERT INTO `roles_routers` VALUES ('16', '1', '16', null, null);

-- ----------------------------
-- Table structure for routers
-- ----------------------------
DROP TABLE IF EXISTS `routers`;
CREATE TABLE `routers` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `parent_id` int(11) NOT NULL DEFAULT '0',
  `path` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '页面url路径',
  `component` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '页面文件位置',
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '路由的 key 唯一 不能重复',
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '页面 title key',
  `icon` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '菜单的icon',
  `type` int(11) NOT NULL DEFAULT '1' COMMENT '路由 的类型  1： menu',
  `hidden` int(11) NOT NULL DEFAULT '1' COMMENT '路由 是否显示在菜单上 1不显示',
  `model` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '' COMMENT '路由 所属的模块',
  `sort` int(11) NOT NULL DEFAULT '0' COMMENT '路由 排序依据',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `routers_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of routers
-- ----------------------------
INSERT INTO `routers` VALUES ('1', '0', '/admin/dashborad', 'layout/index', 'dashborad', 'dashborad', 'dashboard', '1', '0', 'dashborad', '0', '2019-12-04 17:18:43', '2019-12-04 17:18:43');
INSERT INTO `routers` VALUES ('2', '1', 'index', 'moudles/dashborad/views/index', 'dashboradIndex', 'dashborad', 'dashboard', '1', '0', 'dashborad', '0', '2019-12-04 17:19:15', '2019-12-04 17:19:15');
INSERT INTO `routers` VALUES ('3', '0', '/admin/ui', 'layout/index', 'ui', 'ui', 'dashboard', '1', '0', 'ui', '0', '2019-12-04 17:19:41', '2019-12-04 17:19:41');
INSERT INTO `routers` VALUES ('4', '3', 'form', 'moudles/ui/views/form', 'form', 'form', 'dashboard', '1', '0', 'ui', '0', '2019-12-04 17:20:12', '2019-12-04 17:20:12');
INSERT INTO `routers` VALUES ('5', '3', 'table', 'moudles/ui/views/file', 'file', 'file', 'dashboard', '1', '0', 'ui', '0', '2019-12-04 17:20:31', '2019-12-04 17:20:31');
INSERT INTO `routers` VALUES ('6', '3', 'imgCropper', 'moudles/ui/views/imgCropper', 'imgCropper', 'imgCropper', 'dashboard', '1', '0', 'ui', '0', '2019-12-04 17:20:43', '2019-12-04 17:20:43');
INSERT INTO `routers` VALUES ('7', '0', '/admin', 'layout/index', 'user', 'user', 'dashboard', '1', '0', 'user', '0', '2019-12-04 17:21:10', '2019-12-04 17:21:10');
INSERT INTO `routers` VALUES ('8', '7', 'user', 'moudles/user/views/list', 'userList', 'userList', 'dashboard', '1', '0', 'user', '0', '2019-12-04 17:21:40', '2019-12-04 18:20:56');
INSERT INTO `routers` VALUES ('9', '0', '/admin/systemManager', 'layout/index', 'systemManager', 'systemManager', 'dashboard', '1', '0', 'systemManager', '0', '2019-12-04 18:24:31', '2019-12-04 18:24:31');
INSERT INTO `routers` VALUES ('10', '9', 'router', 'moudles/systemManager/views/router', 'routerList', 'routerList', 'dashboard', '1', '0', 'systemManager', '0', '2019-12-04 18:24:52', '2019-12-04 18:24:52');
INSERT INTO `routers` VALUES ('11', '9', 'role', 'moudles/systemManager/views/role', 'roleList', 'roleList', 'dashboard', '1', '0', 'systemManager', '0', '2019-12-04 18:25:11', '2019-12-04 18:25:11');
INSERT INTO `routers` VALUES ('12', '9', 'role/store', 'moudles/systemManager/views/role.form', 'storeRole', 'storeRole', 'dashboard', '1', '1', 'systemManager', '0', '2019-12-04 18:25:35', '2019-12-04 18:26:17');
INSERT INTO `routers` VALUES ('13', '9', 'role/update/:id', 'moudles/systemManager/views/role.form', 'updateRole', 'updateRole', 'dashboard', '1', '1', 'systemManager', '0', '2019-12-04 18:25:52', '2019-12-04 18:25:52');
INSERT INTO `routers` VALUES ('14', '9', 'log', 'moudles/systemManager/views/operationLog', 'operationLog', 'operationLog', 'dashboard', '1', '0', 'systemManager', '0', '2019-12-04 18:26:11', '2019-12-04 18:26:11');
INSERT INTO `routers` VALUES ('15', '7', 'user/store', 'moudles/user/views/form', 'userStore', 'userStore', 'dashboard', '1', '1', 'user', '0', '2019-12-04 18:27:29', '2019-12-04 18:27:29');
INSERT INTO `routers` VALUES ('16', '7', 'user/update/:id', 'moudles/user/views/form', 'userUpdate', 'userUpdate', 'dashboard', '1', '1', 'user', '0', '2019-12-04 18:27:47', '2019-12-04 18:27:47');

-- ----------------------------
-- Table structure for routers_rel
-- ----------------------------
DROP TABLE IF EXISTS `routers_rel`;
CREATE TABLE `routers_rel` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT COMMENT '主键',
  `parent_id` int(11) NOT NULL COMMENT '父菜单id',
  `son_id` int(11) NOT NULL COMMENT '字菜单id',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of routers_rel
-- ----------------------------
INSERT INTO `routers_rel` VALUES ('1', '1', '2', null, null);
INSERT INTO `routers_rel` VALUES ('2', '3', '4', null, null);
INSERT INTO `routers_rel` VALUES ('3', '3', '5', null, null);
INSERT INTO `routers_rel` VALUES ('4', '3', '6', null, null);
INSERT INTO `routers_rel` VALUES ('5', '9', '10', null, null);
INSERT INTO `routers_rel` VALUES ('6', '9', '11', null, null);
INSERT INTO `routers_rel` VALUES ('7', '9', '12', null, null);
INSERT INTO `routers_rel` VALUES ('8', '9', '13', null, null);
INSERT INTO `routers_rel` VALUES ('9', '9', '14', null, null);
INSERT INTO `routers_rel` VALUES ('10', '7', '15', null, null);
INSERT INTO `routers_rel` VALUES ('11', '7', '16', null, null);

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'chmi', '294225707@qq.com', null, '$2y$10$L.PwLKYonXBdoAy8XWS8R.3MqIZi3WiH0vMAdgnwPRR3GclWzLwzi', null, '2019-12-04 17:06:15', '2019-12-04 18:22:06');

-- ----------------------------
-- Table structure for users_roles
-- ----------------------------
DROP TABLE IF EXISTS `users_roles`;
CREATE TABLE `users_roles` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL COMMENT '用户id',
  `role_id` int(11) NOT NULL COMMENT '角色id',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ----------------------------
-- Records of users_roles
-- ----------------------------
INSERT INTO `users_roles` VALUES ('1', '1', '1', null, null);
