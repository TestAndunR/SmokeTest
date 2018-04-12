let AWS = require('aws-sdk');
exports.handler = function(event, context, callback) {
	let msg = event.message;
	console.log(msg);
	callback(null,'Successfully executed');
}