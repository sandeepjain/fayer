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
		console.log('click');
		event.preventDefault();
		return false;
	}
	
	function hideShowSubMenu(ele) {
		var status = getStyle(ele,'display');
		console.log('click ' + status);
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