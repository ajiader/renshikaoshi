<?php
defined('IN_PHPCMS') or exit('No permission resources.');
//模型缓存路径
define('CACHE_MODEL_PATH',CACHE_PATH.'caches_model'.DIRECTORY_SEPARATOR.'caches_data'.DIRECTORY_SEPARATOR);
//定义在单独操作内容的时候，同时更新相关栏目页面
define('RELATION_HTML',true);

pc_base::load_app_class('admin','admin',0);
pc_base::load_sys_class('form','',0);
pc_base::load_app_func('util');
pc_base::load_sys_class('format','',0);

class content2 extends admin {
    private $db,$priv_db;
    public $siteid,$categorys;
    public function __construct() {
        parent::__construct();
        $this->db = pc_base::load_model('content_model');
        $this->siteid = $this->get_siteid();
        $this->categorys = getcache('category_content_'.$this->siteid,'commons');
        //权限判断
        if(isset($_GET['catid']) && $_SESSION['roleid'] != 1 && ROUTE_A !='pass' && strpos(ROUTE_A,'public_')===false) {
            $catid = intval($_GET['catid']);
            $this->priv_db = pc_base::load_model('category_priv_model');
            $action = $this->categorys[$catid]['type']==0 ? ROUTE_A : 'init';
            $priv_datas = $this->priv_db->get_one(array('catid'=>$catid,'is_admin'=>1,'action'=>$action));
            if(!$priv_datas) showmessage(L('permission_to_operate'),'blank');
        }
    }
    
    public function init() {
        $show_header = $show_dialog  = $show_pc_hash = '';
        $modelid = 1;
        $admin_username = param::get_cookie('admin_username');
        //查询当前的工作流
        $setting = string2array($category['setting']);
        $workflowid = $setting['workflowid'];
        $workflows = getcache('workflow_'.$this->siteid,'commons');
        $workflows = $workflows[$workflowid];
        $workflows_setting = string2array($workflows['setting']);

        //将有权限的级别放到新数组中
        $admin_privs = array();
        foreach($workflows_setting as $_k=>$_v) {
            if(empty($_v)) continue;
            foreach($_v as $_value) {
                if($_value==$admin_username) $admin_privs[$_k] = $_k;
            }
        }
        //工作流审核级别
        $workflow_steps = $workflows['steps'];
        $workflow_menu = '';
        $steps = isset($_GET['steps']) ? intval($_GET['steps']) : 0;
        //工作流权限判断
        if($_SESSION['roleid']!=1 && $steps && !in_array($steps,$admin_privs)) showmessage(L('permission_to_operate'));
        $this->db->set_model($modelid);
        if($this->db->table_name==$this->db->db_tablepre) showmessage(L('model_table_not_exists'));;
        $status = $steps ? $steps : 99;
        if(isset($_GET['reject'])) $status = 0;
        $where = 'status='.$status;
        //搜索

        if(isset($_GET['start_time']) && $_GET['start_time']) {
            $start_time = strtotime($_GET['start_time']);
            $where .= " AND `inputtime` > '$start_time'";
        }
        if(isset($_GET['end_time']) && $_GET['end_time']) {
            $end_time = strtotime($_GET['end_time']);
            $where .= " AND `inputtime` < '$end_time'";
        }
        if($start_time>$end_time) showmessage(L('starttime_than_endtime'));
        if(isset($_GET['keyword']) && !empty($_GET['keyword'])) {
            $type_array = array('title','description','username');
            $searchtype = intval($_GET['searchtype']);
            if($searchtype < 3) {
                $searchtype = $type_array[$searchtype];
                $keyword = strip_tags(trim($_GET['keyword']));
                $where .= " AND `$searchtype` like '%$keyword%'";
            } elseif($searchtype==3) {
                $keyword = intval($_GET['keyword']);
                $where .= " AND `id`='$keyword'";
            }
        }
        if(isset($_GET['posids']) && !empty($_GET['posids'])) {
            $posids = $_GET['posids']==1 ? intval($_GET['posids']) : 0;
            $where .= " AND `posids` = '$posids'";
        }

        //导出TXT
        if ($_GET['importTxt']) {
            $datas = $this->db->listinfo($where,'id desc',$_GET['page'],5000);
            $textContent = '';
            foreach ($datas as $data) {
                $textContent = $textContent.$data['url']."\r\n";
            }
            Header( "Content-type:   application/octet-stream ");
            Header( "Content-Disposition:   attachment;   filename=urls.txt ");
            echo $textContent;
            die();
        }
        //导出TXT END

        $datas = $this->db->listinfo($where,'id desc',$_GET['page']);
        $pages = $this->db->pages;
        $pc_hash = $_SESSION['pc_hash'];
        for($i=1;$i<=$workflow_steps;$i++) {
            if($_SESSION['roleid']!=1 && !in_array($i,$admin_privs)) continue;
            $current = $steps==$i ? 'class=on' : '';
            $r = $this->db->get_one(array('catid'=>$catid,'status'=>$i));
            $newimg = $r ? '<img src="'.IMG_PATH.'icon/new.png" style="padding-bottom:2px" onclick="window.location.href=\'?m=content&c=content&a=&menuid='.$_GET['menuid'].'&catid='.$catid.'&steps='.$i.'&pc_hash='.$pc_hash.'\'">' : '';
            $workflow_menu .= '<a href="?m=content&c=content&a=&menuid='.$_GET['menuid'].'&catid='.$catid.'&steps='.$i.'&pc_hash='.$pc_hash.'" '.$current.' ><em>'.L('workflow_'.$i).$newimg.'</em></a><span>|</span>';
        }
        if($workflow_menu) {
            $current = isset($_GET['reject']) ? 'class=on' : '';
            $workflow_menu .= '<a href="?m=content&c=content&a=&menuid='.$_GET['menuid'].'&catid='.$catid.'&pc_hash='.$pc_hash.'&reject=1" '.$current.' ><em>'.L('reject').'</em></a><span>|</span>';
        }
        include $this->admin_tpl('content2_list');
    }
              
}
?>


