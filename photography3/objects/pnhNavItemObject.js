function pnhSetIconImage(sImage) {
	this.iconImage.src = sImage;
}

function pnhNavItemMouseOver() {
	/* performs all the mouse over duties for the widget */
	if (this.photo) {
		// Step 1: Show preview Image
		this.previewImage.src = this.photo.getPreviewSrc();
		this.photo.load();
		// Step 2: highlight the nav item
		this.setIconImage(this.highlightedNavItemImage);
	} else {
		this.setIconImage(this.highlightedClearItemImage);
	}
	
}

function pnhNavItemMouseOut() {
	/* performs all the mouse out duties for the widget */
	if (this.photo) {
		// Step 1: Hide Preview Image
		this.previewImage.src = "basicimages/spacer.gif";
		// Step 2: revert the nav item
		if (this.visited) {
			this.setIconImage(this.visitedNavItemImage);
		} else {
			this.setIconImage(this.unvisitedNavItemImage);
		}
	} else {
		this.setIconImage(this.clearItemImage);
	}
}

function pnhNavItemClick() {
	/* performs all the mouse click duties for the widget */
	if (this.photo) {	
		// Step 1: Show Full Image
		this.backgroundOffLayer.setVisibility("visible");
		//this.backgroundImage.src = "basicimages/background_dark.jpg";
		if (this.photo.getFormat() == 'portrait') {
			this.landscapeFullImage.src = "basicimages/spacer.gif";
			this.portraitFullImage.src = this.photo.getSrc();
			this.lmatte.setVisibility("hidden");
			this.pmatte.setVisibility("visible");
		} else {
			this.landscapeFullImage.src = this.photo.getSrc();
			this.portraitFullImage.src = "basicimages/spacer.gif";
			this.lmatte.setVisibility("visible");
			this.pmatte.setVisibility("hidden");
		}
		
		// Step 2: change image to the unviewed one
		this.visited = true;
		// this.iconImage.src = viewedIcon; // Question: Let mouseover handle this?
	} else {
		// special case of a clear widget
		this.landscapeFullImage.src = "basicimages/spacer.gif";
		this.portraitFullImage.src = "basicimages/spacer.gif";
		this.lmatte.setVisibility("hidden");
		this.pmatte.setVisibility("hidden");
		this.backgroundOffLayer.setVisibility("hidden");
		// this.backgroundImage.src = "basicimages/background.jpg";
	}
}

function pnhNavItemObject(sWidget, sWidgetLayer, pnhPhoto) {
	this.unvisitedNavItemImage = "basicimages/nav_button.gif";
	this.highlightedNavItemImage = "basicimages/nav_button2.gif";
	this.visitedNavItemImage = "basicimages/nav_button3.gif";
	this.clearItemImage = "basicimages/nav_clear_button.gif";
	this.highlightedClearItemImage = "basicimages/nav_clear_over.gif";
	this.visited = false;



	/* This is the object that will handle all the states of the navigation elements */
	if (document.layers) { 
		/* deal with Netscape 4.x document nesting - currently only handles one level of nesting.
			this could easily be made more robust by creating a function to search the tree
			for the image object by name. Or coming up with a notation to define the nesting and
			extracting the information from that */
		this.iconImage = document.layers[sWidgetLayer].document.images[sWidget]; // this is the image of the navigation element
		this.previewImage = document.layers['previewarea'].document.images['preview']; // this is the image of the preview area
		this.landscapeFullImage = document.layers['landscape'].document.images['landscape_img']; // this is the image of the full size image
		this.portraitFullImage = document.layers['portrait'].document.images['portrait_img']; // this is the image of the full size image
	} else {
		this.iconImage = document.images[sWidget]; // this is the image of the navigation element
		this.previewImage = document.images['preview']; // this is the image of the preview area
		this.landscapeFullImage = document.images['landscape_img']; // this is the image of the full size image
		this.portraitFullImage = document.images['portrait_img']; // this is the image of the full size image
	}
	
	this.backgroundOffLayer = new pnhLayerObject("bkgphotodark");
	this.lmatte = new pnhLayerObject("landscapematte");
	this.pmatte = new pnhLayerObject("portraitmatte");
	
	this.photo = pnhPhoto;

	this.setIconImage = pnhSetIconImage;
	this.handleMouseOver = pnhNavItemMouseOver;
	this.handleMouseOut = pnhNavItemMouseOut;
	this.handleClick = pnhNavItemClick;
}