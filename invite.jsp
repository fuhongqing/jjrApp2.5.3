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
    <link rel="stylesheet" href="css/invite.css">
</head>
<body>
    <div id="invitePage">
        <header><img src="img/invite.png" alt=""></header>
        <section>
            <!--<div class="preferences">-->
                <!--<p>88元大红包</p>-->
                <!--<p>邀请好友，立刻拥有</p>-->
            <!--</div>-->
            <ul>
                <li id="myInvite"></li>
                <!--动态-->
            </ul>
            <div class="tip">
                <p class="firstP">交易规则</p>
                <p>1.被邀请人需要录入手机号码并提交</p>
                <p>2.每个非注册用户只能被邀请一次，先到先得</p>
                <p>3.已注册易好房的用户无法被邀请</p>
                <p>4.通过邀请的用户，成功开单后，易好房将线下发放奖励</p>
                <p>5.本次活动上海易好房网络科技有限公司拥有最终解释权</p>
            </div>
        </section>
        <footer>
            <div id="inviteBtn">立即邀请</div>
        </footer>
    </div>
    <div id="inviteRegPage">
        <header><img src="img/invite.png" alt=""></header>
        <section>
            <div class="inviteText">
                <p id="inviteName"></p>
                <p>更多新房；更多资讯；更加专业的经纪人平台</p>
            </div>
            <ul>
                <li class="regLi"><span class="label">手机号：</span><input id="regPhoneInput" type="text"><span id="regCodeSpan">获取验证码</span></li>
                <li><span class="label">验证码：</span><input id="regCodeInput" type="text"></li>
            </ul>
        </section>
        <footer>
            <div id="inviteRegBtn">提交</div>
        </footer>
    </div>
    <!--提示框-->
    <div class="modal">
        <div class="toast"></div>
    </div>
<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="js/setting.js"></script>
<script type="text/javascript" src="js/invite.js"></script>
</body>
</html>