'use strict';
// DOM ready function
function domReady(callback, context) {
	var args = Array.prototype.slice.call(arguments, 2);
	if(document.addEventListener) {
		document.addEventListener('DOMContentLoaded', function() {
			callback.apply(context, args);
		});
	} else if(document.attachEvent) {
		document.attachEvent('onreadystatechange', function() {
			callback.apply(context, args);
		});
	}
}
var a =1, b =2, c = 3;
domReady(function(d, e, f) {
	console.log(d, e, f);
}, undefined, a, b, c);

// This can also be used
/*document.addEventListener('readystatechange', function() {
	var state = document.readyState;
	if(state === 'interactive')
		console.log('Ready State Change');
})*/