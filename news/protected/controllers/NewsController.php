<?php

class NewsController extends Controller
{
    public $layout='//layouts/newscolumn1';
	public $kaozcUrl,$newscount;
    public $seotitle,$seokeywords,$seodescription;
	public function actionIndex()
	{
		$criteria = new CDbCriteria(); 
		if(isset($_GET['q'])) {
		    $criteria->addSearchCondition('title', $_GET['q']);
		}
		$criteria->addCondition("catid in ('282','283','284')"); //查询条件
        $criteria->order = 'id desc'; 
		$model = News::model();
       
		$count = $model->count($criteria); 
        $this->newscount = $count;
		$pager = new CPagination($count);    
        $pager->pageSize = 10;             
        $pager->applyLimit($criteria);

		$artList = $model->findAll($criteria); 

		$connection = Yii::app()->db;
		$sql = "SELECT * FROM `v9_seo` where id=64";
		$command = $connection->createCommand($sql);
		$result = $command->queryRow();
		
		$this->seotitle = $result['title'];
		$this->seokeywords = $result['keywords'];
		$this->seodescription = $result['description'];
        $this->render('index',array('pages'=>$pager,'list'=>$artList, 'seolist' =>$result )); 
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