var HID = require('node-hid');
var connectedHidDevices = getHID();
var request = require('request');
var success = false;


function getHID(){
    devices = HID.devices();
    console.log('devices:',  devices);
    return devices
}

function getBarcodeScanner(success){

while (!success){
	// catch the uncaught errors in this synchronous code block
	try {
	    // the synchronous code that we want to catch thrown errors on
	    var connectedHidDevices = getHID();
	    if (!success && connectedHidDevices[0].vendorId==2652) {
	        var KeyboardLines = require('node-hid-stream').KeyboardLines;
	        var lines = new KeyboardLines({ vendorId: connectedHidDevices[0].vendorId, productId: connectedHidDevices[0].productId});
	        var scantime = 0;
	        lines.on('data', (data) => {
	            scantime = scantime + 1;
	            setBarcodeData(data,scantime);

	        });
	        lines.on('error', (error) => {
        		console.log('scanner error', error); // easily consumed data format!
        		success = false;
        		status = 'OFF'
        		setTimeout(function() {console.log('waiting for connection . . . ');}, 3000);
        		getBarcodeScanner(success);
         	});
	        status =  'ON';
	        console.log('STATUS BARCODE:',status);
	        success = true;
	        return success;
	        
	    }
	    else{
	    	
	    	status =  'OFF';
	        console.log('STATUS BARCODE:',status);
	    	setTimeout(function() {
			    //console.log('waiting for connection . . . ');
			}, 3000);
			success = false;
			//var connectedHidDevices = getHID();
	    	
	    }

	} catch (err) {
	    status =  'OFF';
	    success =  false;
	    setTimeout(function() {console.log('waiting for connection . . . ');}, 3000);
	   	getBarcodeScanner(success);
	    console.log('there was an error:',err);
	}

}
};



/* function to set data from barcode scanner and send to the database, counting the scannig time. */
function setBarcodeData(data, scantime){
    console.log(scantime);
    console.log(data);
    // Set the headers
	var headers = {
	    'User-Agent':       'Super Agent/0.0.1',
	    'Content-Type':     'application/x-www-form-urlencoded'
	}

	// Configure the request
	var options = {
	    url: 'http://localhost:3000/addean',
	    method: 'POST',
	    headers: headers,
	    form: {'eancode': data}

	}
	console.log(options);
	// Start the request
	request(options, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        // Print out the response body
	        console.log(body);
	    }
	});



}



/* main */
function main() {
	getBarcodeScanner(success);
}

main();

//var result = getBarcodeScanner();


/*


try
if !connected && device is in devices array then 
	connct to device
	add listener
	state = connected
else
	wait for a bit
except
	state = not connected


*/
