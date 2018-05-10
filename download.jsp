<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title></title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <meta name="format-detection" content="telephone=no"/>
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="stylesheet" href="css/init.css">
    <link rel="stylesheet" href="css/downLoad.css">
</head>
<body>
<div class="state">
    <p><img src="img/good.png" alt=""></p>
    <p>提交成功</p>
</div>
<!--提交成功-->
<div id="downLoadBtn" class="btn">下载app</div>
<!--提交失败-->
<div id="faileDiv">
    <div id="reSubmit" class="btn">重新提交</div>
    <div id="downBtn" class="btn">下载app</div>
</div>
<div id="sliceCode">
    <p><img src="img/slice.png" alt=""></p>
    <p>关注【易好房】公众号</p>
</div>
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/setting.js"></script>
<script type="text/javascript">
    var isSuccessPage=location.search.slice(1).split('=')[1];//判断提交是否成功1成功，0失败
    if(isSuccessPage==0){//失败页显示
        $('#downLoadBtn').hide();
        $('#faileDiv').show();
    }
    $('#downLoadBtn,#downBtn').click(function () {
        if(isIPhone){
            $(location).attr('href','https://itunes.apple.com/cn/app/id1220729430');
        }
        if(isAndroid){
            $(location).attr('href','http://www.ehaofang.com/apk/member/app-release.apk');
        }
    });
</script>
</body>
</html>