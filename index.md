title: 微信小程序的用途和技术要点
speaker: 吕士杰
url: https://github.com/ksky521/nodeppt
transition: slide3
files: /assets/js/global.js
theme: moon
usemathjax: yes
date: 2018年01月28日

[slide]
# 微信小程序
<img src="/assets/img/logo.jpg" style="display: block;margin: 33px auto;"width="120" height="120" />
经过两年的发展，已经有了新的硬件和开放能力。用户通过扫一扫、搜一下或发现周边小程序即可使用，许多城市实现了支持地铁、公交服务。
<style>
.column-space {
    height: 40px;
}
</style>

[slide]
## 小程序解构
-----    
<img src="/assets/img/60302.jpeg" style="position: relative;right: -55%;max-height: 669px!important;" width="375"  />

<ul class="rollIn" style="position: absolute;top: 30%;left: 42%;">
    <li class="builded" data-index="0">窗口</li>
    <li class="builded" data-index="1">页面</li>
    <li class="builded" data-index="2">底部 tab 栏</li>
    <li class="builded" data-index="3">下拉背景</li>
</ul>

[slide]
## 小程序、H5 和原生 App 的差别
-----
| 微信小程序 | H5 | App
:-------|:-------|:------
运行流畅度 | 可以方便第缓存页面和组件，切换页面时不会重新渲染，View 和 Appservice 两个线程并行执行，渲染时间快 | 可缓存页面和组件运行流畅度稍差一点 | 运行流畅度最高
迭代周期| 每次提交版本都要经过微信方面的审核，且审核时间的长短很随机 | 随时发布上线 | 需要审核时间
设备调用能力| 支持拍摄、多媒体、蓝牙、wifi等硬件设备 | 不支持拍摄等，可调用的硬件较少 | 设备调用能力最高
内容体积限制 | 2M | 无限制 | 无限制
支付能力| 仅微信支付 | 多种方式 | 多种方式
分享到朋友圈 | 不能直接分享，可折中地使用图片二维码分享 | 能 | 不能
分享给个人和群 | 卡片式的分享界面信息也多，并且能追踪用户行为 | 分享的信息更简单 | 不能
<div  class="rollIn wrap">
    <div  class="builded">
        <img class="img1" src="/assets/img/WX20181223-190905.png" style="display: block;margin: 33px auto;" width="350" height="350" />
        <img src="/assets/img/20181224144006.png" style="display: block;margin: 33px auto;" width="350" height="200" />
    </div>
</div>


<style>
.wrap {
    position: absolute;
    float: left;
    /* height: 600px; */
    top: 6%;
    right: -48%;
}
.img1 {
    margin-bottom: 60px!important;
}
</style>

[slide]
## 案例
-----
<div class="wrap-09889879">
    <img src="/assets/img/889375dc56971a46ed1f0af1daf6233.jpg" width="150" height="150" />
    <img src="/assets/img/20190128093046.jpg" width="300" height="500" />
    <img src="/assets/img/20190128093100.jpg" width="300" height="500" style=""/>
    <img src="/assets/img/20190128093024.jpg" width="300" height="500" />
</div>

<style>
.wrap-09889879 {
    position: relative;
    padding-top: 60%;
}

.wrap-09889879 img:nth-child(1){
    position: absolute;
    top: 0%;
    right: -7%;
}
.wrap-09889879 img:nth-child(2){
    position: absolute;
    top: 7%;
    left: -13%;
}
.wrap-09889879 img:nth-child(3){
    position: absolute;
    top: 18%;
    left: 34%;
}
.wrap-09889879 img:nth-child(4){
    position: absolute;
    top: 32%;
    left: 82%;
}
</style>

[slide]
# 和原生 APP 的部分差异
-----

[slide data-on-keypress="globalCallbackName_6"]
## 分享 📹
-----
<div class="wrap-23343433">
    <video src="/assets/video/compare--3-2.mp4" width="100%" height="700"  autobuffer></video>
    <video src="/assets/video/compare--3-1.mp4" width="100%" height="700"  autobuffer></video>
</div>
<style>
    .wrap-23343433{
        position: relative;
        padding-top: 77%;
    }
    .wrap-23343433 video:nth-child(1){
        position: absolute;
        left: -32%;
        top: 0;
    } 
    .wrap-23343433 video:nth-child(2){
        position: absolute;
        right: -26%;
        top: 0;
    } 
