DROP TABLE IF EXISTS `phpcms_zirui_mokuai`;
CREATE TABLE `phpcms_zirui_mokuai` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL COMMENT 'ģ������',
  `name_num` varchar(20) NOT NULL COMMENT 'ģ��������',
  `type_num` varchar(200) NOT NULL COMMENT '���ͼ�����',
  `content_1` varchar(200) DEFAULT NULL COMMENT '����Ҫ��ϰ���а�����Ŀ���Ƽ�����',
  `content_2` varchar(50) DEFAULT NULL COMMENT 'ģ���Ծ�����������',
  `content_3` varchar(200) DEFAULT NULL COMMENT '������������������',
  PRIMARY KEY (`id`)
) TYPE=MyISAM ;