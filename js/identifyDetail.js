$(function() {
    var searchArr = location.search.slice(1).split('&');
    var curAgencyName = decodeURIComponent(searchArr[0].split('=')[1]);
    var identifyState = searchArr[1].split('=')[1];
    var memberId = searchArr[2].split('=')[1];
    localStorage.setItem('thisId', memberId);
    function showBigImg(imgSrc) {
        $('.imgModal').fadeIn();
        $('.imgToast').html(imgSrc);
    }
    $.ajax({
        type: 'get',
        url: initUrl + 'efapp2/login/v2.5.3/companyDetails',
        data: {agencyName: curAgencyName},
        success: function(data) {
            if (data.status == 'success') {
                var detailData = data.info;
                var urlData = (detailData[0].yyzlUrl).split(',');
                var licenceHtml = '',
                    modifyCodeHtml = '';
                $('#companyName').val(detailData[0].agencyName);
                $('#companyAttr').val(detailData[0].addressDetail);
                $('#userName').val(detailData[0].fullName);
                $('#userPhone').val(detailData[0].telephone);
                var detailHtml = ("\n                <li><span class=\"key\">公司全称:</span><span>" + detailData[0].agencyName + "</span></li>\n                <li><span class=\"key\">公司办公地址:</span><span>" + detailData[0].addressDetail + "</span></li>\n                <li><span class=\"key\">公司负责人:</span><span>" + detailData[0].fullName + "</span></li>\n                <li><span class=\"key\">负责人电话:</span><span>" + detailData[0].telephone + "</span></li>\n               ");
                $('#detailUl').html(detailHtml);
                localStorage.setItem('oldAgentName', detailData[0].agencyName);
                localStorage.setItem('cityName', detailData[0].cityName);
                localStorage.setItem('boroughName', detailData[0].BoroughName);
                localStorage.setItem('thisLongitude', detailData[0].longitude);
                localStorage.setItem('thisLatitude', detailData[0].latitude);
                if (detailData[0].yyzlUrl != '') {
                    localStorage.setItem('urlData', urlData);
                    $.each(urlData, function(i) {
                        licenceHtml += ("\n                    <div>\n                        <img src=\"" + (imgUrl + urlData[i]) + "\" alt=\"\">\n                        <div class=\"modalImg\"></div>\n                    </div>\n                   ");
                        modifyCodeHtml += ("\n                        <div>\n                            <img src=\"" + (imgUrl + urlData[i]) + "\" alt=\"\">\n                            <img class=\"closeImg scale\" src=\"img/close.png\" alt=\"\">\n                        </div>\n                        ");
                    });
                    $('#licenceLi>span').after(licenceHtml);
                    $('#upLoad>span').after(modifyCodeHtml);
                }
                $('#submitTime').html(detailData[0].submissionTime);
                if (identifyState == 1) {
                    var identifyHtml = ("\n                    <span>" + detailData[0].examineTime + "</span><span class=\"point\"></span><span class=\"rejectSpan\">驳回</span><img src=\"img/reject.png\" alt=\"\">\n                    <div class=\"rejectModal\">" + detailData[0].remake + "<span class=\"caret\"></span><span class=\"caret caretOut\"></span></div>        \n                    ");
                    $('#detailPage>section>.rejectDiv').show().html(identifyHtml);
                    $('#detailPage>footer').show();
                    $('#detailPage>section>.waitSignImg').hide();
                    $('#detailPage>section>.rejectSignImg').show();
                    $('#detailPage>section>.line').show();
                } else if (identifyState == 2) {
                    var identifyHtml = ("\n                        <span>" + detailData[0].examineTime + "</span><span class=\"point\"></span><span class=\"passSpan\">通过</span><img src=\"img/pass.png\" alt=\"\">\n                    ");
                    $('#detailPage>section>.rejectDiv').show().html(identifyHtml);
                    $('#detailPage>section>.waitSignImg').hide();
                    $('#detailPage>section>.passSignImg').show();
                    $('#detailPage>section>.line').show();
                }
            }
        },
        error: function() {
            showTips('服务器内部错误');
        }
    });
    $('#licenceLi').on('click', '.modalImg', function(e) {
        e.stopPropagation();
        var bigImgSrc = $(e.target).prev().attr('src');
        showBigImg(("<img src=\"" + bigImgSrc + "\" />"));
    });
    $(document).click(function(e) {
        var _con = $('.modalImg');
        if (!_con.is(e.target) && _con.has(e.target).length == 0) {
            $('.imgModal').hide();
        }
    });
    $('#detailPage>header').on('click', '.backImg', function() {
        if (isIPhone) {
            alert();
        }
        if (isAndroid) {
            AndroidWebView.back();
        }
    });
    $('#modifyBtn').click(function() {
        $('#detailPage').hide();
        $('#modifyPage').show();
    });
    $('#modifyPage>header').on('click', '.backImg', function() {
        $('#detailPage').show();
        $('#modifyPage').hide();
    });
    $('#getAttr').click(function() {
        $('#modifyPage').hide();
    });
    $('#mapPage>header').on('click', '.backImg', function() {
        $('#modifyPage').show();
    });
    $('#mapSubmit').click(function() {
        $('#companyAttr').val($('#imgDiv>span').html() + $('#inputDiv>input').val());
        $('#modifyPage').show();
    });
});