</style>

<script>
const status___6 = {
    status: false,
}
function globalCallbackName_6(e) {
    
    playInCurrent(e,'wrap-23343433', status___6)
}
</script>

[slide]
## 底部切换栏
-----
<div class="wrap-233431433">
    <img src="/assets/img/compare-04-1.jpg" width="350" height="900"   />
    <img src="/assets/img/compare-04-2.jpg" width="350" height="900"   />
</div>
<style>
    .wrap-233431433{
        position: relative;
        padding-top: 77%;
    }
    .wrap-233431433 img{
        position: absolute;
        max-height: 700px!important;
    } 
    .wrap-233431433 img:nth-child(1){
        left: 4%;
        top: 0;
    } 
    .wrap-233431433 img:nth-child(2){
        right: 3%;
        top: 0;
    } 
</style>

[slide data-on-keypress="globalCallbackName_ew7"]
## 分类选择组件 📹
-----
<div class="wrap-6789i90i">
    <video src="/assets/video/compare01-1.mp4" width="100%" height="700"  autobuffer></video>
    <video src="/assets/video/compare01-2.mp4" width="100%" height="700"  autobuffer></video>
</div>
<style>
    .wrap-6789i90i{
        position: relative;
        padding-top: 77%;
    }
    .wrap-6789i90i video:nth-child(1){
        position: absolute;
        left: -32%;
        top: 0;
    } 
    .wrap-6789i90i video:nth-child(2){
        position: absolute;
        right: -26%;
        top: 0;
    } 
</style>
<script>
const status___7111 = {
    status: false,
}
function globalCallbackName_ew7(e) {
    playInCurrent(e,'wrap-6789i90i', status___7111)
}
</script>

[slide data-on-keypress="globalCallbackName_5"]
## 选择器组件 📹
-----
<div class="wrap-6789i90i1">
    <video src="/assets/video/compare02-1.mp4" width="100%" height="700"  autobuffer></video>
    <video src="/assets/video/compare02-2.mp4" width="100%" height="700"  autobuffer></video>
</div>
<style>
    .wrap-6789i90i1{
        position: relative;
        padding-top: 77%;
    }
    .wrap-6789i90i1 video:nth-child(1){
        position: absolute;
        left: -32%;
        top: 0;
    } 
    .wrap-6789i90i1 video:nth-child(2){
        position: absolute;
        right: -26%;
        top: 0;
    } 
</style>
<script>
const status___5 = {
    status: false,
}
function globalCallbackName_5(e) {
    
    playInCurrent(e,'wrap-6789i90i1', status___5)
}
</script>

[slide]
# 小程序的硬件支持

[slide data-on-keypress="globalCallbackName5446546"]

## 加速器 📹
-----
> 手机加速度传感器能捕捉手机的几种典型运动模式如摇晃、甩动、翻转等。达到用运动控制手机的目的。 

<video style="display:none;" src="/assets/video/62bc55dd36d8496cdf3d5fba11b38f70.mp4" width="100%" height="900"  autobuffer></video>


<style>
</style>
<script>
    const store10433 = {
        status: false,
        videoIndex: 0,
        slideIndex: 10,
        hiddenElement: 'blockquote'
    }
    function globalCallbackName5446546(e){
        sreen(e, store10433)
    }
</script>

[slide data-on-keypress="globalCallbackName1fffd1"]
## 扫码 📹
-----
> 支持从相册获取二维码，或普通扫码方式。 

<video style="display:none;" src="/assets/video/a49467859008df15e1a8a10f182d7c24.mp4" width="100%" height="900"  autobuffer></video>


<style>
</style>
<script>
    const storedss11 = {
        status: false,
        videoIndex: 0,
        slideIndex: 11,
        hiddenElement: 'blockquote'
    }
    function globalCallbackName1fffd1(e){
        sreen(e, storedss11)
    }
</script>

[slide]
## 振动
-----
> 使手机发生400 ms时间的振动

[slide class="wifi" data-on-keypress="globalCallbackNamedfssfsff3"]
## Wi-Fi
-----

