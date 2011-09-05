/**
 * Fayer.js v1.0.4 - jQuery version
 * 
 * Author : Sandeep Jain
 * Author Webiste: http://www.jsvrocks.com/
 * GitHub: https://github.com/sandeepjain/fayer
 * 
 * Copyright 2011, Sandeep Jain
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function($, undefined) {
	var tracker = {
			page : '',
			isInitialized : false
		},
		// Minification variable
		funcTypeStr = 'function',
		objTypeStr = 'object';
		
	// helper functions
	
	// reliable check of variable type
	function isTypeOf (type, obj) {
		return $.type(obj) === type;
	}
	
	function _fayer () {
		var self = this;
		self.init = function (attrib) {
			return self.detectPage(attrib);
		};
		self.detectPage  = function (attrib) {
			var queryFunc = isTypeOf(funcTypeStr, attrib) ?
				attrib :
				function () {
					// If no attribute specified then default to attribute 'id'
					attrib = isTypeOf('string', attrib) && attrib !== '' ? attrib : 'id';
					return $('body').attr(attrib);
				};
			tracker.page = queryFunc() || '';
			tracker.isInitialized = true;
			return self;
		};
		self.on  = function (page, func) {
			if (tracker.isInitialized === false) {
				self.init();
				tracker.isInitialized = true;
			}
			if (isTypeOf(funcTypeStr, page)) {
				// Check if only function is passed as parameter
				page();
			} else if (isTypeOf(objTypeStr, page)) {
				// if argument is an object
				for (var fn in page) {
					page.hasOwnProperty(fn) && self.on(fn, page[fn]);
				}
			} else if (self.isIn(page) && isTypeOf(funcTypeStr, func)) {
				func();
			}
			return self;
		};
		self.notOn  = function (page, func) {
			// if argument is an object
			if (isTypeOf(objTypeStr, page)) {
				for (var fn in page) {
					page.hasOwnProperty(fn) && self.notOn(fn, page[fn]);
				}
			} else {
				!self.isIn(page) && self.on(func);
			}
			return self;
		};
		self.is  = function (page) {
			return (page === tracker.page);
		};
		self.isIn  = function (page) {
			return isTypeOf('regexp', page) 
				? page.test(tracker.page)
				: self.is(page) 
					? true
					: isTypeOf('array', page) && $.inArray(tracker.page, page) !== -1;
		};
	};
	
	// Expose as jquery plugin
	jQuery.fayer = new _fayer;
})(jQuery);