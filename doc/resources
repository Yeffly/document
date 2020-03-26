  $.getScript("https://cdn.jsdelivr.net/gh/Yeffly/document/doc/fire.js");
    var yh = new CursorSpecialEffects();
    yh.init();
    var message_Path = '/live2d/'
    var home_Path = 'https://blog.fizzeleven.com/'     
document.body.onclick = function() {
     document.querySelector(".skPlayer-list").classList.add("musicPlayerHiden");
    }
       document.querySelector(".skPlayer-list-switch").onclick = function (e) {
       document.querySelector(".skPlayer-list").classList.remove("musicPlayerHiden");
       document.querySelector(".skPlayer-list").onclick = function (e) {
         if(e && e.stopPropagation) {
             e.stopPropagation();
            }else {
          window.event.cancalBubble = true;
         }
         }
      if(e && e.stopPropagation) {
          e.stopPropagation();
      }else {
      window.event.cancalBubble = true;
       }
   }   
function jumpForSearch(search_ct){
  if(search_ct.length>0){
    $.pjax({ 
    url: "https://"+document.domain+'/search/'+search_ct, 
    container: '#content',
    fragment: '#content',
    timeout: 8000
    });
  }
}
