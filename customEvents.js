'use strict';
/*
	Problem Statement: Add custom events
*/

function CustomEvents() {
	var eventObj = {};

	this.addEventListener = function(eventName, callback) {
		eventObj[eventName] = eventObj[eventName] || '';
		if(callback) {
			eventObj[eventName]['callback'].push(callback);
		}
	
	this.raiseEvent = function(eventName) {
		if(eventName && eventObj[eventName]) {
			for(var i in eventObj[eventName]['callback']) {
				eventObj[eventName]['callback'][i]();
			}
		}
	}
}