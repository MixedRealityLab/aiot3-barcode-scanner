
var db = require('./db.js');
var HID = require('node-hid');
var connectedHidDevices = getHID();


function getHID(){
    devices = HID.devices();
    console.log('devices:',  devices);
    return devices
}

function getBarcodeScanner(){
    if (connectedHidDevices[0].vendorId==2652) {
        var KeyboardLines = require('node-hid-stream').KeyboardLines;
        var lines = new KeyboardLines({ vendorId: connectedHidDevices[0].vendorId, productId: connectedHidDevices[0].productId});
        var scantime = 0;
        lines.on('data', (data) => {
            //console.log(data); // replace this with call to method in index.js routes file
            scantime = scantime + 1;
            setBarcodeData(data,scantime);
        });
        lines.on('error', (error) => {
            console.log('scanner error', error); // easily consumed data format!
            return 'barcode scanner OFF';
        });
        return 'barcode scanner ON'; 
    };

    return 'barcode scanner OFF'; 
};


/* function to set data from barcode scanner and send to the database, counting the scannig time. */
function setBarcodeData(data, scantime){
    console.log(scantime);
    var eanCode = data;
    var collection = db.get('eanCollection');
    var eanSelected = eanCode;//'0'+ eanCode;
    //var collectionDocument = connectTesco(eanSelected);  //here code to send data to the database

}

/* export module */
module.exports.barcodeStatus = function(){
    var status = getBarcodeScanner();
    return status;

};

/* main */

console.log(connectedHidDevices[0].vendorId);
//console.log(getBarcodeScanner());




/*

function initHID(){
    
    vid = devices[0].vendorId;   //2652
    pid = devices[0].productId;  //17666  
    KeyboardLines = require('node-hid-stream').KeyboardLines;
    lines = new KeyboardLines({ vendorId: vid, productId: pid });
    if (vid==2652) { 
        return true
    };
    return false
}

function isBarcodeConnected(){
    if(initHID()){
        console.log('barcode scanner ON');
        return 'barcode scanner ON'
        //resumeBarcode();
    }
    console.log('barcode scanner OFF')  
    return 'barcode scanner OFF'  //ready to read and store data 
} 





function resumeBarcode(){
    while(!initBarcode()){
        var devices = HID.devices();
        vid = devices[0].vendorId;   //2652
        pid = devices[0].productId;  //17666  
    }
    console.log('barcode scanner ON');
}


if(vid == 2652){
    console.log('barcode scanner connected')
} else{
    while(vid!=2652){
            devices = HID.devices();
            console.log('barcode scanner desconnected');
            vid = devices[0].vendorId;   //2652
            pid = devices[0].productId;  //17666  
        }
    
    lines.on('error', (error) => {
    console.log('scanner error', error); // easily consumed data format!
        while(vid!=2652){
            devices = HID.devices();
            console.log('barcode scanner desconnected');
            vid = devices[0].vendorId;   //2652
            pid = devices[0].productId;  //17666  
        }
    console.log('barcode connected again');
    });

}


lines.on('error', (error) => {
    console.log('scanner error', error); // easily consumed data format!
        while(vid!=2652){
            devices = HID.devices();
            console.log('barcode scanner desconnected,please user connect it again');
            vid = devices[0].vendorId;   //2652
            pid = devices[0].productId;  //17666  
        }
 });







/*

function barcodeReady(){
    //console.log('devices:',  devices);
    //vid = devices[0].vendorId;   //2652
    //pid = devices[0].productId;  //17666   
    //console.log(vid);

    while (vid!=2652) {
        console.log('please user "turn on" the barcode scanner :)');
        console.log('devices:',  devices);
        vid = devices[0].vendorId;   //2652
        pid = devices[0].productId;  //17666 
    }
    vid = devices[0].vendorId;   //2652
    pid = devices[0].productId;
    
    if (vid == 2652) {
        var KeyboardLines = require('node-hid-stream').KeyboardLines;
        var lines = new KeyboardLines({ vendorId: vid, productId: pid });
        lines.on('data', (data) => {
        //console.log(data); // replace this with call to method in index.js routes file
        scantime = scantime + 1;
        getBarcode(data,scantime);
        });
        lines.on('error', (error) => {
        console.log('scanner error', error); // easily consumed data format!
         });

        // Close scanner when script is exiting is stopped.
        process.on('exit', closeScanner);
    
    } else { 
        console.log('please user "turn on" the barcode scanner :)');
        barcodeReady();
    }

}*/





/* function to close scanner */
/*function closeScanner(lines) {
  scantime = 0;  
  lines.close();
}*/


