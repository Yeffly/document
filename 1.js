(function(exportName){


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