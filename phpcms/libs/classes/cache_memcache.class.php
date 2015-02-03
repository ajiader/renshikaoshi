<?php 
/*
Memcache::add �� ����һ����Ŀ�����������
Memcache::addServer �� �����ӳ������һ��memcache������
Memcache::close �� �ر�memcache����
Memcache::connect �� ��һ��memcached���������
Memcache::decrement �� ��СԪ�ص�ֵ
Memcache::delete �� �ӷ����ɾ��һ��Ԫ��
Memcache::flush �� ��ϴ��ɾ�����Ѿ��洢�����е�Ԫ��
Memcache::get �� �ӷ���˼��һ��Ԫ��
Memcache::getExtendedStats �� ����������������з�����ͳ����Ϣ
Memcache::getServerStatus �� ���ڻ�ȡһ��������������/����״̬
Memcache::getStats �� ��ȡ������ͳ����Ϣ
Memcache::getVersion �� ���ط������汾��Ϣ
Memcache::increment �� ����һ��Ԫ�ص�ֵ
Memcache::pconnect �� ��һ�����������ĳ־û�����
Memcache::replace �� �滻�Ѿ����ڵ�Ԫ�ص�ֵ
Memcache::set �� Store data at the server
Memcache::setCompressThreshold �� ������ֵ�Զ�ѹ��
Memcache::setServerParams �� ����ʱ�޸ķ�����������״̬
*/
class cache_memcache {

    private $memcache = null;

    public function __construct() {
        $this->memcache = new Memcache;
        $this->host = MEMCACHE_HOST;
        $this->port = MEMCACHE_PORT;
        $this->memcache->connect(MEMCACHE_HOST, MEMCACHE_PORT) or die ("Memcache Could not connect");
        $this->memcache->setCompressThreshold(1000*1000, 0.2); //����1000K����ѹ��
    }

    function __destruct()
    {
        $this->memcache->close();
    }

    public function memcache() {
        $this->__construct();
    }

    public function get($name) {
        $value = $this->memcache->get($name);
        return $value;
    }

    public function replace($key, $var, $flag, $expire="3600" ) {
       $value = $memcache_obj->replace($key, $var, FALSE, $expire);
       return $value; //�ɹ������� ʧ�ܷ��ؼ�
    }

    public function set($name, $value, $ttl = 0, $ext1='', $ext2='') {
        $size =  ceil(strlen($value)/1000);
        $size = ($size>200)?$size:'200';
        $this->memcache->setCompressThreshold($size*1000, 0.2); //����1000K����ѹ��
        return $this->memcache->set($name, $value, false, $ttl);
    }

    public function delete($name) {
        return $this->memcache->delete($name);
    }

    public function flush() {
        return $this->memcache->flush();
    }

    function getAllMemInfo($function = '',$searchkey='',$searchtype = '',$delflag = '')
    {
        $items=$this->memcache->getExtendedStats ('items');        
        $items=$items["$this->host:$this->port"]['items'];
        $k = 0; 
        foreach($items as $key=>$values)
        {   
            $number=$key;       
            $str=$this->memcache->getExtendedStats ("cachedump",$number,0);     
            $line=$str["$this->host:$this->port"];                  
            if( is_array($line) && count($line)>0)
            {                   
                foreach($line as $key=>$value)
                {
                    if($function == 'delete')
                        $this->deleteMem($key);
                    else if($function == 'search')
                    {
                        if($searchkey && $searchtype)
                        {                        
                            if($searchtype == 1)    
                            {
                                if($key == $searchkey)
                                {
                                    if($delflag == 1)
                                        $this->deleteMem($key);
                                    else
                                        $array['data'][$key] = $value[1];
                                }
                            }
                            else if(preg_match("/$searchkey/i",$key))
                            {
                                if($delflag == 1)
                                    $this->deleteMem($key);
                                else
                                    $array['data'][$key] = $value[1];
                            }                              
                        }
                        
                    }
                    else
                        $array['data'][$key] = $value[1];
                    $k++;   
                }
            }
        } 
        if($function != 'delete')
        {
            $array['pager'] = $k;
        }
        return $array;  
    }
    
    function getMemcachePager($page = 1, $size = 30,$searchkey = '',$searchtype = 1,$delflag = '')
    {
        if($searchkey)
            $array = $this->getAllMemInfo('search',$searchkey,$searchtype,$delflag);
        else
            $array = $this->getAllMemInfo();
        $start = ($page - 1)*$size;
        $end   = $page * $size;
        $k = 0 ;

        if(is_array($array['data'])) {
        ksort($array['data']);

            foreach($array['data'] as $key => $val)
            {
                if($k >= $start && $k<$end)
                    $result['data'][$key] = $val; 
                $k++;
            }           
        }
         if($searchkey)
            $result['pager'] = count($array['data']);
         else
            $result['pager'] = $array['pager'];
        return $result;
    }
    
    
}