* 搜索周边的 Wi-Fi 📹
* 针对指定 Wi-Fi，传入密码发起连接 📹
* 连接 Wi-Fi 完成后跳转指定小程序
<div class="column-space"></div>
> 连接指定 Wi-Fi 仅 iOS 11 及以上版本支持，</br>Android 支持度良好
<div  class="rollIn wrap-20181224155733">
    <img class="builded" src="/assets/img/20181224155733.png" style="display: block;margin: 33px auto;" height="400" width="750" />
</div>

<video style="display:none;" src="/assets/video/Wifi-01.mp4" width="100%" height="900"  autobuffer></video>
<video style="display:none;" src="/assets/video/Wifi-02.mp4" width="100%" height="800"  autobuffer></video>
<style>
.wifi .slide-wrapper {
    position: relative;
    left: -16%;
}
.wrap-20181224155733 {
    position: absolute;
    float: left;
    top: -460%;
    right: -162%;
}
</style>
<script>
    const storedsfs3 = {
        status: false,
        videoIndex: 0,
        slideIndex: 13,
        parentElement: '160%',
        ul: true,
    }
    function globalCallbackNamedfssfsff3(e){
        sreen(e, storedsfs3)
    }
</script>

[slide data-on-keypress="globalCallbackNadddme4"]
## 电话 📹
-----

* 拨打号码 
* 添加联系人到通讯录 

<video style="display:none;" src="/assets/video/phone.mp4" width="100%" height="800"  autobuffer></video>
<script>
    
    const store412 = {
        status: false,
        videoIndex: 0,
        slideIndex: 14,
    }
    function globalCallbackNadddme4(e){
  
        sreen(e, store412)
    }
</script>


[slide data-on-keypress="globalCallbackNaeme511"]
## 媒体
-----

* 照相以及弹幕视频 📹
* 录音（只能录制设备外的声音） 📹

<video style="display:none;" src="/assets/video/media-01.mp4" width="100%" height="800"  autobuffer></video>
<video style="display:none;" src="/assets/video/2019-01-28_21_03_11.mp4" width="100%" height="800"  autobuffer></video>
<script>
    
    const stordsfse5 = {
        status: false,
        videoIndex: 0,
        slideIndex: 15,
    }
    function globalCallbackNaeme511(e){
  
        sreen(e, stordsfse5)
    }
</script>

[slide data-on-keypress="globalCallbaddckName6"]

## 文件系统 📹
-----

* 获取相册照片
* 下载网络文件并预览

<video style="display:none;" src="/assets/video/file.mp4" width="100%" height="800"  autobuffer></video>
<script>
    
    const store611 = {
        status: false,
        videoIndex: 0,
        slideIndex: 16,
    }
    function globalCallbaddckName6(e){
  
        sreen(e, store611)
    }
</script>

[slide]

## 蓝牙
-----
<div class="blue-teeth-split2"></div>
* 搜索附近的蓝牙
* 搜索指定设备
* 读取蓝牙发过来的数据 
* 写数据到蓝牙 
<div  class="wrap-20181224152030">
    <img class="img-20181224152030" src="/assets/img/20181224152030.png" style="display: block;margin: 33px auto;" width="350" />
</div>

<div class="blue-teeth-split"></div>
<style>
.wrap-20181224152030 {
    position: absolute;
    float: left;
    /* height: 600px; */
    top: -76%;
    right: -186%;
}
.img-20181224152030 {
    min-height:600px;
}
.blue-teeth-split {
    height: 245px;
}

.blue-teeth-split2 {
    height: 47px;
}
</style>

[slide]

## NFC
-----
小程序提供 HCE 模式的 NFC 能力，让具有 NFC 功能的安卓手机用户，将手机变成门禁卡、公交卡等智能卡。用户打开小程序并贴近刷卡机，就能完成卡的识别、消费等操作了。
<div class="column-space"></div>
> 仅支持 Android 5.0 及以上的手机

[slide]
## 指纹识别认证
> 目前支持这些机型：
<div  class="sort">
    <img class="" src="/assets/img/s1.png" style="display: block;margin: 33px auto;" height="550" width="400" />
    <img class="" src="/assets/img/s2.png" style="display: block;margin: 33px auto;" height="550" width="400" />
    <img class="" src="/assets/img/s3.png" style="display: block;margin: 33px auto;" height="550" width="400" />
