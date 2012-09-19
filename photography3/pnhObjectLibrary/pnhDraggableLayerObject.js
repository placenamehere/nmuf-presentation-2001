// This is an early cut of one of the objects in my personal library
// I don't believe there are any syntax errors, but that's as much as I will vouch for
// So don't come crying to me if you're trying to use it and can't figure out why it's not working
// I have posted this solely to test one part of my implementation for cross platform and cross browser stuff
// Oh, and if you like what you see, send me an email at pnhObjectLibrary@placenamehere.com so we can talk geek




/* Fist things first is to start up the event handlers. This triggers as the code is read in */

var oldX = null;
var oldY = null;
var activeObject = null;

if (document.layers) { }
else if (document.all) { }
else if (document.getElementById) {	}
else { }

function pnhGetDLayerX() {
	if (document.layers) { return this.layer.left; }
	else if (document.all) { return this.layer.style.pixelLeft; }
	else if (document.getElementById) {	return this.layer.style.left; } // I don't yet know if I care about the px postfix
	else { return null; }
}
function pnhGetDLayerY() {
	if (document.layers) { return this.layer.top; }
	else if (document.all) { return this.layer.style.pixelTop;}
	else if (document.getElementById) { return this.layer.style.top; } // I don't yet know if I care about the px postfix
	else { return null;	}
}
function pnhSetDLayerX(iPixels) {
	if (document.layers) { this.layer.left = iPixels; }
	else if (document.all) { this.layer.style.pixelLeft = iPixels; }
	else if (document.getElementById) { this.layer.style.left = iPixels; }
	else { /* ???? */ }
}
function pnhSetDLayerY(iPixels) {
	if (document.layers) { this.layer.top = iPixels; }
	else if (document.all) { this.layer.style.pixelTop = iPixels; }
	else if (document.getElementById) { this.layer.style.top = iPixels; }
	else { /* ???? */ }
}
function pnhSetDLayerZ(iIndex) {
	if (document.layers) { this.layer.zIndex = iIndex; }
	else if (document.all) { this.layer.style.zIndex = iIndex; }
	else if (document.getElementById) { this.layer.style.zIndex = iIndex; }
	else { /* ???? */ }
}
function pnhRewriteDLayerHTML(sHTML, iWidth) {
	// this code was ripped from the planetmouse.com website 2000
	// width is a must have for Navigator 4.x - other wise text wont wrap at the right time
	if (document.layers) {
		sHTML = "<table cellpadding='0' cellspacing='0' border='0' width='" + iWidth + "'><tr><td width='" + iWidth + "'>" + sHTML + "</td></td></table>";
	 	this.layer.document.open();
		this.layer.document.write(sHTML);
		this.layer.document.close();
	}
	else if ((document.getElementById) || (document.all)) { this.layer.innerHTML = sHTML; }
	else { /* ???? */ }
}
function pnhSetDLayerVis(sVisibility) {
	if (document.layers) { this.layer.visibility = sVisibility; }
	else if ((document.all) || (document.getElementById)) { this.layer.style.visibility = sVisibility; }
	else { /* ???? */ }
}
function pnhSetDClippingRegion(iTop, iRight, iBottom, iLeft) {
	if (document.layers) {
		this.layer.clip.top = iTop;
		this.layer.clip.right = iRight;
		this.layer.clip.bottom = iBottom;
		this.layer.clip.left = iLeft;
	}
	else if (document.all) { this.layer.style.clip="rect("+iTop+" "+iRight+" "+iBottom+" "+iLeft+")"; }
	else if (document.getElementById) {  } // gotta work on this one
	else { /* ???? */ }
}
function pnhMoveDClippingRegionBy(iTop, iRight, iBottom, iLeft) {
	if (document.layers) {
		this.layer.clip.top = parseInt(this.layer.clip.top) + iTop; /// parseInt is a hold over from some old code... I don't know it I need it
		this.layer.clip.right = parseInt(this.layer.clip.right) + iRight;
		this.layer.clip.bottom = parseInt(this.layer.clip.bottom) + iBottom;
		this.layer.clip.left = parseInt(this.layer.clip.left) + iLeft;
	}
	else if (document.all) {
		this.layer.style.clipTop = parseInt(this.layer.style.clipTop) + iTop;
		this.layer.style.clipRight = parseInt(this.layer.style.clipRight) + iRight;
		this.layer.style.clipBottom = parseInt(this.layer.style.clipBottom) + iBottom;
		this.layer.style.clipLeft = parseInt(this.layer.style.clipLeft) + iLeft;
	}
	else if (document.getElementById) {  } // gotta work on this one
	else { /* ???? */ }
}

