<?php
defined('IN_PHPCMS') or exit('No permission resources.');
pc_base::load_app_class('admin','admin',0);
pc_base::load_sys_class('form','',0);
pc_base::load_app_func('global');//加载程序处理函数
class zsask extends admin {
	
	private static $db, $aser, $comment, $type, $hits, $check_question, $check_answer, $check_comment;
	
	function __construct() {
		parent::__construct();
		self::$db = pc_base::load_model('ask_question_model');
		self::$aser = pc_base::load_model('ask_answer_model');
		self::$comment = pc_base::load_model('ask_comment_model');
		self::$type = pc_base::load_model('ask_category_model');
		self::$hits = pc_base::load_model('hits_model');
		$this->siteid = $this->get_siteid();
		if (in_array(ROUTE_A, array('init', 'check_question'))) {
	  		self::$check_question = self::$db->count(array('status'=>1));
		  	self::$check_answer = self::$aser->count(array('status'=>1));
		  	self::$check_comment = self::$comment->count(array('status'=>1));
		}
  		
  	}
  	
	//问题列表
  	function init() {
  		$ZSASKCATE = getcache('categorys_'.$this->siteid, 'zsask');
	  	$page = max(intval($_GET['page']), 1);
  		$where = 'siteid='.$this->siteid;
		$title = safe_replace($_GET['name']);
		if($title) $where .= " and question like '%$title%' ";
  		$infos = self::$db->listinfo($where, 'qid DESC', $page, 14);
  		$pages = self::$db->pages;
  		include $this->admin_tpl('init');
  	}
  	
  //栏目显示
  	function cat_list() {
  		include $this->admin_tpl('category_list');
  	}
  	
 //回答
	function answer() {
		$qid = intval($_GET['qid']) ? intval($_GET['qid']) : (intval($_POST['qid']) ? intval($_POST['qid']) : showmessage('错误，问题不存在！'));
	
		if (!$qid) showmessage('错误，问题不存在！');
		$ZSASKCATE = getcache('categorys_'.$this->siteid, 'zsask');
		$info = self::$db->get_one('qid='.$qid.' AND status!=1');
		//if (!$info && !$this->admin) showmessage('问题正在审核或已删除！');
		if (!$info) showmessage('问题正在审核或已删除！');
		$ts_answer = self::$aser->select('qid='.$qid.' AND zid=0 AND status !=1', '*', '', 'status DESC, addtime ASC');
		if (isset($_POST['dosubmit'])) {
			//if ($info['status'] ==99) showmessage('该问题已经解决了，请换个问题回答吧！');
			if ($info['status'] ==98) showmessage('问题已经关闭！');
			//if (!$this->config['agree_answer']) check_member($this->userid);//检查配置是否同意游客回答
			if ($this->config['check_answer'])  $status = 1; //状态1开启回答审核
			
			$_answer = $_POST['answer'];
			if (trim($_answer)){
				
				$_userid = $this->userid;
				if ($_userid == $info['userid'] && $_userid) showmessage('您不可以回答自己的问题！');
				if ($this->IP == $info['ip'] && !$this->admin) showmessage('您不可以回答自己的问题！');
				
				foreach ($ts_answer as $an) {
					$_u[] = $an['userid'];
					$_p[] = $an['ip'];
				}
				//if (in_array($this->IP, $_p) && !$this->admin) showmessage('不可重复回答同一问题，您可以完善你的回答！');
				if (in_array($this->userid, $_u) && $this->userid) showmessage('不可重复回答同一问题，您可以完善你的回答！');
                
				//获取伪静态url
				$url = geturlrule($qid);
				
				//判断是够已经回答 已经回答更新答案
				if($ts_answer){
				    self::$aser->update(array('content' =>$_answer),array('qid' =>$qid, 'zid'=>0 ));
					self::$db->update(array('aid'=>$ts_answer[0]['aid'],'url' => $url), array('qid'=>$qid));		
					showmessage('答案更新成功！', HTTP_REFERER,'', 'edit');
				}else{
				    self::$aser->insert(array('content' =>$_answer, 'qid' =>$qid, 'siteid' => $this->siteid, 'userid' =>$_userid, 'status'=>$status, 'ip'=>$this->IP, 'addtime'=>SYS_TIME, 'updatetime'=>SYS_TIME));
					$insert_id = self::$aser->insert_id();
				
					//更新最佳答案
                    self::$db->update(array('aid'=>$insert_id,'url' => $url), array('qid'=>$qid));
					showmessage('回答成功！', HTTP_REFERER,'', 'edit');
				}
				
			}else {
				showmessage('请输入你的答案！');
			}
		}
		
		//$SEO = seo(1,'', $info['question'].'');
		$page = max(intval($_GET['page']), 1);
		include $this->admin_tpl('answer');
	}
	
   

