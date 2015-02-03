<?php
/* vim: set expandtab tabstop=4 shiftwidth=4: */
// +----------------------------------------------------------------------+
// | PHP version 5                                                        |
// +----------------------------------------------------------------------+
// | Copyright (c) 1997-2004 The PHP Group                                |
// +----------------------------------------------------------------------+
// | This source file is subject to version 3.0 of the PHP license,       |
// | that is bundled with this package in the file LICENSE, and is        |
// | available through the world-wide-web at the following url:           |
// | http://www.php.net/license/3_0.txt.                                  |
// | If you did not receive a copy of the PHP license and are unable to   |
// | obtain it through the world-wide-web, please send a note to          |
// | license@php.net so we can mail you a copy immediately.               |
// +----------------------------------------------------------------------+
// | Authors: Original Author <author@example.com>                        |
// |          Your Name <you@example.com>                                 |
// +----------------------------------------------------------------------+
//
// $Id:$

defined('IN_ADMIN') or exit('No permission resources.');
include $this->admin_tpl('header', 'admin'); ?><div class="pad-10"><div class="content-menu ib-a blue line-x"><a href="?m=content&c=content&a=init&catid=46" class=on><em><?php
echo L('remove', '', 'content'); ?></em></a> </div><div class="bk10"></div><form action="?m=admin&c=category&a=remove" method="post" name="myform"><div class="table-list"><table width="100%" cellspacing="0"><thead><tr><th align="center" width="50%"><?php
echo L('from_where', '', 'content'); ?></th><th align="center" width="50%"><?php
echo L('move_to_categorys', '', 'content'); ?></th></tr></thead><tbody  height="200" class="nHover td-line">	<tr>       <td align="center" rowspan="6">  		<div id="frombox_2">		<select name="fromid[]" id="fromid"  multiple  style="height:300px;width:350px;">		<option value='0' style="background:#F1F3F5;color:blue;"><?php
echo L('from_category', '', 'content'); ?></option>		<?php
echo $source_string; ?>		</select>		<br>		<font color="red">Tips:</font><?php
echo L('ctrl_source_select', '', 'content'); ?>		</div>		</td>    </tr>	<tr>       <td align="center" rowspan="6"><br>      <select name="tocatid" id="tocatid"  size="2"  style="height:300px;width:350px;"><option value='0' style="background:#F1F3F5;color:blue;"><?php
echo L('move_to_categorys'); ?></option><?php
echo $string; ?></select>	</td>    </tr>	</tbody></table></div><div class="btn"><input type="submit" class="button" value="<?php
echo L('submit'); ?>" name="dosubmit"/></div></form></div>
