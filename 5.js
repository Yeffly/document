var __encode = 'sojson.com',
    _0xb483 = ["_decode", "http://www.sojson.com/javascriptobfuscator.html"];
(function(_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(window);
var __Ox57aea = ["检测到您的浏览器或插件与本站不兼容，请更换浏览器后重试！<br> www.siyunxi.com", "id", "on", "innerHTML", "body", "head", "", ".............", "defineProperty", "off", "dir", "devtoolschange", "isOpen", "detail", "addEventListener"];
mark = __Ox57aea[0x0];
var checkStatus;
var element = new Image();
Object[__Ox57aea[0x8]](element, __Ox57aea[0x1], {
    get: function() {
        checkStatus = __Ox57aea[0x2];
        document[__Ox57aea[0x4]][__Ox57aea[0x3]] = mark;
        document[__Ox57aea[0x5]][__Ox57aea[0x3]] = __Ox57aea[0x6];
        throw new Error(__Ox57aea[0x7])
    }
});
setInterval(function() {
    checkStatus = __Ox57aea[0x9];
    console[__Ox57aea[0xa]](element)
}, 1000);
window[__Ox57aea[0xe]](__Ox57aea[0xb], (_0x8da4x3) => {
    if (_0x8da4x3[__Ox57aea[0xd]][__Ox57aea[0xc]] == true) {
        document[__Ox57aea[0x4]][__Ox57aea[0x3]] = mark;
        document[__Ox57aea[0x5]][__Ox57aea[0x3]] = __Ox57aea[0x6]
    }
});
(function(exportName){
	var exports = exports || {};
	function detect(func){
		if (typeof func === "function"){
			var status = false;

			function checkHandler(){
				checkStatus = false;
				if (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized){
					setStatus(true);
					return;
				}

				var element = new Image();
				element.__defineGetter__('id', function(){
					checkStatus = true;
					//setStatus(true);
				});
				console.log(element);
				//console.clear();

				var widthThreshold = window.outerWidth - window.innerWidth > 160;
				var heightThreshold = window.outerHeight - window.innerHeight > 160;

				if (!(heightThreshold && widthThreshold) && (widthThreshold || heightThreshold)){
					checkStatus = true;
					//setStatus(true);
				}

				if(!checkStatus){
					/*if(navigator.userAgent.toLowerCase().indexOf('firefox') == -1){//for exclude scripts on firefox
						var r = function(){};
						r.toString = function(){
							checkStatus = true;
							//setStatus(true);
						};
						console.log("%c", r, "");
					}*/

					var before = new Date().getTime();
					eval(function(p,a,c,k,e,r){e=String;if(!''.replace(/^/,String)){while(c--)r[c]=k[c]||c;k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('0;',2,1,'debugger'.split('|'),0,{}));
					var after = new Date().getTime();
					if (after - before > 100){
						checkStatus = true;
						//setStatus(true);
					}
				}

				console.clear();

				setStatus(checkStatus);
			}

			function setStatus(value){
				if (status !== value){
					status = value;
					func(value);
				}
			}
			checkHandler();
			setInterval(checkHandler, 1000);
			window.addEventListener("resize", checkHandler);
		}
	}
	exports.detect = detect;
	if (typeof define === "function"){
		if (define.amd || define.cmd){
			define(function() {
				return exports;
			});
		}
	} else if (typeof module !== "undefined" && module.exports){
		module.exports = exports;
	} else {
		window[exportName] = exports;
	}
})("devtools");