</div>

<style>
.sort {
    display: flex;
    flex-direction: row;
}
</style>

[slide]
# 小程序的重要组件
 
[slide]

## 
-----
<div class="comp-list">
    
    <div class="audi-video-comp">
        <div class="audi-video-comp-wrap">
            <div>音频组件</div>
            <img src="/assets/img/20181225093938.png" height="450" width="300" />
        </div>
        <div class="audi-video-comp-wrap">
            <div>视频组件</div>
            <img src="/assets/img/20181225094442.png" height="250" width="300" />
        </div>

    </div>

    <div class="camera-comp-wrap">
        <div>拍摄组件</div>
        <img src="/assets/img/20181225095923.png" height="450" width="300" />
    </div>
    <div class="map-comp-wrap">
        <div>地图组件</div>
        <img src="/assets/img/20181225101701.png" height="450" width="300" />
    </div>
    <div class="wv-comp-wrap">
        Web View：<br/><br/>个人类型小程序暂不支持使用
    </div>
    <div class="canvase-comp-wrap">
        canvas：<br/><br/>使用 h5 原生 api 绘制动效和图形
    </div>
</div>
<style>
.canvase-comp-wrap {
    
    position: absolute;
    bottom: 3%;
    width: 150px;
    right: -31%;
}
.wv-comp-wrap {
        position: absolute;
    bottom: 16%;
    width: 170px;
    left: 5%;
}
.map-comp-wrap{
    position: absolute;
    right: -29%;
    top: 6%;
}
.comp-list {
    display: flex;
    flex-direction: column;
}
.audi-video-comp {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
            position: absolute;
    top: 4%;
    width: 984px;
}
.audi-video-comp-wrap {
    display: flex;
    flex-direction: column;
    
}
.audi-video-comp-wrap div,.camera-comp-wrap div,.map-comp-wrap div {
    margin-bottom: 20px;
}
.camera-comp-wrap {
        position: absolute;
    top: 44%;
    left: 50%;
}
</style>

[slide data-on-keypress="globalCallback11Name22"]

## 地图组件 📹
-----

* 移动到当前位置
* 关键字搜索周围商店
* 自动补全地点
* 地址导航
* 查看街景 📹

<video style="display:none;" src="/assets/video/map-01.mp4" width="100%" height="800"  autobuffer></video>
<video style="display:none;" src="/assets/video/map-02.mp4" width="100%" height="800"  autobuffer></video>
<script>
    
    const store1122 = {
        status: false,
        videoIndex: 0,
        slideIndex: 22,
    }
    function globalCallback11Name22(e){
  
        sreen(e, store1122)
    }
</script>
 


[slide]
## 需要资格审核的组件
-----
* 实时音视频播放<br>
* 实时音视频录制<br>
<div class="column-space"></div>
> 暂只针对国内主体,社交、教育和医疗等类目的小程序开放，需要先通过类目审核

[slide]
## 支持互相视频和语音交流
-----
* live-pusher
* live-player
<div class="column-space"></div>
> 后端必须要有媒体服务器支持。如果要实现语音通话或者视频通话，就需要自己实现媒体服务器（RTMP协议），或者使用第三方的媒体服务器服务，比如说即构科技的小程序方案。
<img src="/assets/img/1548669051(1).jpg" />

[slide]
# 小程序的开放能力

[slide]

## 获取手机号
-----
需要用户主动触发才能发起获取手机号接口。
<div class="column-space"></div>
> 目前该接口针对非个人开发者，且完成了小程序开放认证（不包含海外主体）。若用户举报较多或被发现在不必要场景下使用，微信有权永久回收该小程序的该接口权限。

[slide]
## 模板消息
-----
* 模板推送位置：服务通知
* 模板下发条件：用户与页面有交互行为后触发，不可使用 api 直接调用
* 模板跳转到小程序：点击查看详情能跳转下发模板的小程序的各个页面
<div class="column-space"></div>
<img class="wrap-201812241557331" src="/assets/img/notice.png" height="500" width="300" />


<style>

.wrap-201812241557331 {
    position: absolute;
    float: left;
    top: -84%;
    right: -39%;
}
</style>

