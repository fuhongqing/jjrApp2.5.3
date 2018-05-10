<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>认证公司</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
    <meta name="format-detection" content="telephone=no"/>
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="stylesheet" href="css/init.css">
    <link rel="stylesheet" href="css/identifyAdd.css">
    <link rel="stylesheet" href="css/identifyDetail.css">
</head>
<body>
    <div id="detailPage">
        <!--<header>-->
            <!--<div class="backImg"><img src="img/back.png" alt=""></div>-->
            <!--<div class="title">认证公司</div>-->
        <!--</header>-->
        <section>
            <img class="waitSignImg" src="img/waitSign.png" alt="">
            <img class="passSignImg" src="img/passSign.png" alt="">
            <img class="rejectSignImg" src="img/rejectSign.png" alt="">
            <ul id="detailUl" class="inputUl">
                <!--动态-->
            </ul>
            <div id="licenceLi">
                <span class="key">营业执照</span>
                <!--动态-->
            </div>
            <div class="step step1">
                <span id="submitTime"></span><span class="point"></span><span>提交</span>
            </div>
            <div class="line"><span></span></div>
            <!--通过-->
            <div class="step step2 passDiv">
                <!--动态-->
            </div>
            <!--驳回-->
            <div class="step step2 rejectDiv">
                <!--动态-->
            </div>
        </section>
        <footer>
            <div id="modifyBtn">修改</div>
        </footer>
    </div>
    <div id="modifyPage">
        <!--<header>-->
            <!--<div class="backImg"><img class="scale" src="img/back.png" alt=""></div>-->
            <!--<div class="title">修改</div>-->
        <!--</header>-->
        <section>
            <ul class="inputUl">
                <li><span class="label">公司全称：</span><input id="companyName" type="text"></li>
                <li>
                    <span class="label">公司地址：</span>
                    <input id="companyAttr" readonly type="text">
                    <div id="getAttr"><img class="scale" src="img/position.png" alt=""><span>定位</span></div>
                </li>
                <li><span class="label">负责人姓名：</span><input id="userName" type="text"></li>
                <li><span class="label">负责人电话：</span><input id="userPhone" type="text"></li>
            </ul>
            <div id="upLoad" class="uploadDiv">
                <span>营业执照</span>
                <!--动态-->
                <img class="upLoadImg" src="img/upload.png" alt="">
                <input type="file" id="btn-file" accept="*/*"/>
            </div>
            <div class="submitModify" id="submitBtn">提交</div>
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
    <!--图片展示框-->
    <div class="imgModal">
        <div class="imgToast"></div>
    </div>
    <script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="js/setting.js"></script>
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&amp;ak=CB2ede775afeb6e413abd40261396a69"></script>
    <script type="text/javascript" src="js/identifyDetail.js"></script>
    <script type="text/javascript" src="js/identifyAdd.js"></script>
</body>
</html>