<?php
error_reporting(E_ALL ^ E_NOTICE); 
// change the following paths if necessary
$yii=dirname(__FILE__).'/../../yii/framework/yii.php'; //Yii���λ��
$config=dirname(__FILE__).'/protected/config/main.php'; //��ǰӦ�ó�����������ļ�λ��
 
// remove the following lines when in production mode// ������ʽ����ʱ��ȥ����������
defined('YII_DEBUG') or define('YII_DEBUG',true); //�Ƿ������ڵ���ģʽ��
// specify how many levels of call stack should be shown in each log message
defined('YII_TRACE_LEVEL') or define('YII_TRACE_LEVEL',3);

require_once($yii); //����Yii���
Yii::createWebApplication($config)->run();//�����������ļ�����Ӧ��ʵ���������С�������ڵ�ǰӦ�õ��κ�λ��ͨ��Yii::app()���������ʵ����
