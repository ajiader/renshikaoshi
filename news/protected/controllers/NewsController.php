<?php

class NewsController extends Controller
{
    public $layout='//layouts/newscolumn1';
	public $kaozcUrl,$newscount;
    
	public function actionIndex()
	{
		$criteria = new CDbCriteria(); 
		if(isset($_GET['q'])) {
		    $criteria->addSearchCondition('title', $_GET['q']);
		}
		$criteria->addCondition("status <> 99"); //查询条件
        $criteria->order = 'id desc'; 
		if(strstr($_SERVER['HTTP_HOST'],'kaogwy')){
		    $model = NewsGwy::model();
			$this->pageTitle = "考公务员-资讯中心";
		}else{
		    $model = News::model();
			$this->pageTitle = "考职称-资讯中心";
		}
       
		$count = $model->count($criteria); 
        $this->newscount = $count;
		$pager = new CPagination($count);    
        $pager->pageSize = 10;             
        $pager->applyLimit($criteria);

		$artList = $model->findAll($criteria); 
        $this->render('index',array('pages'=>$pager,'list'=>$artList)); 
	}

	// Uncomment the following methods and override them if needed
	/*
	public function filters()
	{
		// return the filter configuration for this controller, e.g.:
		return array(
			'inlineFilterName',
			array(
				'class'=>'path.to.FilterClass',
				'propertyName'=>'propertyValue',
			),
		);
	}

	public function actions()
	{
		// return external action classes, e.g.:
		return array(
			'action1'=>'path.to.ActionClass',
			'action2'=>array(
				'class'=>'path.to.AnotherActionClass',
				'propertyName'=>'propertyValue',
			),
		);
	}
	*/
}