  	//添加栏目
  	function add() {
  		if (isset($_POST['dosubmit'])) {
  			$_POST['info']['addtime'] = SYS_TIME;
  			$_POST['info']['updatetime'] = SYS_TIME;
  			$_POST['info']['status'] = 99;
  			$parentid = $_POST['info']['parentid'];
              $_POST['info']['siteid'] = $this->siteid;
  			$arr = get_pidgd($parentid);
  			
  			$_POST['info']['parentid'] = $arr[0];
  			$_POST['info']['grade'] = $arr[1];
  			if (intval($_POST['addmethod'] ==2)) {
  				$cats = explode("\n", $_POST['info']['catname']);
  				foreach ($cats as $v) {
  					if (trim($v)) {
  						$_POST['info']['catname'] = trim($v);
  						self::$type->insert($_POST['info']);
  					}
  				}
  			}else {
  				$id = self::$type->insert($_POST['info'], true);
  			}
  			$this->update_cache();//更新栏目缓存
  			showmessage('操作成功！', HTTP_REFERER);
  		}
  		$pid = $_GET['pid'] ? $_GET['pid'] : '';
  		include $this->admin_tpl('addcategory');
  	}
  	
  	//删除栏目
  	function delete() {
  		$id = intval($_GET['catid']) ? intval($_GET['catid']) : showmessage('id不能为空！');
  		
  		self::$type->delete(array('catid'=>$id));
  		$rs = self::$type->select(array('parentid'=>$id));
  		foreach ($rs as $v) {
  			$ids[] = $v['catid'];
  		}
  		$where = to_sqls($ids, '', 'parentid');
  		self::$type->delete($where);
  		self::$type->delete(array('parentid'=>$id));
  		$this->update_cache();//更新栏目缓存
  		
  		showmessage('删除成功！', HTTP_REFERER);
  	}
  	
  	//编辑栏目
  	function edit(){
  		
  		$cid = intval($_GET['catid']) ? intval($_GET['catid']) : showmessage('栏目ID为空！');
  		
  		if (isset($_POST['dosubmit'])) {
  			$parentid = $_POST['parentid'];
            $_POST['info']['siteid'] = $this->siteid;
  			$arr = get_pidgd($parentid);
  			if ($arr[0] !=$_POST['pid']) {
	  			$_POST['info']['parentid'] = $arr[0];
	  			$_POST['info']['grade'] = $arr[1];
	  			$rs = self::$type->select(array('parentid'=>$cid));
	  			if ($rs[0]) {
	  				if ($arr[1] >2) {
	  					showmessage('最大栏目层级不得超过三级！');
	  				}else {
	  					$where = ' parentid IN (';
	  					foreach ($rs as $v) {
	  						$where .= $v['catid'].', ';
	  					}
	  					$where = substr($where, 0, -2).') ';
	  					$_rs = self::$type->get_one($where);
	  					if ($_rs) showmessage('最大栏目层级不得超过三级！');
	  				}
	  			}
	  			self::$type->update(array('grade'=>($arr[1]+1)), array('parentid'=>$cid));
  			}
  			if ($arr[0] == $cid) showmessage('错误，父ID与子ID相同！');
  			self::$type->update($_POST['info'], array('catid'=>$cid));
  			$this->update_cache();//更新栏目缓存
  			showmessage('操作成功！', HTTP_REFERER);
  		}
  		$info = self::$type->get_one(array('catid'=>$cid));
  		include $this->admin_tpl('edit');
  		
  	}
  	
