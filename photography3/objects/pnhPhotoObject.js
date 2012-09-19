/* Since I will not be handling dynamic resizing like I first thought I might this
	will drastically decrease the complexity here. I don't have to juggle 3 different
	versions of each photo anymore. I'm just gonna stick with a middle-to-large size
	and scale down more often then not.*/

function pnhGetPhotoSrc() {
	/* will return the photo's source */
	return this.photo.getSrc();
}

function pnhGetPhotoPreviewSrc() {
	/* just a quicky */
	return this.previewImage.getSrc();
}

function pnhLoadPhoto() {
	/* Loads the photo's source. */
	this.photo.load();
}

function pnhGetPhotoFormat() {
	/* Loads the photo's source. */
	return this.format;
}

function pnhPhotoObject(sTitle, sFormat, sPreviewURL, sImageURL) {
	/* This object is meant to represent what it means to be a photograph
		in the context of this, my third photo interface experiment. */
	
	this.title = sTitle; // The title of the photograph
	this.format = sFormat; // 'landscape' || 'portrait'
	this.previewImage = new pnhExtendedImageObject(sPreviewURL);

	
	this.photo = new pnhExtendedImageObject(sImageURL);
	this.load = pnhLoadPhoto;
	this.getSrc = pnhGetPhotoSrc;
	this.getPreviewSrc = pnhGetPhotoPreviewSrc;
	this.getFormat = pnhGetPhotoFormat;

	// Load the preview slice now
	this.previewImage.load();

	// for the time being, also load the image on creation
	// with 20+ images going on the page, this may turn out to be done on the fly
	// this.load();
}