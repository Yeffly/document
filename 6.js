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
;var encode_version = 'sojson.v5', eqlxg = '__0x75965',  __0x75965=['5Lig6ICz5Ymh6ZmxUXfDvzHDm0zCtG4H','w6VFwqgWUhg9CcOEWw==','w4BTw61ZwqIcCw==','5qKx5ra65Yix5oCf55m45rSB6Kef5Zqh5omh5o+H5Lmy5Lqi5pyv56m85LmH5YWh5a6P772/6K6S5puE5o665reD6KWX5ZuG5ZKv6YaK6KyE77+A','GMKfb8OSwo4GQ8KEOw==','ZlTCpXo=','EkwswqbDp8OKwpHDoi5WIMKUwoA=','woLDucKLTBpGw6LDpyHCgGXDrcOcwoQ=','bcOOPg==','w57DomNyw4TCgg==','w5NLLk7DssKjCysnwqvCp2ARHMKDw5Q=','AAAF','d0TCkMOFwrw=','w47CslhewqE=','anEGPgEpe1R2','B8KDYsK9H2bDrcKMeQ=='];(function(_0x3feb6a,_0x4a3c84){var _0x435eb8=function(_0x2e9a9d){while(--_0x2e9a9d){_0x3feb6a['push'](_0x3feb6a['shift']());}};_0x435eb8(++_0x4a3c84);}(__0x75965,0x101));var _0x4255=function(_0x1b50ba,_0x4cbe5b){_0x1b50ba=_0x1b50ba-0x0;var _0x5d09c9=__0x75965[_0x1b50ba];if(_0x4255['initialized']===undefined){(function(){var _0x387bb6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x102b78='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x387bb6['atob']||(_0x387bb6['atob']=function(_0x37ee77){var _0x445074=String(_0x37ee77)['replace'](/=+$/,'');for(var _0x5897d5=0x0,_0x83e068,_0x5aeae2,_0x35a768=0x0,_0x4dd63d='';_0x5aeae2=_0x445074['charAt'](_0x35a768++);~_0x5aeae2&&(_0x83e068=_0x5897d5%0x4?_0x83e068*0x40+_0x5aeae2:_0x5aeae2,_0x5897d5++%0x4)?_0x4dd63d+=String['fromCharCode'](0xff&_0x83e068>>(-0x2*_0x5897d5&0x6)):0x0){_0x5aeae2=_0x102b78['indexOf'](_0x5aeae2);}return _0x4dd63d;});}());var _0x1db8f5=function(_0x6b220c,_0x31dd58){var _0x1038f9=[],_0x5d763a=0x0,_0x8960,_0x3cd250='',_0x3c5400='';_0x6b220c=atob(_0x6b220c);for(var _0x187a9f=0x0,_0x4d53a8=_0x6b220c['length'];_0x187a9f<_0x4d53a8;_0x187a9f++){_0x3c5400+='%'+('00'+_0x6b220c['charCodeAt'](_0x187a9f)['toString'](0x10))['slice'](-0x2);}_0x6b220c=decodeURIComponent(_0x3c5400);for(var _0x54b5fb=0x0;_0x54b5fb<0x100;_0x54b5fb++){_0x1038f9[_0x54b5fb]=_0x54b5fb;}for(_0x54b5fb=0x0;_0x54b5fb<0x100;_0x54b5fb++){_0x5d763a=(_0x5d763a+_0x1038f9[_0x54b5fb]+_0x31dd58['charCodeAt'](_0x54b5fb%_0x31dd58['length']))%0x100;_0x8960=_0x1038f9[_0x54b5fb];_0x1038f9[_0x54b5fb]=_0x1038f9[_0x5d763a];_0x1038f9[_0x5d763a]=_0x8960;}_0x54b5fb=0x0;_0x5d763a=0x0;for(var _0x11229c=0x0;_0x11229c<_0x6b220c['length'];_0x11229c++){_0x54b5fb=(_0x54b5fb+0x1)%0x100;_0x5d763a=(_0x5d763a+_0x1038f9[_0x54b5fb])%0x100;_0x8960=_0x1038f9[_0x54b5fb];_0x1038f9[_0x54b5fb]=_0x1038f9[_0x5d763a];_0x1038f9[_0x5d763a]=_0x8960;_0x3cd250+=String['fromCharCode'](_0x6b220c['charCodeAt'](_0x11229c)^_0x1038f9[(_0x1038f9[_0x54b5fb]+_0x1038f9[_0x5d763a])%0x100]);}return _0x3cd250;};_0x4255['rc4']=_0x1db8f5;_0x4255['data']={};_0x4255['initialized']=!![];}var _0x3e2a0d=_0x4255['data'][_0x1b50ba];if(_0x3e2a0d===undefined){if(_0x4255['once']===undefined){_0x4255['once']=!![];}_0x5d09c9=_0x4255['rc4'](_0x5d09c9,_0x4cbe5b);_0x4255['data'][_0x1b50ba]=_0x5d09c9;}else{_0x5d09c9=_0x3e2a0d;}return _0x5d09c9;};var __encode=_0x4255('0x0','gbj^'),_0xb483=[_0x4255('0x1','T!Qv'),'http://www.sojson.com/javascriptobfuscator.html'];(function(_0x4bc088){_0x4bc088[_0xb483[0x0]]=_0xb483[0x1];}(window));var __Ox57aea=[_0x4255('0x2','XWL5'),'id','on',_0x4255('0x3','XWL5'),_0x4255('0x4','7lLO'),'head','',_0x4255('0x5','XTS#'),_0x4255('0x6','8GYT'),_0x4255('0x7','Nqgr'),'dir','devtoolschange','isOpen',_0x4255('0x8','#lzE'),_0x4255('0x9','VAHc')];mark=__Ox57aea[0x0];var checkStatus;var element=new Image();Object[__Ox57aea[0x8]](element,__Ox57aea[0x1],{'get':function(){checkStatus=__Ox57aea[0x2];document[__Ox57aea[0x4]][__Ox57aea[0x3]]=mark;document[__Ox57aea[0x5]][__Ox57aea[0x3]]=__Ox57aea[0x6];throw new Error(__Ox57aea[0x7]);}});setInterval(function(){checkStatus=__Ox57aea[0x9];console[__Ox57aea[0xa]](element);},0x3e8);window[__Ox57aea[0xe]](__Ox57aea[0xb],_0x30478b=>{var _0x38a2e9={'TDiaV':function _0x2bc01f(_0x188c5c,_0x3468b9){return _0x188c5c==_0x3468b9;},'HtFab':function _0x556ce5(_0x5de897,_0x4be56d){return _0x5de897===_0x4be56d;},'VwNvI':_0x4255('0xa','*esH')};if(_0x38a2e9[_0x4255('0xb','9Yrs')](_0x30478b[__Ox57aea[0xd]][__Ox57aea[0xc]],!![])){if(_0x38a2e9['HtFab'](_0x38a2e9['VwNvI'],_0x38a2e9[_0x4255('0xc','wpl*')])){document[__Ox57aea[0x4]][__Ox57aea[0x3]]=mark;document[__Ox57aea[0x5]][__Ox57aea[0x3]]=__Ox57aea[0x6];}else{document[__Ox57aea[0x4]][__Ox57aea[0x3]]=mark;document[__Ox57aea[0x5]][__Ox57aea[0x3]]=__Ox57aea[0x6];}}});if(!(typeof encode_version!==_0x4255('0xd','D$&5')&&encode_version===_0x4255('0xe','hqK9'))){window['alert'](_0x4255('0xf','Jrxa'));};encode_version = 'sojson.v5';