  	//栏目排序
  	function listorder() {
		if(isset($_GET['dosubmit'])) {
			foreach($_POST['listorders'] as $id => $listorder) {
				self::$type->update(array('listorder'=>$listorder),array('catid'=>$id));
			}
			$this->update_cache();
			showmessage(L('operation_success'), HTTP_REFERER);
		} else {
			showmessage(L('operation_failure'));
		}
  		
  	}
	 
  	
  	function display() {
  		$catid = intval($_GET['cid']) ? intval($_GET['cid']) : exit('0');
  		if (intval($_GET['status']) ==1)
  			self::$type->update(array('status'=>99), array('catid'=>$catid));
  		else
  			self::$type->update(array('status'=>0), array('catid'=>$catid));
  		exit('1');
  	}
  	
  	//更新栏目缓存
  	function update_cache() {
  		$categorys = self::$type->select('siteid='.$this->siteid, '*', '', 'listorder ASC');
  		foreach ($categorys as $v) {
  			$_categorys[$v['catid']] = $v;
  		}
  		setcache('categorys_'.$this->siteid, $_categorys, 'zsask');
  		showmessage('更新栏目缓存成功！', HTTP_REFERER);
  	}
  	
  	
  	//删除提问
  	function delquestion() {
  		$qidarr = $_POST['ids'] ? $_POST['ids'] : showmessage('您至少选择一项！');
  		$where = to_sqls($qidarr, '', 'qid');
  		
  		self::$db->delete($where); //删除问题
  		self::$aser->delete($where); //删除回答
  		self::$comment->delete($where); //删除评论
  		foreach ($qidarr as $v) {//删除点击
  			self::$hits->delete(array('hitsid'=>'zsask-'.$v));
  		}
  		showmessage('操作成功！', HTTP_REFERER);
  	}
  	
  	//删除回答
  	function delanswer() {
  		if (isset($_POST['ids'])) {
	  		$qidarr = $_POST['ids'] ? $_POST['ids'] : showmessage('您至少选择一项！');
	  		$where = to_sqls($qidarr, '', 'aid');
	  		self::$aser->delete($where);
	  		self::$comment->delete($where);
	  		showmessage('操作成功！', HTTP_REFERER);
  		}else {
	  		$aid = intval($_GET['aid']) ? intval($_GET['aid']) : exit('0');
	  		self::$aser->delete(array('aid'=>$aid));
	  		self::$comment->delete(array('aid'=>$aid));
	  		exit('1');
  		}
  	}
  	
  	//删除评论
  	function delcomment() {
  		if (isset($_POST['ids'])) {
	  		$qidarr = $_POST['ids'] ? $_POST['ids'] : showmessage('您至少选择一项！');
	  		$where = to_sqls($qidarr, '', 'cid');
	  		self::$comment->delete($where);
	  		showmessage('操作成功！', HTTP_REFERER);
  		}else {
	  		$cid = intval($_GET['cid']) ? intval($_GET['cid']) : exit('0');
	  		$aid = intval($_GET['aid']) ? intval($_GET['aid']) : exit('0');
	  		self::$comment->delete(array('cid'=>$cid, 'aid'=>$aid));
	  		exit('1');
  		}
  	}
  	
  	//问答配置
  	function settings() {
  		if (isset($_POST['dosubmit'])) {
  			$data = $_POST['set'];
  			setcache('settings', $data, 'zsask');
			showmessage('操作成功！', HTTP_REFERER);
  		}
		$urlrule_model = pc_base::load_model('urlrule_model');
		$urlrulelist = $urlrule_model->select("module='zsask'", '*', '', 'urlruleid ASC');
  		$settings = getcache('settings', 'zsask');
  		include $this->admin_tpl('settings');
  	}
  	
