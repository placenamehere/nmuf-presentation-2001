// the scripts in this file are intented to clean up any browser specific nasties... like IE's focus ring around an image after it's clicked
function pnhBrowserCleanup() {
	// remove MSIE's horrible dotted line on link focus
	if (document.all) {
		for (i=0;i<document.links.length;i++) {
 			document.links[i].onfocus = document.links[i].blur;
		}
	}
}