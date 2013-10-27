/*
 *	DZMob  	- quickly install your iOS apps to your device using the CLI
 *	Author 	- Nikhil Nigade (@dezinezync)
 *	LICENSE	- WTH! What License? Just do whatever you want and can with it! Just remember, if your app or device breaks, neither your mom nor I will be responsible.
 */

var __ = require("node-ios-device"),	//Module
	program = require('commander'),		//Module

	pathToApp,							//globalVar
	deviceID;							//globalVar

/* SETTERS */

function setPath(val) {

	pathToApp = val;

	return pathToApp;

}

function setDevice(val) {

	deviceID = val;

	return deviceID;

}

/* VALIDATION CHECKS */

function checkIfPathIsValid(callback) {

	if(pathToApp && pathToApp.length) {

		if(pathToApp.indexOf(".app") >= 0) {

			//Proceed
			callback();
	
		}
		else {
			callback("\nInvalid file type\n\n");
		}

	}
	else {

		callback("\nInvalid file path\n\n");

	}

}

function checkIfDeviceIDisValid(callback) {

	if(deviceID && deviceID.length) {

		if(deviceID.length == 40) {

			//Proceed
			callback();

		}
		else {

			callback("\nInvalid Device ID\n\n");

		}

	}
	else {

		callback("\nPlease specify a device ID\n\n");

	}

}



/* CLI */

program.version('0.1')
	.option("-l, --list", "List connected devices")
	.option("-i, --install", "Install application")
	.option("-a, --app [value]", "Application to install", setPath)
	.option("-d, --device [value]", "Device ID to install app to", setDevice)
	.parse(process.argv);

if(program.list) {

	__.devices(function (err, devices) {
	    
		if(err) {
			console.error(err);
		}

		else {

			var d = devices.map(function(device) {

				return {
					id: device.udid,
					name: device.name,
					type: device.productType
				}

			});

			console.log(d);

		}

	});

}

if(program.app && program.install && program.device) {

	checkIfPathIsValid(function(err) {

		if(err) {
			console.error(err);
			return;
		}

		checkIfDeviceIDisValid(function(err) {


			if(err) {
				console.error(err);
				return;
			}

			__.installApp(deviceID, pathToApp, function(err) {

				console.log(err||"Success");

			});

		});

	});

}