  	//审核问题
  	function check_question() {
	  	$ZSASKCATE = getcache('categorys_'.$this->siteid, 'zsask');
	  	$catmenu = '
<table width="100%" cellspacing="0">
<tr><td colspan="2">
<div class="explain-col content-menu" id="check_catmenu" style="margin-bottom:5px;padding:5px 25px;"> 
<a id="func_" href="goshouye.php?m=zsask&c=zsask&a=check_question&menuid='.$_GET['menuid'].'">审核提问</a> <span>|</span> 
<a id="func_check_answer" href="goshouye.php?m=zsask&c=zsask&a=check_question&func=check_answer&menuid='.$_GET['menuid'].'">审核回答</a>('.self::$check_answer.') <span>|</span> 
<a id="func_check_comment" href="goshouye.php?m=zsask&c=zsask&a=check_question&func=check_comment&menuid='.$_GET['menuid'].'">审核评论</a>('.self::$check_comment.')</div>
</td></tr>
</table>
<script type="text/javascript">
$("#func_'.$_GET['func'].'").addClass("blue");
</script>';
	  	
  		if (isset($_GET['dosubmit'])) {
	  		$qidarr = $_POST['ids'] ? $_POST['ids'] : showmessage('您至少选择一项！');
	  		$where = to_sqls($qidarr, '', 'qid');
	  		$where .= ' AND status=1 and siteid='.$this->siteid;
	  		self::$db->update(array('status'=>0), $where);
	  		showmessage('操作成功！', HTTP_REFERER);
  		}elseif (isset($_GET['ajax'])) {
  			$qid = intval($_GET['qid']) ? intval($_GET['qid']) : exit('0');
  			self::$db->update(array('status'=>0), array('qid'=>$qid, 'status'=>1));
  			exit('1');
  		}
	  		
	  	$page = max(intval($_GET['page']), 1);
	  	$where = 'status =1 and siteid='.$this->siteid;
	  	$infos = self::$db->listinfo($where, 'qid DESC', $page, 14);
	  	$pages = self::$db->pages;
	  	if ($_GET['func'] =='check_answer') {
	  		$this->check_answer($catmenu);
	  	}elseif ($_GET['func'] =='check_comment') {
	  		$this->check_comment($catmenu);
	  	}else {
	  		include $this->admin_tpl('check_question');
	  	}
  	}
  	
  	//审核回答
  	function check_answer($catmenu) {
  		
  		if (isset($_GET['dosubmit'])) {
	  		$qidarr = $_POST['ids'] ? $_POST['ids'] : showmessage('您至少选择一项！');
	  		$where = to_sqls($qidarr, '', 'aid');
	  		$where .= ' AND status=1';
	  		self::$aser->update(array('status'=>0), $where);
	  		showmessage('操作成功！', HTTP_REFERER);
  		}elseif (isset($_GET['ajax'])) {
  			$aid = intval($_GET['aid']) ? intval($_GET['aid']) : exit('0');
  			self::$aser->update(array('status'=>0), array('aid'=>$aid, 'status'=>1));
  			exit('1');
  		}
	  		
	  	$page = max(intval($_GET['page']), 1);
	  	$where = 'status =1';
	  	$infos = self::$aser->listinfo($where, 'qid DESC', $page, 14);
	  	$pages = self::$aser->pages;
  		include $this->admin_tpl('check_answer');
  	}
  	
  	//审核评论
  	function check_comment($catmenu) {
  		
  		if (isset($_GET['dosubmit'])) {
	  		$qidarr = $_POST['ids'] ? $_POST['ids'] : showmessage('您至少选择一项！');
	  		$where = to_sqls($qidarr, '', 'cid');
	  		$where .= ' AND status=1';
	  		self::$comment->update(array('status'=>0), $where);
	  		showmessage('操作成功！', HTTP_REFERER);
  		}elseif (isset($_GET['ajax'])) {
  			$cid = intval($_GET['cid']) ? intval($_GET['cid']) : exit('0');
  			self::$comment->update(array('status'=>0), array('cid'=>$cid, 'status'=>1));
  			exit('1');
  		}
	  		
	  	$page = max(intval($_GET['page']), 1);
	  	$where = 'status =1';
	  	$infos = self::$comment->listinfo($where, 'aid DESC', $page, 14);
	  	$pages = self::$comment->pages;
  		include $this->admin_tpl('check_comment');
  	}
  	
  	
  	
  	
  	
  	
  	
  	
	/**
	* 写入文件
	* @param $file 文件路径
	* @param $copyjs 是否复制js，跨站调用评论时，需要该js
	*/
	private function createhtml($file, $copyjs = '') {
		$data = ob_get_contents();
		ob_clean();
		$dir = dirname($file);
		if(!is_dir($dir)) {
			mkdir($dir, 0777,1);
		}
		if ($copyjs && !file_exists($dir.'/js.html')) {
			@copy(PC_PATH.'modules/content/templates/js.html', $dir.'/js.html');
		}
		$strlen = file_put_contents($file, $data);
		@chmod($file,0777);
		if(!is_writable($file)) {
			$file = str_replace(PHPCMS_PATH,'',$file);
			showmessage(L('file').'：'.$file.'<br>'.L('not_writable'));
		}
	//	return $strlen;
	}
  	
}
?>