[slide]
## 获取模板消息
-----
登录 https://mp.weixin.qq.com 获取模板，如果没有合适的模板，可以申请添加新模板，审核通过后可使用
<div class="column-space"></div>
<img class="" src="/assets/img/20181224194450.png" height="500" width="1000" />

[slide]

## 客服消息
-----
* 第一种微信控制台添加客服人员
<div class="column-space"></div>
<img style="margin-left: 200px;" src="/assets/img/20181224201453.png" height="500" width="1000" />
> 优点：无需任何开发，添加即可使用<br/>
缺点：经常要登陆查看消息，容易遗漏消息、容易出现超时。
[slide]

## 客服消息
-----
* 第二种自有平台使用方式
<div class="column-space"></div>
<img class="clipboard1" src="/assets/img/clipboard1.png" height="800" width="1000" />

<div class="column-space"></div>
<div class="column-space"></div>
<div class="column-space"></div>
<div class="column-space"></div>
<div class="column-space"></div>
<div class="column-space"></div>

<div class="column-space"></div>
<div class="column-space"></div>
<style>
.clipboard1 {
    position: absolute;
    float: left;
    top: -73%;
    right: -146%;
}
</style>
[slide]

## 卡券
-----
<div class="column-space"></div><div class="column-space"></div>
> 小程序卡券接口支持在小程序中领取/查看/使用公众号 AppId 创建的会员卡、票、券（含通用卡）。只有认证小程序才能使用卡券接口。
 
<img style=" 
        position: absolute;
    min-height: 700px;
    right: -48%;
    top: 10%;
}
    right: -108%;" src="/assets/img/20181225162008.jpg"   width="400" />



[slide]
## 附近的小程序
-----
小程序可创建附近地点的小程序，提供一下操作：<br/>
* 添加地点
 * 经营资质主体	，必填
 * 经营资质证件号，必填	
 * 经营资质地址，必填
* 查看地点列表
    * 附近地点 ID	
    * 资质证件地址	
    * 资质证件证件号	
    * 地点审核状态	
    * 审核失败原因
* 删除地点
<div class="column-space"></div>
> 使用前需要先调高附近地点额度。 申请方式：下载 《调高地点额度申请表》，填写后发送至 placeofminiprogram@qq.com。
<img style="position: absolute; 
    top: -680%;
    min-height: 500px;
    right: -39%;" src="/assets/img/20181225092352.jpg" height="1208" width="300" />



[slide class="dsfaa"]

## 微信登录
-----
> session_key 的作用是用来解密用户信息的，如：获取用户手机号的接口，需要接口在 开发者的服务端结合 session_key 以及 app_id 进行解密获取手机号。

<img style="       max-height: 720px; position: absolute;
    top: 10%;
    right: -88%;" src="/assets/img/api-login.jpg" height="720" width="700" />

<style>
    .dsfaa .slide-wrapper {
        left: -20%;
    }
</style>

[slide]

## 生成任意页面的二维码
-----
* 适用于需要的码数量较少的业务场景：<br/>
  可接受 path 参数较长，但生成个数受限。<br/>
  <div class="column-space"></div>
* 适用于需要的码数量极多的业务场景：<br/>
可接受页面参数较短，生成个数不受限。<br/>
<div class="column-space"></div>
* 适用于需要的码数量较少的业务场景：<br/>
可接受 path 参数较长，生成个数受限。 
<img style="    position: absolute;
    top: 10%;
    right: -108%;" src="/assets/img/qrcode.png" height="300" width="600" />



[slide]
# 开发和发布流程 

[slide]
## 注册小程序的开发者账号 
> https://mp.weixin.qq.com/wxopen/waregister?action=step1
<div class="column-space"></div>
<img src="/assets/img/20181225110805.png" height="800" width="850" />

[slide]

## 选择主体类型
-----
下一步 >
<div class="column-space"></div>
<img src="/assets/img/20181225111824.png" style="min-height: 700px;"  width="700" />

[slide]

## 确认主体类型
-----
下一步 >
<div class="column-space"></div>
<img src="/assets/img/20181225113043.png" style="min-height: 700px;"  width="700" />

[slide]
## 进入开发者后台，添加一个小程序
-----
<img src="/assets/img/20181225115158.png" style="min-height: 500px;"  width="1000" />

