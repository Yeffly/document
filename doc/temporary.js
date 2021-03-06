var message_Path = '/live2d/'
var home_Path = 'https://blog.fizzeleven.com/'    
var home_page=document.location.protocol +'//' + document.location.hostname +'/'
var close_xxb = document.getElementsByClassName("platelet")[0];
function renderTip(template, context) {
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;
    return template.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2) {
            return word.replace('\\', '');
        }
        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        var i, length, variable;
        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
}

String.prototype.renderTip = function (context) {
    return renderTip(this, context);
};

$(document).on('copy', function (){
    showMessage('你都复制了些什么呀，转载要记得加上出处哦~~', 5000);
});

$('.platelet-tool .xxbclose').click(function () {
    close_xxb.parentNode.removeChild(close_xxb);
            document.cookie = "posterGirl=false;" + "path=/";     
});

$('.platelet-tool .camera').click(function () {
     showMessage('照好了嘛，是不是很可爱呢？', 5000, true);
     window.Live2D.captureName = 'Kesshouban.png';
    window.Live2D.captureFrame = true;
 });

$('.platelet-tool .comment').click(function () {
    showHitokoto();
});

$('.platelet-tool .info').click(function () {
    window.open("https://www.fizzeleven.com/");   
});

$('.platelet-tool .eye').click(function () {
    switchNightMode();
    showMessage('你会做眼保健操吗？', 3000, true);
 });

function initTips(){
    $.ajax({
        cache: true,
        url: `${message_Path}message.json`,
        dataType: "json",
        success: function (result){
            $.each(result.mouseover, function (index, tips){
                $(tips.selector).mouseover(function (){
                    var text = tips.text;
                    if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                    text = text.renderTip({text: $(this).text()});
                    showMessage(text, 3000);
                });
            });
            $.each(result.click, function (index, tips){
                $(tips.selector).click(function (){
                    var text = tips.text;
                    if(Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1)-1];
                    text = text.renderTip({text: $(this).text()});
                    showMessage(text, 3000);
                });
            });
                    $.each(result.seasons, function (index, tips) {
            var now = new Date();
            var after = tips.date.split('-')[0];
            var before = tips.date.split('-')[1] || after;

            if ((after.split('/')[0] <= now.getMonth() + 1 && now.getMonth() + 1 <= before.split('/')[0]) &&
                (after.split('/')[1] <= now.getDate() && now.getDate() <= before.split('/')[1])) {
                var text = tips.text;
                if (Array.isArray(tips.text)) text = tips.text[Math.floor(Math.random() * tips.text.length + 1) - 1];
                text = text.render({ year: now.getFullYear() });
                showMessage(text, 6000, true);
            }
         });
       }
    });
}
initTips();

(function (){
    var text;
        if (window.location.href == `${home_Path}`) { 
            var now = (new Date()).getHours();
            if (now > 23 || now <= 5) {
                text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛？';
            } else if (now > 5 && now <= 7) {
                text = '早上好！一日之计在于晨，美好的一天就要开始了！';
            } else if (now > 7 && now <= 11) {
                text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
            } else if (now > 11 && now <= 14) {
                text = '中午了，工作了一个上午，现在是午餐时间！';
            } else if (now > 14 && now <= 17) {
                text = '午后很容易犯困呢，今天的运动目标完成了吗？';
            } else if (now > 17 && now <= 19) {
                text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~~';
            } else if (now > 19 && now <= 21) {
                text = '晚上好，今天过得怎么样？';
            } else if (now > 21 && now <= 23) {
                text = '已经这么晚了呀，早点休息吧，晚安~~';
            } else {
                text = '嗨~ 快来逗我玩吧！';
            }
        }else {
            text = '欢迎阅读<span style="color:#0099cc;">「 ' + document.title.split(' - ')[0] + ' 」</span>';
        }
    showMessage(text, 12000);
})();

window.setInterval(showHitokoto,30000);

function showHitokoto(){
    $.getJSON('https://v1.hitokoto.cn/',function(result){
        showMessage(result.hitokoto, 5000);
    });
}

function showMessage(text, timeout){
    if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
    //console.log('showMessage', text);
    $('.message').stop();
    $('.message').html(text).fadeTo(200, 1);
    if (timeout === null) timeout = 5000;
    hideMessage(timeout);
}

function hideMessage(timeout){
    $('.message').stop().css('opacity',1);
    if (timeout === null) timeout = 5000;
    $('.message').delay(timeout).fadeTo(200, 0);
}

    (function(a) {
        a.extend({
            mouseMoveShow: function(b) {
                var d = 0,
                    c = 0,
                    h = 0,
                    k = 0,
                    e = 0,
                    f = 0;
                a(window).mousemove(function(g) {
                    d = a(window).width();
                    c = a(window).height();
                    h = g.clientX;
                    k = g.clientY;
                    e = g.pageX;
                    f = g.pageY;
                    h + a(b).width() >= d && (e = e - a(b).width() - 5);
                    k + a(b).height() >= c && (f = f - a(b).height() - 5);
                    a("html").on({
                        contextmenu: function(c) {
                            3 == c.which && a(b).css({
                                left: e,
                                top: f
                            }).show()
                        },
                        click: function() {
                            a(b).hide()
                        }
                    })
                })
            },
            disabledContextMenu: function() {
                window.oncontextmenu = function() {
                    return !1
                }
            }
        })
    })(jQuery);
     
    function getSelect() {
        "" == (window.getSelection ? window.getSelection() : document.selection.createRange().text) ? layer.msg("啊噢...你没还没选择文字呢！") : document.execCommand("Copy")
    }
    function baiduSearch() {
        var a = window.getSelection ? window.getSelection() : document.selection.createRange().text;
        "" == a ? layer.msg("啊噢...你没还没选择文字呢！") : window.open("https://www.baidu.com/s?wd=" + a)
    }
    $(function() {
        for (var a = navigator.userAgent, b = "Android;iPhone;SymbianOS;Windows Phone;iPad;iPod".split(";"), d = !0, c = 0; c < b.length; c++) if (0 < a.indexOf(b[c])) {
            d = !1;
            break
        }
        d && ($.mouseMoveShow(".usercm"), $.disabledContextMenu())
    });
