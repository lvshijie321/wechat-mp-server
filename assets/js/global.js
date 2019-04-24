//进入全屏
function fullScreen(ele) {
  if (ele .requestFullscreen) {
    var docHtml  = document.documentElement;
            var docBody  = document.body;
            var videobox  = document.getElementById('vi1');
    videobox.IsFullScreen = true;
    videobox .requestFullscreen();
    //         var  cssText = 'width:100%;height:100%;overflow:hidden;';
    //         docHtml.style.cssText = cssText;
    //         docBody.style.cssText = cssText;
    //         videobox.style.cssText = cssText+';'+'margin:0px;padding:0px;';
    //         document.IsFullScreen = true;
    
  } else if (ele .mozRequestFullScreen) {
      ele .mozRequestFullScreen();
  } else if (ele .webkitRequestFullScreen) {
      ele .webkitRequestFullScreen();
  }
}
//退出全屏
function exitFullscreen(id) {
  var de = document.getElementById(id);
  if (de.exitFullscreen) {
      de.exitFullscreen();
  } else if (de.mozCancelFullScreen) {
      de.mozCancelFullScreen();
  } else if (de.webkitCancelFullScreen) {
      de.webkitCancelFullScreen();
  }
}

//注册视频组件全屏和退出全屏
function sreen(e, status){
  const slide = document.getElementById('container').getElementsByClassName('slide')[status.slideIndex]
  const video = slide.getElementsByTagName('video')[status.videoIndex]
  
  if (!video) return
  video.addEventListener("ended",function(){
    end()
  })
  if(e.keyCode==13){
      //fullScreen(el)
      
      slide.getElementsByTagName('hgroup')[0].style.display = 'none'
      slide.getElementsByTagName('ul')[0] && (slide.getElementsByTagName('ul')[0].style.display = 'none')
      status.hiddenElement && (slide.getElementsByTagName(status.hiddenElement)[0].style.display = 'none')
      video.style.display = 'block'
      status.parentElement && (video.parentElement.style.width = status.parentElement)
      if(!status.status) {
        video.play()
        
      } else {
        video.pause()
      }
      status.status = !status.status
      //play();//触发自定义的页面效果
      e.stop();//阻止默认事件，则不会触发nodeppt默认绑定的事件
  } else if (e.keyCode==46) {//delete
    end()
  }
  function end() {
    slide.getElementsByTagName('hgroup')[0].style.display = 'block'
    slide.getElementsByTagName('ul')[0] && (slide.getElementsByTagName('ul')[0].style.display = 'inline-block')
    status.hiddenElement && (slide.getElementsByTagName(status.hiddenElement)[0].style.display =  status.hiddenElement === 'blockquote' ? 'inline-block' : 'block')

    video.style.display = 'none'
    video.pause()
    status.status = false
    status.videoIndex++
    e.stop();//阻止默认事件，则不会触发nodeppt默认绑定的事件
  }
  // if(e.keyCode==32){
  //     el.pause()
  //     //play();//触发自定义的页面效果
  //     e.stop();//阻止默认事件，则不会触发nodeppt默认绑定的事件
  // }
}

function playInCurrent(e, s, status) {
  const videoList = document.getElementsByClassName(s)[0].getElementsByTagName('video')
  if(e.keyCode==13){
      Array.prototype.forEach.call(videoList, item => {
        !status.status ? item.play(): item.pause()
      })
      status.status = !status.status
      e.stop();//阻止默认事件，则不会触发nodeppt默认绑定的事件
  } else if (e.keyCode == 46) {
    Array.prototype.forEach.call(videoList, item => {
      item.currentTime = 0
      item.play()
    })
    status.status = true
    e.stop();//阻止默认事件，则不会触发nodeppt默认绑定的事件
  }
  
  
}
