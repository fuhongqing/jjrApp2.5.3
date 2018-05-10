$(function() {
    var thisAgencyName = '',
        thisAddressDetail = '',
        thisFullName = '',
        thisTelephone = '',
        thisCityName = '',
        thisAreaName = '',
        thisModifyId = localStorage.getItem('thisId'),
        thisMemberId = location.search.slice(1).split('=')[1],
        thisYyzlUrl = '',
        thisLongitude = '',
        thisLatitude = '';
    var phoneReg = /(\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$/;
    var imgUrlArr = [];
    $('#modifyBtn').click(function() {
        imgUrlArr = localStorage.getItem('urlData').split(',');
        thisCityName = localStorage.getItem('cityName');
        thisAreaName = localStorage.getItem('boroughName');
        thisLongitude = localStorage.getItem('thisLongitude');
        thisLatitude = localStorage.getItem('thisLatitude');
    });
    $('#addPage>header').on('click', '.backImg', function() {
        if (isIPhone) {
            alert();
        }
        if (isAndroid) {
            AndroidWebView.back();
        }
    });
    $('#mapPage>header').on('click', '.backImg', function() {
        $('#addPage').show();
        $('#mapPage').hide();
    });
    var isRepeatName = false;
    $('#companyName').blur(function() {
        var companyName = $(this).val();
        $.ajax({
            type: 'get',
            url: initUrl + 'efapp2/login/v2.5.3/isSaveCompany',
            data: {agencyName: companyName},
            async: false,
            success: function(data) {
                if (data.status == 'success' && data.info == 'save') {
                    isRepeatName = true;
                    showTips('公司名已存在，请修改');
                    return;
                } else {
                    isRepeatName = false;
                }
            },
            error: function() {
                showTips('服务器内部错误');
            }
        });
    });
    $('#getAttr').click(function() {
        $('#addPage').hide();
        $('#mapPage').show();
        var map = new BMap.Map("attrMap", {
            minZoom: 7,
            maxZoom: 19
        });
        var point = new BMap.Point(121.351868, 31.228855);
        thisLongitude = 121.351868;
        thisLatitude = 31.228855;
        var gc = new BMap.Geocoder();
        gc.getLocation(point, function(rs) {
            var addComp = rs.addressComponents;
            thisCityName = addComp.city;
            thisAreaName = addComp.district;
            $('#imgDiv>span').html(addComp.province + addComp.city + addComp.district);
            $('#inputDiv>input').val(addComp.street + addComp.streetNumber);
        });
        map.centerAndZoom(point, 10);
        map.enableDragging();
        var myIcon = new BMap.Icon("img/curPosition.png", new BMap.Size(22, 35));
        var marker = new BMap.Marker(point, {icon: myIcon});
        map.addOverlay(marker);
        marker.enableDragging();
        map.panTo(point);
        marker.addEventListener("dragend", function(e) {
            map.panTo(new BMap.Point(e.point.lng, e.point.lat));
            new BMap.Geocoder().getLocation(new BMap.Point(e.point.lng, e.point.lat), function(rs) {
                var addComp = rs.addressComponents;
                thisLongitude = rs.point.lng;
                thisLatitude = rs.point.lat;
                thisCityName = addComp.city;
                thisAreaName = addComp.district;
                $('#imgDiv>span').html(addComp.province + addComp.city + addComp.district);
                $('#inputDiv>input').val(addComp.street + addComp.streetNumber);
            });
        });
    });
    $('#mapSubmit').click(function() {
        $('#companyAttr').val($('#imgDiv>span').html() + $('#inputDiv>input').val());
        $('#addPage').show();
        $('#mapPage').hide();
    });
    $('#upLoad').on('click', '.upLoadImg', function() {
        if (imgUrlArr.length >= 9) {
            showTips('最多可以上传9张');
            return;
        } else {
            $('#btn-file').click();
        }
    });
    $('#btn-file').on('change',function(e) {
        $('.loading').show();
        $('.upLoadImg').css('opacity',0);
        var files=this.files[0];
        if(!files){
            $('.loading').hide();
            $('.upLoadImg').css('opacity',1);
            return;
        }
        var formData = new FormData();
        if (files.size > 6 * 1024 * 1024) {
            showTips("单个文件大小不可超过6M");
            $('.loading').hide();
            $('.upLoadImg').css('opacity',1);
            return;
        }else{
            formData.append('files', files);
        }
        setTimeout(function () {
            $.ajax({
                url: 'http://www.ehaofang.com:8888/publicshow/qiniuUtil/fileToQiniu',
                type: 'POST',
                data: formData,
                contentType: false,
                processData: false,
                cache: false,
                async: false,
                success: function(data) {
                    if (data.statas == 'true') {
                        $('.loading').hide();
                        $('.upLoadImg').css('opacity',1);
                        showTips(data.message);
                        var codeHtml=`
                        <div>
                            <img src="${imgUrl+data.pathUrls}" alt="">
                            <img class="closeImg scale" src="img/close.png" alt="">
                        </div>
                        `;
                        $('#upLoad>span').after(codeHtml);
                    } else if (data.statas == 'false') {
                        showTips(data.message||'图片上传失败');
                    }
                },
                error: function(jqXHR) {
                    console.log(JSON.stringify(jqXHR));
                }
            });
        },0);
    });
    $('#upLoad').on('click', 'div>.closeImg', function(e) {
        $(e.target).parent().remove();
        imgUrlArr.remove($(e.target).prev().attr('src').slice(27));
    });
    $('#submitBtn').click(function() {
        thisAgencyName = $('#companyName').val();
        thisFullName = $('#userName').val();
        thisTelephone = $('#userPhone').val();
        thisAddressDetail = $('#companyAttr').val();
        thisYyzlUrl = imgUrlArr.join(',');
        if (thisAgencyName == '') {
            showTips('公司全称不能为空');
            return;
        }
        if (thisAddressDetail == '') {
            showTips('公司地址不能为空');
            return;
        }
        if (thisFullName == '') {
            showTips('负责人姓名不能为空');
            return;
        }
        if (!phoneReg.test(thisTelephone)) {
            showTips('负责人电话不合法');
            return;
        }
        if (isRepeatName) {
            return;
        }
        if (imgUrlArr.length == 0) {
            showTips('请上传营业执照');
            return;
        }
        if (thisCityName == '') {
            showTips('城市名不能为空，请在地图页获取');
            return;
        }
        if (thisAreaName == '') {
            showTips('区域名不能为空，请在地图页获取');
            return;
        }
        if (thisLongitude == '') {
            showTips('坐标经度不能为空，请在地图页获取');
            return;
        }
        if (thisLatitude == '') {
            showTips('坐标纬度不能为空，请在地图页获取');
            return;
        }
        if ($(this).hasClass('submitModify')) {
            $.ajax({
                type: 'post',
                url: initUrl + 'efapp2/login/v2.5.3/updateCompany',
                data: {
                    agencyName: localStorage.getItem('oldAgentName'),
                    newAgencyName: thisAgencyName,
                    addressDetail: thisAddressDetail,
                    fullName: thisFullName,
                    telephone: thisTelephone,
                    cityName: thisCityName,
                    areaName: thisAreaName,
                    memberId: thisModifyId,
                    yyzlUrl: thisYyzlUrl,
                    longitude: thisLongitude,
                    latitude: thisLatitude
                },
                success: function(data) {
                    if (data.status == 'success') {
                        showTips('提交成功！您可以在个人中心中查看审核结果哦！');
                        if (isIPhone) {
                            setTimeout(function() {
                                window.webkit.messageHandlers.goHome.postMessage(null);
                            }, 1000);
                        }
                        if (isAndroid) {
                            setTimeout(function() {
                                AndroidWebView.goHome();
                            }, 1000);
                        }
                    } else {
                        showTips(data.info || '修改失败');
                    }
                },
                error: function() {
                    showTips('服务器内部错误');
                }
            });
        } else {
            $.ajax({
                type: 'post',
                url: initUrl + 'efapp2/login/v2.5.3/addCompany',
                data: {
                    agencyName: thisAgencyName,
                    addressDetail: thisAddressDetail,
                    fullName: thisFullName,
                    telephone: thisTelephone,
                    cityName: thisCityName,
                    areaName: thisAreaName,
                    memberId: thisMemberId,
                    yyzlUrl: thisYyzlUrl,
                    longitude: thisLongitude,
                    latitude: thisLatitude
                },
                success: function(data) {
                    if (data.status == 'success') {
                        showTips('添加成功');
                        if (isIPhone) {
                            setTimeout(function() {
                                window.webkit.messageHandlers.goHome.postMessage(null);
                            }, 1000);
                        }
                        if (isAndroid) {
                            setTimeout(function() {
                                AndroidWebView.goHome();
                            }, 1000);
                        }
                    } else {
                        showTips(data.info || '添加失败');
                    }
                },
                error: function() {
                    showTips('服务器内部错误');
                }
            });
        }
    });
});
