<?php
error_reporting(E_ALL ^ E_NOTICE); 
// change the following paths if necessary
$yii=dirname(__FILE__).'/../../yii/framework/yii.php'; //Yii框架位置
$config=dirname(__FILE__).'/protected/config/main.php'; //当前应用程序的主配置文件位置
 
// remove the following lines when in production mode// 部署正式环境时，去掉下面这行
defined('YII_DEBUG') or define('YII_DEBUG',true); //是否运行在调试模式下
// specify how many levels of call stack should be shown in each log message
defined('YII_TRACE_LEVEL') or define('YII_TRACE_LEVEL',3);

require_once($yii); //包含Yii框架
Yii::createWebApplication($config)->run();//根据主配置文件建立应用实例，并运行。你可以在当前应用的任何位置通过Yii::app()来访问这个实例。
