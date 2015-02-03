<?php
$this->breadcrumbs=array(
	'News',
);
$this->kaozcUrl = 'http://www.kaozc.com';

?>

                	<ul class="wrap">
                    <?php foreach($list as $v): ?>
												<li class="wrap">
							<div>
								<h5><a href="<?=$v->url?>" target="_blank"><?=$v->title?></a></h5>
								<p><?=$v->description?></p>
							</div>
							<div class="adds">发布时间：<?php echo Yii::app()->format->formatFriendlyDate($v->updatetime); ?></div>
						</li>
						<?php endforeach; ?>		
                	</ul>
                    <div id="pages" class="text-c mg_t20"><?php    
    
    $this->widget('CLinkPager',array(    
        'header'=>'',    
        'firstPageLabel' => '首页',    
        'lastPageLabel' => '末页',    
        'prevPageLabel' => '上页',    
        'nextPageLabel' => '下页',    
        'pages' => $pages,    
        'maxButtonCount'=>10    
        )    
    );    
    ?>    </div>
