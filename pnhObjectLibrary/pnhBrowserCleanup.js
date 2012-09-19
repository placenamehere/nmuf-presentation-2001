// pnhBrowserCleanup.js
// This is a cleanup function from my personal library, not written for distribution purposes
// If you'd like to use this code, please let me know, but be warned,
// use of these objects does not entitle you to support from me  - chris (placenamehere.com)
// library info at http://placenamehere.com/pnhObjectLibrary/

// the scripts in this file are intented to clean up any browser specific nasties... like IE's focus ring around an image after it's clicked
function pnhBrowserCleanup() {
	// remove MSIE's horrible dotted line on link focus
	if (document.all) {
		for (i=0;i<document.links.length;i++) {
 			document.links[i].onfocus = document.links[i].blur;
		}
	}
}