class cls_cache_data extends cache_memcache
{
    private $_type = array('searchkeyword'      => 'searchkeywords_ad_uri_%s',
                            'searchkeyword_img' => 'searchkeywords_ad_img_%s',
                            'category'          => 'category_ad_uri_%s', 
                            'category_img'      => 'category_ad_img_%s', 
                            'category_info'     => "cat_info_%s_cat_name", 
                            'category_keywords' => 'cat_info_%s_keywords',
                            'build_uri'         => 'build_uri_%s', 
                            'solr_goods'        => 'solr_goods_%s', 
                            'ip'                => 'ip_%s', 
                            'linkd_goods'       => 'linkd_goods_%s', 
                            'click_count'       => 'goods_click_count_%s', 
                            'goods'             => 'goods_ajax_cache_%s', 
                            'sql'               => 'sql_cache_%s', 
                            'get_top10'         => 'get_top10_%s', 
                            'null'              => '%s',
                            'sec_buy_visit'     => 'sec_buy_visit_%s',
                            'category_img_adv'  => 'category_img_adv_%s',
                            'category_img_adv_link'=>'category_img_adv_link_%s',
                            'category_img_adv_width'=>'category_img_adv_width_%s',
                            'category_img_adv_height'=>'category_img_adv_height_%s',
                            'dealer_info_user_id' => 'dealer_info_user_id_%s', // rgn_id
                            'rgn_id_dealer_info_data' => 'rgn_id_dealer_info_data_%s', // rgn_id
                            'local_dealer_id_dealer_info_data' => 'local_dealer_id_dealer_info_data_%s', // local_dealer_id
                            'session_table' => 'session_table_%s', 
                            'session_data_table' => 'session_data_table_%s',
                            'other'             => 'other_%s');
    
    function __construct($cache_method = 0)
    {
        parent::__construct($cache_method);
    }
    
    function __destruct()
    {
        parent::__destruct();
    }
    
    function get($k, $type = 'other')
    {
        // var_dump($this->process_key($k, $type));
        return parent::get($this->process_key($k, $type));
    }
    
    function put($k, $v, $type = 'other', $timeout = 180)
    {
        return parent::put($this->process_key($k, $type), $v, $timeout);
    }
    
    function delete($k, $type = 'other') {
        return parent::delete ( $this->process_key ( $k, $type ) );
    }
    
    private function process_key($k, $type = 'other')
    {
        if (is_array($k))
        {
            $ret = array();
            foreach($k as $key => $value)
            {
                $ret[] = sprintf($this->_type[$value['type']], $value['key']);
            }
            return $ret;
        }
        else
            return sprintf($this->_type[$type], $k);
    }
    
    function setStaticInMemcache($key='',$value='')
    {
        require(ROOT_PATH.'includes/inc_memcache.php');
        
        if($mem['status'] == 1 && !strpos($_SERVER['REQUEST_URI'],'admin/'))
        {
            $page_sn = 'goods';            
            $this->deleteMem($key);             
            if($value)$this->setMem($key, $value,FALSE, $mem['timeout']);          
        }
    } 
    
    function deleteStaticInMemcache($key = '',$timeout = '')
    {
        return $this->deleteMem($key);
    }
    
    //ɾ��MEMCACHE�����в��������ɸú������
    function deleteMem($key = '',$timeout = '')
    {
        if(!ereg('session_table_',$key) && !ereg('session_data_table_',$key))
            return $this->memcache->delete($key);
    }
    
    function setMem($key = '',$value = '',$flag = TRUE,$timeout = '')
    {
        error_reporting(0);
        require(ROOT_PATH.'includes/inc_memcache.php');
        $timeout = $timeout?$timeout:$mem['timeout'];
        if($mem['status'] == 1)
            $this->memcache->set($key, $value, FALSE, $timeout); 
    }
    
    function deleteAll()
    {
        return $this->getAllMemInfo('delete');
    }
    
    function get_contents_for_page($pagename) {
        return $this->memcache->get( $pagename );
    }    
    
    function getAllMemInfo($function = '',$searchkey='',$searchtype = '',$delflag = '')
    {
        $items=$this->memcache->getExtendedStats ('items');        
        $items=$items["$this->host:$this->port"]['items'];
        $k = 0; 
        foreach($items as $key=>$values)
        {   
            $number=$key;       
            $str=$this->memcache->getExtendedStats ("cachedump",$number,0);     
            $line=$str["$this->host:$this->port"];                  
            if( is_array($line) && count($line)>0)
            {                   
                foreach($line as $key=>$value)
                {
                    if($function == 'delete')
                        $this->deleteMem($key);
                    else if($function == 'search')
                    {
                        if($searchkey && $searchtype)
                        {                            
                            if($searchtype == 1)    
                            {
                                if($key == $searchkey)
                                {
                                    if($delflag == 1)
                                        $this->deleteMem($key);
                                    else
                                        $array['data'][$key] = $value[1];
                                }
                            }
                            else if(eregi("$searchkey",$key))
                            {
                                if($delflag == 1)
                                    $this->deleteMem($key);
                                else
                                    $array['data'][$key] = $value[1];
                            }                              
                        }
                    }
                    else
                        $array['data'][$key] = $value[1];
                    $k++;   
                }
            }
        } 
        if($function != 'delete')
        {
            $array['pager'] = $k;
        }
        return $array;  
    }
    
    function getMemcachePager($page = 1, $size = 30,$searchkey = '',$searchtype = 1,$delflag = '')
    {
        if($searchkey)
            $array = $this->getAllMemInfo('search',$searchkey,$searchtype,$delflag);
        else
            $array = $this->getAllMemInfo();
        $start = ($page - 1)*$size;
        $end   = $page * $size;
        $k = 0 ;
        
        if(is_array($array['data'])) {
            foreach($array['data'] as $key => $val)
            {
                if($k >= $start && $k<$end)
                    $result['data'][$key] = $val; 
                $k++;
            }           
        }
         if($searchkey)
            $result['pager'] = count($array['data']);
         else
            $result['pager'] = $array['pager'];
        return $result;
    }
    
    //����ȡmemcache
    function getMem($key)
    {
        return $this->memcache->get($key);
    }
}
?>