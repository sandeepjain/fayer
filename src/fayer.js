/**
 * Fayer.js v0.1
 * 
 * Author : Sandeep Jain
 * Author Webiste: http://www.jsvrocks.com/
 *
 * Copyright 2011, Sandeep Jain
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */
(function( window, undefined ) {
	var location = window.location,
		document = window.document,
		tracker = {
			page : '',
			isInitialized : false
		},
		hlper = {
			inArray : function (elem, array) {
				if ( array.indexOf ) {
					return array.indexOf( elem );
				}

				for ( var i = 0, length = array.length; i < length; i++ ) {
					if ( array[ i ] === elem ) {
						return i;
					}
				}

				return -1;
			},
            isArray : function (elem) {
                return elem.constructor == (new Array).constructor;
            }
		};
	
	function _fayer () {
		var self = this;
		self.init = function (attrib) {
			return self.detectPage(attrib);
		};
		self.detectPage  = function (attrib) {
			var queryFunc = (attrib !== undefined && typeof attrib === "function") ?
				attrib :
				function () {
					// If no attribute specified then default to attribute id
					attrib = (typeof attrib === "string") && attrib !== '' ? attrib : 'id';
					var val = document.body.getAttribute(attrib);
					return val === null ?  undefined : val;
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
			// Check if only function is passed as parameter
			if (typeof page === "function") {
				page();
			}
            // if argument is an object
            if (typeof page === "object" && !hlper.isArray(page)) {
                for (var fn in page) {
                    if ( page.hasOwnProperty(fn) ) {
                        self.on( fn, page[fn] );
                    }
                }
                return self;
            }
			if (self.isIn(page) && typeof func === "function") {
				func();
			}
			return self;
		};
		self.notOn  = function (page, func) {
            // if argument is an object
            if (typeof page === "object" && !hlper.isArray(page)) {
                for (var fn in page) {
                    if ( page.hasOwnProperty(fn) ) {
                        self.notOn( fn, page[fn] );
                    }
                }
                return self;
            }
			!self.isIn(page) && self.on(func);
			return self;
		};
		self.is  = function (page) {
			return (page === tracker.page);
		};
		self.isIn  = function (page) {
			return self.is(page) ?
				true :
				hlper.inArray(tracker.page, page) !== -1;
		};
	};
	
	// Expose to global scope
	window.fayer = new _fayer;
	
})(window);
