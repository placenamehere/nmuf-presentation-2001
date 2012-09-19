// pnhObjectLibrary.js
// This is an object from my personal library, not written for distribution purposes
// If you'd like to use this code, please let me know, but be warned,
// use of these objects does not entitle you to support from me  - chris (placenamehere.com)
// library info at http://placenamehere.com/pnhObjectLibrary/

function pnhGetLayerX() {
	if (document.layers) { return this.layer.left; }
	else if (document.all) { return parseInt(this.layer.currentStyle.left); }
	else if (document.getElementById) {	return parseInt(document.defaultView.getComputedStyle(this.layer, null).getPropertyValue('left')); }
	else { return null; }
}
function pnhGetLayerY() {
	if (document.layers) { return this.layer.top; }
	else if (document.all) { return parseInt(this.layer.currentStyle.top);}
	else if (document.getElementById) { return parseInt(document.defaultView.getComputedStyle(this.layer, null).getPropertyValue('top')); }
	else { return null;	}
}
function pnhSetLayerX(iPixels) {
	if (document.layers) { this.layer.left = iPixels; }
	else if (document.all) { this.layer.style.pixelLeft = iPixels; }
	else if (document.getElementById) { this.layer.style.left = iPixels + "px"; }
	else { /* ???? */ }
}
function pnhSetLayerY(iPixels) {
	if (document.layers) { this.layer.top = iPixels; }
	else if (document.all) { this.layer.style.pixelTop = iPixels; }
	else if (document.getElementById) { this.layer.style.top = iPixels + "px"; }
	else { /* ???? */ }
}
function pnhSetLayerZ(iIndex) {
	if (document.layers) { this.layer.zIndex = iIndex; }
	else if (document.all) { this.layer.style.zIndex = iIndex; }
	else if (document.getElementById) { this.layer.style.zIndex = iIndex; }
	else { /* ???? */ }
}
function pnhLayerMoveBy(iLeft,iTop) {
	if (document.layers) { this.layer.top = this.getY() + iTop; this.layer.left = this.getX() + iLeft; }
	else if (document.all) { this.layer.style.pixelTop = this.getY() + iTop; this.layer.style.pixelLeft = this.getX() + iLeft; }
	else if (document.getElementById) { this.layer.style.top =  this.getY() + iTop; this.layer.style.left = this.getX() + iLeft; }
	else { /* ???? */ }
}
function pnhRewriteLayerHTML(sHTML, iWidth) {
	// width is a must have for Navigator 4.x - otherwise text won't wrap at same width as it had previous to the rewrite
	if (document.layers) {
		sHTML = "<table cellpadding='0' cellspacing='0' border='0' width='" + iWidth + "'><tr><td width='" + iWidth + "'>" + sHTML + "</td></td></table>";
	 	this.layer.document.open();
		this.layer.document.write(sHTML);
		this.layer.document.close();
	}
	else if ((document.getElementById) || (document.all)) { this.layer.innerHTML = sHTML; }
	else { /* ???? */ }
}
function pnhSetLayerVis(sVisibility) {
	if (document.layers) { this.layer.visibility = sVisibility; }
	else if ((document.all) || (document.getElementById)) { this.layer.style.visibility = sVisibility; }
	else { /* ???? */ }
}
function pnhSetClippingRegion(iTop, iRight, iBottom, iLeft) {
	if (document.layers) {
		this.layer.clip.top = iTop;
		this.layer.clip.right = iRight;
		this.layer.clip.bottom = iBottom;
		this.layer.clip.left = iLeft;
	}
	else if ((document.all) || (document.getElementById)) { this.layer.style.clip="rect("+iTop+" "+iRight+" "+iBottom+" "+iLeft+")"; }
	else { /* ???? */ }
}
function pnhMoveClippingRegionBy(iTop, iRight, iBottom, iLeft) {
	if (document.layers) {
		this.layer.clip.top = parseInt(this.layer.clip.top) + iTop; /// parseInt is a hold over from some old code... I don't know it I need it
		this.layer.clip.right = parseInt(this.layer.clip.right) + iRight;
		this.layer.clip.bottom = parseInt(this.layer.clip.bottom) + iBottom;
		this.layer.clip.left = parseInt(this.layer.clip.left) + iLeft;
	}
	else if (document.all) {
		var t = eval(parseInt(this.layer.currentStyle.clipTop) + iTop) + "px";
		var r = eval(parseInt(this.layer.currentStyle.clipRight) + iRight) + "px";
		var b = eval(parseInt(this.layer.currentStyle.clipBottom) + iBottom) + "px";
		var l = eval(parseInt(this.layer.currentStyle.clipLeft) + iLeft) + "px";
		this.layer.style.clip = "rect(" + t + " " + r + " " + b + " " + l +")";
		
	}
	else if (document.getElementById) {  } // gotta work on this one
	else { /* ???? */ }
}
function pnhLayerObject(sLayerName,aNesting) {
	// STEP 1: get ahold of the DOM object
	if (document.getElementById) {
		this.layer = document.getElementById(sLayerName); // should this be "sLayerId"?
	} else if (document.all) {
		this.layer = document.all[sLayerName];
		this.layer.style.pixelLeft = this.layer.style.left;
		this.layer.style.pixelTop = this.layer.style.top;
		alert('test');
	} else if (document.layers) {
		var layernesting = "";
		// aNesting is an array of parent layers starting outermost to closest
		if (aNesting) {
			for (i=0;i<aNesting.length;i++) {
				layernesting = layernesting + "document.layers['" + aNesting[i] + "'].";
			}
		}
		this.layer = eval(layernesting + "document.layers['" + sLayerName + "']");
	} else { }

	// STEP 2: hook in the functions
	this.getX = pnhGetLayerX;
	this.getY = pnhGetLayerY;

	this.setX = pnhSetLayerX;
	this.setY = pnhSetLayerY;
	this.moveBy = pnhLayerMoveBy;	

	this.setZ = pnhSetLayerZ;
	this.setHTML = pnhRewriteLayerHTML;
	this.setVisibility = pnhSetLayerVis;
	
	this.setClip = pnhSetClippingRegion;

	// Not completed
	this.changeClipBy = pnhMoveClippingRegionBy;
}





