(function (win, doc, undefined) {
	var downloadMenu = doc.getElementById('downloadMenu'),
		downloadSubmenu = doc.getElementById('downloadSubMenu');

	if(downloadMenu.addEventListener) {
		downloadMenu.addEventListener( "click", handleMenuClick);
	} else if (downloadMenu.attachEvent) {
		downloadMenu.attachEvent('onclick', handleMenuClick);
	} else {
		downloadMenu.onclick = handleMenuClick;
	}
	
	function handleMenuClick(event) {
		hideShowSubMenu(downloadSubmenu);
		event.preventDefault();
		return false;
	}
	
	function hideShowSubMenu(ele) {
		var status = getStyle(ele,'display');
		if (status == '' || status == 'block') {
			ele.style.display = 'none';
		} else {
			ele.style.display = 'block';
		}
	}
	
	function getStyle(ele,styleProp)
	{
		return (ele.currentStyle)
			? x.currentStyle[styleProp]
			: window.getComputedStyle
				? document.defaultView.getComputedStyle(ele,null).getPropertyValue(styleProp)
				: undefined;
	}

})(window, document);