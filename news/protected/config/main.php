<?php

// uncomment the following to define a path alias
// Yii::setPathOfAlias('local','path/to/local-folder');

// This is the main Web application configuration. Any writable
// CWebApplication properties can be configured here.
return array(
	'basePath'=>dirname(__FILE__).DIRECTORY_SEPARATOR.'..',  //当前应用根目录的绝对物理路径
	'name'=>'考试资讯中心',  //当前应用的名称

	// preloading 'log' component// 预载入log（记录）应用组件，这表示该应用组件无论它们是否被访问都要被创建。该应用的参数配置在下面以“components”为关键字的数组中设置。
	'preload'=>array('log'), //log为组件ID

	// autoloading model and component classes 自动载入的模型和组件类
	'import'=>array(
		'application.models.*', //载入“application/models/”文件夹下的所有模型类
		'application.components.*' , //载入“application/components/”文件夹下的所有应用组件类
	),

    'defaultController'=>'news', //设置默认控制器类

	'modules'=>array(
		// uncomment the following to enable the Gii tool
		
		// 'gii'=>array(
		// 	'class'=>'system.gii.GiiModule',
		// 	'password'=>'123123',
		//  	// If removed, Gii defaults to localhost only. Edit carefully to taste.
		// 	'ipFilters'=>array('127.0.0.1','::1'),
		// ),
		
	),

	// application components 当前应用的组件配置。更多可供配置的组件详见下面的“核心应用组件”
	'components'=>array(
	    'format' => array(
            'class' => "Formatter",
        ),
		'user'=>array(  //user（用户）组件配置，“user”为组件ID
			// enable cookie-based authentication // 可以使用基于cookie的认证
			'allowAutoLogin'=>true, //允许自动登录
		),
		/*
    'cache'=>array( //缓存组件
	    'class'=>'CMemCache', //缓存组件类
        'servers'=>array( //MemCache缓存服务器配置
            array('host'=>'server1', 'port'=>11211, 'weight'=>60), //缓存服务器1
            array('host'=>'server2', 'port'=>11211, 'weight'=>40), //缓存服务器2
         ),
     ),
	 */
		// uncomment the following to enable URLs in path-format //URL路由管理器
		
		'urlManager'=>array(
			'urlFormat'=>'path', //URL格式共支持两种格式：'path'格式（如：/path/to/EntryScript.php/name1/value1/name2/value2...）和'get'格式（如:/path/to/EntryScript.php?name1=value1&name2=value2...）。当使用'path'格式时，需要设置如下的规则：'rules'=>array( //URL规则。语法：<参数名:正则表达式>
			'showScriptName'=>false,             //隐藏index.php
			'rules'=>array(
				'<controller:\w+>/<id:\d+>'=>'<controller>/view',
				'<controller:\w+>/<action:\w+>/<id:\d+>'=>'<controller>/<action>',
				'<controller:\w+>/<action:\w+>'=>'<controller>/<action>',
			),
		),
		/*
		'db'=>array(  //db（数据库）组件配置，“db”为组件ID
			'connectionString' => 'sqlite:'.dirname(__FILE__).'/../data/testdrive.db',  //连接数据库的DSN字符串
			'tablePrefix' => 'tbl_', //数据表前缀
		),
		*/
		// uncomment the following to use a MySQL database
		
		'db'=>array(
			'connectionString' => 'mysql:host=118.123.213.88;dbname=kaozc', //连接mysql数据库
			'emulatePrepare' => true,
			'username' => 'read_kaozc', //MySQL数据库用户名
			'password' => 'kaozcgwy@!#.**',  //MySQL数据库用户密码
			'tablePrefix' => 'v9_', //MySQL数据库表前缀
			'charset' => 'utf8', //MySQL数据库编码
		),
		
		'errorHandler'=>array(
			// use 'site/error' action to display errors // 使用SiteController控制器类中的actionError方法显示错误
            'errorAction'=>'site/error',//遇到错误时，运行的操作。控制器名和方法名均小写，并用斜线“/”隔开
        ),
		'log'=>array( //记录
			'class'=>'CLogRouter', //处理记录信息的类
			'routes'=>array(
				array(
					'class'=>'CFileLogRoute', //处理错误信息的类
					'levels'=>'error, warning', //错误等级
				),
				// uncomment the following to show log messages on web pages 如要将错误记录消息在网页上显示，取消下面的注释即可
				/*
				array(
					'class'=>'CWebLogRoute',
				),
				*/
			),
		),
	),

	// application-level parameters that can be accessed
	// using Yii::app()->params['paramName']
	'params'=>array(
		// this is used in contact page
		'adminEmail'=>'webmaster@example.com',
	),
);