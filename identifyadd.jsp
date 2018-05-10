<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>添加认证</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <meta name="format-detection" content="telephone=no"/>
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="stylesheet" href="css/init.css">
    <link rel="stylesheet" href="css/identifyAdd.css">
</head>
<body>
<div id="addPage">
    <!--<header>-->
        <!--<div class="backImg"><img class="scale" src="img/back.png" alt=""></div>-->
        <!--<div class="title">添加认证</div>-->
    <!--</header>-->
    <section>
        <ul class="inputUl">
            <li><span class="label">公司全称：</span><input id="companyName" type="text"></li>
            <li>
                <span class="label">公司地址：</span>
                <input id="companyAttr" readonly type="text" placeholder="请拖动地图图标选择地址">
                <div id="getAttr"><img class="scale" src="img/position.png" alt=""><span>定位</span></div>
            </li>
            <li><span class="label">负责人姓名：</span><input id="userName" type="text"></li>
            <li><span class="label">负责人电话：</span><input id="userPhone" type="text"></li>
        </ul>
        <div id="upLoad" class="uploadDiv">
            <span>上传营业执照</span>
            <!--动态-->
            <%--<img class="upLoadImg" src="img/upload.png" alt="">--%>
            <input type="file" id="btn-file" accept="*/*"/>
            <p>
                <img class="upLoadImg" src="img/upload.png" alt="">
                <span class="loading"></span>
            </p>
            <!--<input type="file" accept="image/*;capture=camera">，-->
        </div>
        <div id="submitBtn">提交</div>
    </section>
</div>
<div id="mapPage">
    <!--<header>-->
        <!--<div class="backImg"><img class="scale" src="img/back.png" alt=""></div>-->
        <!--<div class="title">定位</div>-->
    <!--</header>-->
    <div id="attrMap"></div>
    <section>
        <div id="imgDiv">
            <img src="img/curPosition.png" alt=""><span></span>
        </div>
        <div id="inputDiv"><input type="text"></div>
        <div id="mapSubmit">提交</div>
    </section>
</div>
<!--提示框-->
<div class="modal">
    <div class="toast"></div>
</div>
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/setting.js"></script>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&amp;ak=CB2ede775afeb6e413abd40261396a69"></script>
<script type="text/javascript" src="js/identifyAdd.js"></script>
</body>
</html>