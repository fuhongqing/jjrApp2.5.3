var initUrl='http://agent2.ehaofang.com/';//http://jjrtest.ehaofang.net/';//http://192.168.1.128:8888/';//'http://agent2.ehaofang.com/';
var imgUrl = "http://images.ehaofang.com/";//初始图片地址
//修改invite.js  download.jsp
//根字体大小设置
document.documentElement.style.fontSize = document.documentElement.clientWidth / 3.75 + 'px';
//提示框显示
function showTips(text) {
    $('.modal').fadeIn();
    $('.toast').html(text);
    setTimeout(function () {
        $('.modal').fadeOut();
    },2000);
}
Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == val) {
            return i;
        }
    }
    return -1;
};
Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
        this.splice(index, 1);
    }
};
var isAndroid = window.navigator.appVersion.match(/android/gi);
var isIPhone = window.navigator.appVersion.match(/iphone/gi);