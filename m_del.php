<?php
header("Content-Type:text/html;charset=utf-8");
define('PHPCMS_PATH', realpath(dirname(__FILE__) ) . '/'); 

include PHPCMS_PATH . '/phpcms/base.php'; // 


//连接
pc_base::load_sys_class('cache_factory','',0);
$cacheconfig = pc_base::load_config('cache');
$mem = cache_factory::get_instance($cacheconfig)->get_cache('template');
// print_r($mem);

//保存数据
/*$mem->set('key1', 'This is first value', 0, 60);
$val = $mem->get('key1');
echo "Get key1 value: " . $val ."<br />";

//替换数据
$mem->replace('key1', 'This is replace value', 0, 60);
$val = $mem->get('key1');
echo "Get key1 value: " . $val . "<br />";

//保存数组
$arr = array('aaa', 'bbb', 'ccc', 'ddd');
$mem->set('key2', $arr, 0, 60);
$val2 = $mem->get('key2');
echo "Get key2 value: ";
print_r($val2);
echo "<br />";

//删除数据
$mem->delete('key1');
$val = $mem->get('key1');
echo "Get key1 value: " . $val . "<br />";*/

//清除所有数据
$mem->flush();
getMemcacheKeys();
echo "all memcache clean";
/*$val2 = $mem->get('key2');
echo "Get key2 value: ";
print_r($val2);
echo "<br />";*/

//关闭连接
$mem->close();
?>