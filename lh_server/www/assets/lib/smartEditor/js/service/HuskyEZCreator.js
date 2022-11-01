/*
Copyright (C) NAVER corp.  

This library is free software; you can redistribute it and/or  
modify it under the terms of the GNU Lesser General Public  
License as published by the Free Software Foundation; either  
version 2.1 of the License, or (at your option) any later version.  

This library is distributed in the hope that it will be useful,  
but WITHOUT ANY WARRANTY; without even the implied warranty of  
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU  
Lesser General Public License for more details.  

You should have received a copy of the GNU Lesser General Public  
License along with this library; if not, write to the Free Software  
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA  
*/
if(typeof window.nhn=='undefined') window.nhn = {};
if (!nhn.husky) nhn.husky = {};

/**
 * @fileOverview This file contains application creation helper function, which would load up an HTML(Skin) file and then execute a specified create function.
 * @name HuskyEZCreator.js
 */
nhn.husky.EZCreator = new (function(){
	this.nBlockerCount = 0;
	var elIFrame;

	this.createInIFrame = function(htOptions){
		if(arguments.length == 1){
			var oAppRef = htOptions.oAppRef;
			var elPlaceHolder = htOptions.elPlaceHolder;
			var sSkinURI = htOptions.sSkinURI;
			var fCreator = htOptions.fCreator;
			var fOnAppLoad = htOptions.fOnAppLoad;
			var bUseBlocker = htOptions.bUseBlocker;
			var htParams = htOptions.htParams || null;
		}else{
			// for backward compatibility only
			oAppRef = arguments[0];
			elPlaceHolder = arguments[1];
			sSkinURI = arguments[2];
			fCreator = arguments[3];
			fOnAppLoad = arguments[4];
			bUseBlocker = arguments[5];
			htParams = arguments[6];
		}

		// if(bUseBlocker) nhn.husky.EZCreator.showBlocker();

		var attachEvent = function(elNode, sEvent, fHandler){ 
			if(elNode.addEventListener){
				elNode.addEventListener(sEvent, fHandler, false);
			}else{
				elNode.attachEvent("on"+sEvent, fHandler);
			}
		} 

		if(!elPlaceHolder){
			alert("Placeholder is required!");
			return;
		}

		if(typeof(elPlaceHolder) != "object")
			elPlaceHolder = document.getElementById(elPlaceHolder);

			// var elIFrame, nEditorHeight;
			var nEditorHeight;

		try{
			elIFrame = document.createElement("<IFRAME frameborder=0 scrolling=no>");
		}catch(e){
			elIFrame = document.createElement("IFRAME");
			elIFrame.setAttribute("frameborder", "0");
			elIFrame.setAttribute("scrolling", "no");
		}
		
		elIFrame.style.width = "1px";
		elIFrame.style.height = "1px";
		elPlaceHolder.parentNode.insertBefore(elIFrame, elPlaceHolder.nextSibling);
		
		attachEvent(elIFrame, "load", function(){
			fCreator = elIFrame.contentWindow[fCreator] || elIFrame.contentWindow.createSEditor2;
			
//			top.document.title = ((new Date())-window.STime);
//			window.STime = new Date();
			
			try{
				nEditorHeight = elIFrame.contentWindow.document.body.scrollHeight + 12;
				elIFrame.style.width =  "100%";
				elIFrame.style.height = nEditorHeight+ "px";
				elIFrame.contentWindow.document.body.style.margin = "0";
			}catch(e){
				// nhn.husky.EZCreator.hideBlocker(true); 강ㅔㅜ석
				elIFrame.style.border = "5px solid red";
				elIFrame.style.width = "500px";
				elIFrame.style.height = "500px";
				alert("Failed to access "+sSkinURI);
				return;
			}
			
			var oApp = fCreator(elPlaceHolder, htParams);	// oEditor
			

			oApp.elPlaceHolder = elPlaceHolder;

			oAppRef[oAppRef.length] = oApp;
			if(!oAppRef.getById) oAppRef.getById = {};
			
			if(elPlaceHolder.id) oAppRef.getById[elPlaceHolder.id] = oApp;

			oApp.run({fnOnAppReady:fOnAppLoad}); 
			
//			top.document.title += ", "+((new Date())-window.STime);
			// nhn.husky.EZCreator.hideBlocker(); 강제주석
		});
//		window.STime = new Date();
		elIFrame.src = sSkinURI;
		this.elIFrame = elIFrame;

		// console.log(nhn.husky);
		// console.log("document.getElementById('smart-Blocker')", document.body.getElementById('smart-Blocker'));
		// if(document.body.getElementById('smart-Blocker')) {
			
		// 	if(bUseBlocker) this.hideBlocker();
		// 	else this.showBlocker();
		// }
		// else nhn.husky.EZCreator.createBlocker(bUseBlocker);
		// nhn.husky.EZCreator.createBlocker(bUseBlocker);

		// let test_interval = null;
		// if(bUseBlocker) {
		// 	test_interval = setInterval(() => {
		// 		if(document.getElementById('smart-Blocker')) {
		// 			clearInterval(test_interval);
		// 		} else {
		// 			nhn.husky.EZCreator.createBlocker(bUseBlocker);
		// 		}
		// 	},100);
		// }
		nhn.husky.EZCreator.createBlocker(bUseBlocker);
		// if(!nhn.husky?.elBlocker) {
		// 	console.log('true 들어옴',nhn.husky?.elBlocker);
			
		// 	nhn.husky.EZCreator.createBlocker(bUseBlocker);
		// }
		// else console.log('else 들어옴');
	};

	this.createBlocker = function(display){
		var elBlocker = document.createElement("DIV");
		elBlocker.style.position = "absolute";
		elBlocker.style.top = 0;
		elBlocker.style.left = 0;
		elBlocker.style.backgroundColor = "rgba(0 0 0 / 0.2)";
		elBlocker.style.width = "100%";
		elBlocker.style.height = "calc(100% - 5px)";
		elBlocker.style.display = display ? 'block' : 'none';
		elBlocker.id = 'smart-Blocker';

		document.getElementsByTagName('app-smartedit')[0]?.appendChild(elBlocker);

		nhn.husky.EZCreator.elBlocker = elBlocker;
	}
	
	// this.showBlocker = function(){
	// 	if(this.nBlockerCount<1){
	// 		var elBlocker = document.createElement("DIV");
	// 		elBlocker.style.position = "absolute";
	// 		elBlocker.style.top = 0;
	// 		elBlocker.style.left = 0;
	// 		elBlocker.style.backgroundColor = "rgba(0 0 0 / 0.2)";
	// 		elBlocker.style.width = "100%";
	// 		elBlocker.style.height = "calc(100% - 5px)";
	// 		elBlocker.style.height = "none";

	// 		document.body.appendChild(elBlocker);

	// 		nhn.husky.EZCreator.elBlocker = elBlocker;
	// 	}

	// 	nhn.husky.EZCreator.elBlocker.style.height = Math.max(document.body.scrollHeight, document.body.clientHeight)+"px";
		
	// 	this.nBlockerCount++;
	// };

	this.showBlocker = function(){
		if(nhn.husky.EZCreator.elBlocker) nhn.husky.EZCreator.elBlocker.style.display = "block";
	};
	
	this.hideBlocker = function(bForce){
		// if(!bForce){
		// 	if(--this.nBlockerCount > 0) return;
		// }
		
		// this.nBlockerCount = 0;
		
		if(nhn.husky.EZCreator.elBlocker) nhn.husky.EZCreator.elBlocker.style.display = "none";
	}
})();