[slide]
## 获取小程序 ID
-----
<img src="/assets/img/20181225121326.png" style="min-height: 500px;"  width="1000" />

[slide]
## 使用开发者工具开发和调试小程序
-----
<img src="/assets/img/20181225130458.png" style="min-height: 400px;"  width="350" />

[slide]
## 服务器域名配置
-----
> 每个微信小程序需要事先设置一个通讯域名，才可以和指定的域名进行网络通信。包括：
* HTTPS 请求（request）
* 上传文件（uploadFile）
* 下载文件（downloadFile) 
* WebSocket 通信（connectSocket）

[slide]
## 域名配置的限制
-----
* 域名只支持 https (request、uploadFile、downloadFile) 和 wss (connectSocket) 协议
* 域名必须经过 ICP 备案
* 小程序内会对服务器域名使用的 HTTPS 证书进行校验，如果校验失败，则请求不能成功发起。建议按照最高标准进行证书配置。
<div class="column-space"></div>
> 在微信开发者工具中，可以临时开启 开发环境不校验请求域名、TLS版本及HTTPS证书 选项，跳过服务器域名的校验。此时，在微信开发者工具中及手机开启调试模式时，不会进行服务器域名的校验。

[slide]
## 提交审核
-----
> 开发完可以在管理员后台提交审核，审核的代码需要经过测试，如果反复审核不过会影响再次审核通过的时间<br/>
<img src="/assets/img/20181225140646.png" style="min-height: 200px;"  width="850" /><br/ >

[slide]
## 申请测试号
-----
<img src="/assets/img/20181225134109.png" style="min-height: 400px;"  width="350" /><br/ >
[slide]
<img src="/assets/img/20181225134444.png" style="min-height: 400px;"  width="350" /><br/ >
<div class="column-space"></div>
扫码登录后，即可查看到已为自己分配好的测试帐号信息。<br/ >
[slide]
<img src="/assets/img/sandbox-create-project.jpg" style="min-height: 400px;"  width="350" />
<div class="column-space"></div>
在得到了测试号的帐号信息之后，可以在开发者工具中使用此帐号信息创建项目进行开发。

[slide]
# 运营

[slide]
## 数据分析
-----
* 日趋势
* 周趋势
* 月趋势
    * 日期	
    * 打开次数	
    * 访问次数	
    * 访问人数	
    * 新用户数	
    * 人均停留时长	
* 日留存
* 周留存
* 月留存
    * 时间	
    * 新增用户留存	
    * 活跃用户留存

[slide]

## 数据分析
-----
* 访问页面
    * 页面路径	
    * 访问次数	
    * 访问人数	
    * 次均停留时长	
    * 进入页次数	
    * 退出页次数	
* 用户画像
    * 省份	
    * 城市
    * 性别	
    * 终端类型	
    * 机型，如苹果 iPhone 6，OPPO R9 等	
    * 年龄


[slide]

## 第三方 UI 组件库
------
<img src="/assets/img/20190128150559.jpg"  width="650" height="160" />


[slide]
## 技术 · 选型对比
-----
描述 | 原生小程序 | mpvue
:-------|:------|:------
Slot | 支持组件的 slot 插槽 | 暂时还没做支持，这给组件化开发带来很大阻碍
多行表格渲染流畅度 | 渲染速度较快 | mpvue 对组件内的多行表格数据渲染速度较慢
源码体积 | 保持代码书写后的内容，不会对其改变 | 经过编译后生成的小程序源码体积稍大于原生开发。mpvue 会为 wxml 元素添加额外的属性，导致代码体量增大。
生成其他平台能力 | 不能生成其他平台 |一套 mpvue 代码可生成微信小程序和 h5
过滤器 | 支持 wxs 方式的过滤器 | 不支持，只能通过预先组装数据来处理
<div style="height: 30px;"></div>
> 总结：mpvue 暂不支持 slot 插槽对组件化开发不太友好。选用 mpvue 作为小程序开发框架比较理想的情况是，项目进度比较赶，原生小程序的学习时间不充分，但曾使用 vue 开发过项目，可以使用 mpvue 直接上手。 mpvue 的好处是缩短你的学习时间。经过比较，认为使用原生小程序开发更合适。 

[slide]

# 谢谢收看


