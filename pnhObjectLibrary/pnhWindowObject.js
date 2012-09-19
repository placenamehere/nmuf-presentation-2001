// pnhWindowObject.js
// This is an object from my personal library, not written for distribution purposes
// If you'd like to use this code, please let me know, but be warned,
// use of these objects does not entitle you to support from me  - chris (placenamehere.com)
// library info at http://placenamehere.com/pnhObjectLibrary/



function pnhSetWindowStatus(sStatus) { window.status = sStatus; }
function pnhClearWindowStatus() { window.status = ''; }
function pnhGetInnerWidth() {
	if (window.innerWidth) { return window.innerWidth; } // netscape behavior
	else if (document.body.offsetWidth) { return  document.body.offsetWidth; } // IE behavior
	else { return null; }
}
function pnhGetInnerHeight() {
	if (window.innerHeight) { return window.innerHeight; } // netscape behavior
	else if (document.body.offsetHeight) { return  document.body.offsetHeight; } // IE behavior
	else { return null; }
}
function pnhSetInnerWidth(iPixels) {
	if (window.innerWidth) { window.innerWidth = iPixels; } // netscape behavior
	else if (document.body.offsetWidth) { document.body.offsetWidth = iPixels; } // IE behavior
	else { return null; }
}
function pnhSetInnerHeight(iPixels) {
	if (window.innerHeight) { window.innerHeight = iPixels; } // netscape behavior
	else if (document.body.offsetHeight) { document.body.offsetHeight = iPixels; } // IE behavior
	else { return null; }
}
function pnhPercentToPixels(iPercent, sDirection) { // the percentage is an integer percentage
	if (sDirection == "width") { return parseInt(this.getInnerWidth()*iPercent/100); }
	else if (sDirection == "height") { return parseInt(this.getInnerHeight()*iPercent/100); }
	else { return null; }
}

function pnhWindowObject() {
	this.setStatus = pnhSetWindowStatus;
	this.clearStatus = pnhClearWindowStatus;
	this.getInnerWidth = pnhGetInnerWidth;
	this.getInnerHeight = pnhGetInnerHeight;
	this.setInnerWidth = null; // haven't needed this yet
	this.setInnerHeight = null; // haven't needed this yet
	this.percentToPixels = pnhPercentToPixels;
}