<?php
class Formatter extends CFormatter{
 
    public function formatFriendlyDate($timestamp){
        $second = time()-$timestamp;
        switch (true){
            case $second < 3600:
                $m = round($second/60);
                if($m == 0 ){
                    return "刚刚";
                }
                return round($second/60).' 分钟前';
            case $second < 86400:
                return round($second/3600).' 小时前';
            case $second < (86400*7):
                return round($second/86400).' 天前';
            case $second < (86400*7*4):
                return round($second/(86400*7)).' 周前';
            default :
                return $this->formatDatetime($timestamp);
        }
    }
}
?>