function pnhDLayerHandleDrag() {
	if (document.layers) {
		this.setX(this.getX + (e.pageX - oldX));
		this.setY(this.getY + (e.pageY - oldY));
		oldX = e.pageX;
		oldY = e.pageY;
	} else if (document.all) {
		this.setX(this.getX + (event.clientX - oldX));
		this.setY(this.getY + (event.clientY - oldY));
		oldX = event.clientX;
		oldY = event.clientY;
	} else if (document.getElementById) {
	
	} else {}
}


function pnhDLayerHandleMouseOver(e) {
	if (document.layers) { this.layer = e.target; }
	else { this.layer = e }
}

function pnhDLayerHandleMouseDown(e) {
	if (document.layers) { 
		oldX = e.pageX;
		oldY = e.pageY;
		this.layer.captureEvents(Event.MOUSEMOVE);
	} else if (document.all) {
		oldX = event.clientX
		oldY = event.clientY
	} else if (document.getElementById) { 
		oldX = e.pageX;
		oldY = e.pageY;
	} else {  }
	this.layer.onmousemove = drag;
}

function pnhDLayerHandleMouseUp() {
	if (document.layers) { this.layer.releaseEvents(Event.MOUSEMOVE); }
	else if (document.all) { this.layer.onmousemove = null; }
	else if (document.getElementById) { this.layer.onmousemove = null; }
	else {  }
}

function pnhDraggableLayerObject(sLayerName) {
	// STEP 1: get ahold of the DOM object
	if (document.getElementById) {
		this.layer = document.getElementById(sLayerName); // should this be "sLayerId"?
	} else if (document.all) {
		this.layer = document.all[sLayerName];
		this.layer.style.pixelLeft = this.layer.style.left;
		this.layer.style.pixelTop = this.layer.style.top;
	} else if (document.layers) {
		this.layer = document.layers[sLayerName];
		this.layer.captureEvents(Event.MOUSEDOWN|Event.MOUSEUP|Event.MOUSEOUT); // initiate the mouse listeners
		this.layer.onmouseover = pnhDLayerHandleMouseOver; // set the mouseover listener
	} else {
		// I don't yet know what I want to do with the error handling
	}
	
	// STEP 2: hook in the functions
	this.getX = pnhGetDLayerX;
	this.getY = pnhGetDLayerY;

	this.setX = pnhSetDLayerX;
	this.setY = pnhSetDLayerY;
	this.setPercentX = null; // I don't think I will need this due to percent conversion added to window object
	this.setPercentY = null; // I don't think I will need this due to percent conversion added to window object

	this.setZ = pnhSetDLayerZ;
	this.setHTML = pnhRewriteDLayerHTML;
	this.setVisibility = pnhSetDLayerVis;

	// The rest of the event handling
	// this.layer.handleMouseDown = pnhDLayerHandleMouseDown;
	// this.layer.handleMouseUp = pnhDLayerHandleMouseUp;
	// this.layer.handleDrag = pnhDLayerHandleDrag;
	
	// this.layer.onmousedown = pnhDLayerHandleMouseDown;
    // this.layer.onmouseup = pnhDLayerHandleMouseUp;

	
	// Still built are any of the clipping area functions:
	this.setClip = pnhSetDClippingRegion;
	this.changeClipBy = pnhMoveDClippingRegionBy;
}