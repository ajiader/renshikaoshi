<form action="">
	<p>关键词：<input type="text" name="title" value="<?php echo $_GET['title'];?>"></p>
	<p><input type="submit" value="查询标题带关键词的文章TOP50" name="delall"></p>
	<p><input type="submit" value="批量删除标题带关键词的文章" name="delall"></p>	

</form>

<?php
#PHP执行SQL语句对PHPCMS文章进行批量删除

/*-----数据库链接信息-----*/
mysql_connect("localhost", "root", "mysql!&^.!@%");
mysql_select_db("renshikaoshi.net");
if ($_GET['delall'] == '批量删除标题带关键词的文章') {
	# code...

/*-----相关参数和删除条件-----*/
$title = $_GET['title'];
if(!$title) die('title is null!');
$getid="SELECT `id`,`title` FROM `v9_news` WHERE `title` like '%$title%' ";

/*-----从这里开始不要再编辑了-----*/
$ids=mysql_query($getid);

while($row=mysql_fetch_row($ids)){
$getaid=mysql_query("SELECT `aid` FROM `v9_attachment_index` WHERE `keyid`='c-$catid-$row[0]'");
$aids=mysql_fetch_row($getaid);
mysql_query("DELETE v9_attachment,v9_attachment_index FROM v9_attachment INNER JOIN v9_attachment_index ON v9_attachment.aid=v9_attachment_index.aid WHERE v9_attachment.aid=$aids[0]");
mysql_query("DELETE FROM v9_hits WHERE hitsid='c-1-$row[0]'");
mysql_query("DELETE v9_news,v9_news_data FROM v9_news INNER JOIN v9_news_data ON v9_news.id=v9_news_data.id WHERE v9_news.id=$row[0]");
mysql_query("DELETE FROM v9_position_data WHERE id =$row[0]");
mysql_query("DELETE FROM v9_search WHERE id =$row[0]");
$gettagid=mysql_query("SELECT `tagid` FROM `v9_keyword_data` WHERE `contentid`='$row[0]-1'");
while($tagids=mysql_fetch_row($gettagid)){
mysql_query("DELETE v9_keyword,v9_keyword_data FROM v9_keyword INNER JOIN v9_keyword_data ON v9_keyword.id=v9_keyword_data.tagid WHERE v9_keyword.id=$tagids[0]");
}
}
echo '执行成功';

}

if ($_GET['delall'] == '查询标题带关键词的文章TOP50') {
	# code...

/*-----相关参数和删除条件-----*/
$title = $_GET['title'];
if(!$title) die('title is null!');
$getid="SELECT `id`,`title` FROM `v9_news` WHERE `title` like '%$title%' limit 50 ";

/*-----从这里开始不要再编辑了-----*/
$ids=mysql_query($getid);

while($row=mysql_fetch_row($ids)){
	echo "<li>{$row[1]}</li>";
}
echo '';

}
?>

