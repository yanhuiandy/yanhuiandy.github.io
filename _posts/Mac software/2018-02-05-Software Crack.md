---
layout: post
title: Software crack
date: 2018-02-05
tags: Crack
---

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>
Password protection corresponding page</title>
</head>
<body>
<SCRIPT LANGUAGE="JavaScript">
function password() {
var testV = 1;
var pass1 = prompt('🤔此页面只有熟悉的人员才可以浏览哦😜，请输入密码:','');
while (testV < 3) {
if (!pass1) 
history.go(-1);
if (pass1 == "software") {
alert('🙃一看就是熟悉我的人员😘!');
break;
} 
testV+=1;
var pass1 = 
prompt('🤣密码错误，此页面只有熟悉的人员才可以浏览哦🤗:');
}
if (pass1!="password" & testV ==3) 
history.go(-1);
return " ";
} 
document.write(password());
</SCRIPT>
</body>
</html>

### 以下内容密码为：software
### UltraEdit for Mac-->[官网下载](http://www.ultraedit.com/downloads/uex.html#macreq)

>**破解方法：-->安装结束后，先运行一次，再在终端里执行下面代码完成破解；**
   * 仅限18.00.0.19破解
```
printf '\x31\xC0\xFF\xC0\xC3\x90' | dd seek=$((0x777160)) conv=notrunc bs=1 
of=/Applications/UltraEdit.app/Contents/MacOS/UltraEdit
```
   * 仅限18.00.0.17破解
```
printf '\x31\xC0\xFF\xC0\xC3\x90' | dd seek=$((0x776BE0)) conv=notrunc bs=1 
of=/Applications/UltraEdit.app/Contents/MacOS/UltraEdit
```
   * 仅限18.00.0.12破解
```
printf '\x31\xC0\xFF\xC0\xC3\x90' | dd seek=$((0x776DA0)) conv=notrunc bs=1 
of=/Applications/UltraEdit.app/Contents/MacOS/UltraEdit
```
   * 仅限16.10.0.22破解
```
printf '\x31\xC0\xFF\xC0\xC3\x90' | dd seek=$((0x92D370)) conv=notrunc bs=1 
of=/Applications/UltraEdit.app/Contents/MacOS/UltraEdit
```
>* Ps：附赠項 -->推荐技术使用
   
   >**【修改skProtectionPlus::IsActivated函数，会修改的后续版本可以自已改！】**
   >* 1.你下载个IDA pro，打开idaq64;
   >* 2.然后把Applications/UltraEdit.app/Contents/MacOS/UltraEdit拖到IDA里;
   >* 3.在导出函数里找到skProtectionPlus::IsActivated
   <img src="https://bbsimg.fengimg.com/2016/11/20/12845509_屏幕快照%202016-11-20%20下午2.09.59.png">
   <img src="https://bbsimg.fengimg.com/2016/11/20/12845512_屏幕快照%202016-11-20%20下午2.10.47.png">

### Microsoft Office 2016 for MAC
   * 激活工具 -->[点我下载](https://pan.baidu.com/s/1oAl6GjS) 密码：<code>uwec</code>
   * 完整安装包 -->[点我下载](https://officecdn-microsoft-com.akamaized.net/pr/C1297A47-86C4-4C1F-97FA-950631F94777/OfficeMac/Microsoft_Office_2016_16.10.18021001_Installer.pkg)
   * Word 独立安装包 -->[点我下载](https://officecdn-microsoft-com.akamaized.net/pr/C1297A47-86C4-4C1F-97FA-950631F94777/OfficeMac/Microsoft_Word_2016_16.10.18021001_Installer.pkg)
   * Excel 独立安装包 -->[点我下载](https://officecdn-microsoft-com.akamaized.net/pr/C1297A47-86C4-4C1F-97FA-950631F94777/OfficeMac/Microsoft_Excel_2016_16.10.18021001_Installer.pkg)
   * PowerPoint 独立安装包 -->[点我下载](https://officecdn-microsoft-com.akamaized.net/pr/C1297A47-86C4-4C1F-97FA-950631F94777/OfficeMac/Microsoft_PowerPoint_2016_16.10.18021001_Installer.pkg)
   * Outlook 独立安装包 -->[点我下载](https://officecdn-microsoft-com.akamaized.net/pr/C1297A47-86C4-4C1F-97FA-950631F94777/OfficeMac/Microsoft_Outlook_2016_16.10.18021001_Installer.pkg)
   * OneNote 独立更新包 -->[点我下载](http://officecdn.microsoft.com/pr/C1297A47-86C4-4C1F-97FA-950631F94777/OfficeMac/Microsoft_OneNote_16.10.18021001_Updater.pkg)



### 注

  >* ⚠️ [转载请注明原博客地址【https://yanhuiandy.github.io】Andy所作,谢谢合作！](https://yanhuiandy.github.io/)


