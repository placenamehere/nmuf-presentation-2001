// pnhExtendedImageObject.js
// This is an object from my personal library, not written for distribution purposes
// If you'd like to use this code, please let me know, but be warned,
// use of these objects does not entitle you to support from me  - chris (placenamehere.com)
// library info at http://placenamehere.com/pnhObjectLibrary/

function pnhLoadImage() {
	/* Loads the image src based on the defined location. Should determine how to handle the case of the location not being defined */
	this.image.src = this.href;
}

function pnhClearImage() {
	/* use to clear the contents of the image object so it doesn't hang out in memory. NOTE: I have not
		tested this in any meaningful ways to say that it works or not. */
	this.iImage.src = null;
}

function pnhGetImageSrc() {
	/* use to extract the src of an image object */
	return this.image.src;
}

function pnhExtendedImageObject(sLocation) {
	/* Replaces the standard image object with one that can be
		loaded after it's location is defined */
	
	this.href = sLocation; // the URL of the image src
	this.image = new Image();
	this.load = pnhLoadImage;
	this.unload = pnhClearImage;
	this.getSrc = pnhGetImageSrc;

}