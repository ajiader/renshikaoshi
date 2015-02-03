<?php

/**
 * This is the model class for table "{{news_gwy}}".
 *
 * The followings are the available columns in table '{{news_gwy}}':
 * @property integer $id
 * @property integer $catid
 * @property integer $typeid
 * @property string $title
 * @property string $style
 * @property string $thumb
 * @property string $keywords
 * @property string $description
 * @property integer $posids
 * @property string $url
 * @property integer $listorder
 * @property integer $status
 * @property integer $sysadd
 * @property integer $islink
 * @property string $username
 * @property string $inputtime
 * @property string $updatetime
 * @property string $city_id
 */
class NewsGwy extends CActiveRecord
{
	/**
	 * Returns the static model of the specified AR class.
	 * @param string $className active record class name.
	 * @return NewsGwy the static model class
	 */
	public static function model($className=__CLASS__)
	{
		return parent::model($className);
	}

	/**
	 * @return string the associated database table name
	 */
	public function tableName()
	{
		return '{{news_gwy}}';
	}

	/**
	 * @return array validation rules for model attributes.
	 */
	public function rules()
	{
		// NOTE: you should only define rules for those attributes that
		// will receive user inputs.
		return array(
			array('typeid, url, username', 'required'),
			array('catid, typeid, posids, listorder, status, sysadd, islink', 'numerical', 'integerOnly'=>true),
			array('title', 'length', 'max'=>80),
			array('style', 'length', 'max'=>24),
			array('thumb, url', 'length', 'max'=>100),
			array('keywords', 'length', 'max'=>40),
			array('description', 'length', 'max'=>255),
			array('username', 'length', 'max'=>20),
			array('inputtime, updatetime, city_id', 'length', 'max'=>10),
			// The following rule is used by search().
			// Please remove those attributes that should not be searched.
			array('id, catid, typeid, title, style, thumb, keywords, description, posids, url, listorder, status, sysadd, islink, username, inputtime, updatetime, city_id', 'safe', 'on'=>'search'),
		);
	}

	/**
	 * @return array relational rules.
	 */
	public function relations()
	{
		// NOTE: you may need to adjust the relation name and the related
		// class name for the relations automatically generated below.
		return array(
		);
	}

	/**
	 * @return array customized attribute labels (name=>label)
	 */
	public function attributeLabels()
	{
		return array(
			'id' => 'ID',
			'catid' => 'Catid',
			'typeid' => 'Typeid',
			'title' => 'Title',
			'style' => 'Style',
			'thumb' => 'Thumb',
			'keywords' => 'Keywords',
			'description' => 'Description',
			'posids' => 'Posids',
			'url' => 'Url',
			'listorder' => 'Listorder',
			'status' => 'Status',
			'sysadd' => 'Sysadd',
			'islink' => 'Islink',
			'username' => 'Username',
			'inputtime' => 'Inputtime',
			'updatetime' => 'Updatetime',
			'city_id' => 'City',
		);
	}

	/**
	 * Retrieves a list of models based on the current search/filter conditions.
	 * @return CActiveDataProvider the data provider that can return the models based on the search/filter conditions.
	 */
	public function search()
	{
		// Warning: Please modify the following code to remove attributes that
		// should not be searched.

		$criteria=new CDbCriteria;

		$criteria->compare('id',$this->id);
		$criteria->compare('catid',$this->catid);
		$criteria->compare('typeid',$this->typeid);
		$criteria->compare('title',$this->title,true);
		$criteria->compare('style',$this->style,true);
		$criteria->compare('thumb',$this->thumb,true);
		$criteria->compare('keywords',$this->keywords,true);
		$criteria->compare('description',$this->description,true);
		$criteria->compare('posids',$this->posids);
		$criteria->compare('url',$this->url,true);
		$criteria->compare('listorder',$this->listorder);
		$criteria->compare('status',$this->status);
		$criteria->compare('sysadd',$this->sysadd);
		$criteria->compare('islink',$this->islink);
		$criteria->compare('username',$this->username,true);
		$criteria->compare('inputtime',$this->inputtime,true);
		$criteria->compare('updatetime',$this->updatetime,true);
		$criteria->compare('city_id',$this->city_id,true);

		return new CActiveDataProvider($this, array(
			'criteria'=>$criteria,
		));
	}
}