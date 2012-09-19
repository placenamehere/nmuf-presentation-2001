// pnhScalableImageObject.js
// This is an object from my personal library, not written for distribution purposes
// If you'd like to use this code, please let me know, but be warned,
// use of these objects does not entitle you to support from me  - chris (placenamehere.com)
// library info at http://placenamehere.com/pnhObjectLibrary/
// Short term this object is IE4+, NN6/Mozilla only

// dev notes:
// question:: should this image be positioned via the center point or the top left?
// inheritance issue:: This will probably break miserable is the setHTML method is called
// assumptions:: that the images is the only thing in the layer


function pnhGetImageWidth() {
	if (document.layers) { return null; }
	else if ((document.all) || (document.getElementById)) {	return this.image.width; }
	else { return null; }
}
function pnhGetImageHeight() {
	if (document.layers) { return null; }
	else if ((document.all) || (document.getElementById)) {	return this.image.height; }
	else { return null; }
}
function pnhScaleImageBy(iPercentX, iPercentY) {
	if (document.layers) {  }
	else if ((document.all) || (document.getElementById)) {	
		this.image.width = this.image.width*(iPercentX/100);
		this.image.height = this.image.height*(iPercentY/100);
	}
	else {  }
}
function pnhSetImageSize(iPixelWidth, iPixelHeight) {
	if (document.layers) {  }
	else if ((document.all) || (document.getElementById)) {
		this.image.width = iPixelWidth;
		this.image.height = iPixelHeight;
	} else {  }
}
function pnhSetImageWidth(iPixelWidth) {
	if (document.layers) {  }
	else if ((document.all) || (document.getElementById)) { this.image.width = iPixelWidth; }
	else {  }
}
function pnhSetImageHeight(iPixelHeight) {
	if (document.layers) {  }
	else if ((document.all) || (document.getElementById)) {	this.image.height = iPixelHeight; }
	else {  }
}
function pnhChangeSizeBy(iPixelWidth,iPixelHeight) {
	if (document.layers) {  }
	else if ((document.all) || (document.getElementById)) {	
		this.image.width += iPixelWidth;
		this.image.height += iPixelHeight;
	}
	else {  }
}

function pnhScalableImageObject(sLayerName,sImageName,aNesting) {
	this.superClass(sLayerName,aNesting);
	if (document.layers) {
		// do nothing for now
	} else if ((document.all) || (document.getElementById)) {	
		this.image = document.images[sImageName];
	}
	
	this.getWidth = pnhGetImageWidth;
	this.getHeight = pnhGetImageHeight;
	this.scaleBy = pnhScaleImageBy;
	this.setSize = pnhSetImageSize;
	this.setWidth = pnhSetImageWidth;
	this.setHeight = pnhSetImageHeight;
	this.changeSizeBy = pnhChangeSizeBy;
}


pnhScalableImageObject.prototype = new pnhLayerObject;
pnhScalableImageObject.prototype.superClass = pnhLayerObject.prototype.constructor;