class Circle {
    constructor({ origin, speed, color, angle, context }) {
      this.origin = origin
      this.position = { ...this.origin }
      this.color = color
      this.speed = speed
      this.angle = angle
      this.context = context
      this.renderCount = 0
    }
  
    draw() {
      this.context.fillStyle = this.color
      this.context.beginPath()
      this.context.arc(this.position.x, this.position.y, 2, 0, Math.PI * 2)
      this.context.fill()
    }
  
    move() {
      this.position.x = (Math.sin(this.angle) * this.speed) + this.position.x
      this.position.y = (Math.cos(this.angle) * this.speed) + this.position.y + (this.renderCount * 0.3)
      this.renderCount++
    }
  }
  
  class Boom {
    constructor ({ origin, context, circleCount = 10, area }) {
      this.origin = origin
      this.context = context
      this.circleCount = circleCount
      this.area = area
      this.stop = false
      this.circles = []
    }
  
    randomArray(range) {
      const length = range.length
      const randomIndex = Math.floor(length * Math.random())
      return range[randomIndex]
    }
  
    randomColor() {
      const range = ['8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
      return '#' + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range) + this.randomArray(range)
    }
  
    randomRange(start, end) {
      return (end - start) * Math.random() + start
    }
  
    init() {
      for(let i = 0; i < this.circleCount; i++) {
        const circle = new Circle({
          context: this.context,
          origin: this.origin,
          color: this.randomColor(),
          angle: this.randomRange(Math.PI - 1, Math.PI + 1),
          speed: this.randomRange(1, 6)
        })
        this.circles.push(circle)
      }
    }
  
    move() {
      this.circles.forEach((circle, index) => {
        if (circle.position.x > this.area.width || circle.position.y > this.area.height) {
          return this.circles.splice(index, 1)
        }
        circle.move()
      })
      if (this.circles.length == 0) {
        this.stop = true
      }
    }
  
    draw() {
      this.circles.forEach(circle => circle.draw())
    }
  }
  
  class CursorSpecialEffects {
    constructor() {
      this.computerCanvas = document.createElement('canvas')
      this.renderCanvas = document.createElement('canvas')
  
      this.computerContext = this.computerCanvas.getContext('2d')
      this.renderContext = this.renderCanvas.getContext('2d')
  
      this.globalWidth = window.innerWidth
      this.globalHeight = window.innerHeight
  
      this.booms = []
      this.running = false
    }
  
    handleMouseDown(e) {
      const boom = new Boom({
        origin: { x: e.clientX, y: e.clientY },
        context: this.computerContext,
        area: {
          width: this.globalWidth,
          height: this.globalHeight
        }
      })
      boom.init()
      this.booms.push(boom)
      this.running || this.run()
    }
  
    handlePageHide() {
      this.booms = []
      this.running = false
    }
  
    init() {
      const style = this.renderCanvas.style
      style.position = 'fixed'
      style.top = style.left = 0
      style.zIndex = '999999999999999999999999999999999999999999'
      style.pointerEvents = 'none'
  
      style.width = this.renderCanvas.width = this.computerCanvas.width = this.globalWidth
      style.height = this.renderCanvas.height = this.computerCanvas.height = this.globalHeight
  
      document.body.append(this.renderCanvas)
  
      window.addEventListener('mousedown', this.handleMouseDown.bind(this))
      window.addEventListener('pagehide', this.handlePageHide.bind(this))
    }
  
    run() {
      this.running = true
      if (this.booms.length == 0) {
        return this.running = false
      }
  
      requestAnimationFrame(this.run.bind(this))
  
      this.computerContext.clearRect(0, 0, this.globalWidth, this.globalHeight)
      this.renderContext.clearRect(0, 0, this.globalWidth, this.globalHeight)
  
      this.booms.forEach((boom, index) => {
        if (boom.stop) {
          return this.booms.splice(index, 1)
        }
        boom.move()
        boom.draw()
      })
      this.renderContext.drawImage(this.computerCanvas, 0, 0, this.globalWidth, this.globalHeight)
    }
  }
    var yh = new CursorSpecialEffects();
    yh.init(); 
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
document.onreadystatechange = currentState 
function currentState(){
    if (document.readyState == 'complete'){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3500,
          timerProgressBar: true,
          onOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
         }
        })
        Toast.fire({
          icon: 'success',
          title: '一切就绪'
        })
    }
}
document.onkeydown = function(){  
    if(window.event && window.event.keyCode == 123) {
        event.keyCode=0;
        event.returnValue=false;
    }
}  
