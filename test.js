//http://freegeoip.net/?q=73.93.154.105
var BASE_URL = 'freegeoip.net/json/';

function userIP () {
	$.getJSON(BASE_URL, function(object) {
		console.log(object);
	});
};

userIP();