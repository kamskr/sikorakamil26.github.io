//defines the variables
let connectButton = document.getElementById('connect');
let disconnectButton = document.getElementById('disconnect');
let terminalContainer = document.getElementById('terminal');
let sendForm = document.getElementById('send-form');
let inputField = document.getElementById('input');

//connect to the device on Connect button click
connectButton.addEventListener('click',function(){
    onStartButtonClick();
});

function onStartButtonClick() {
    let serviceUuid = 0xFFE0;
    if (serviceUuid.startsWith('0x')) {
      serviceUuid = parseInt(serviceUuid);
    }
  
    let characteristicUuid = 0xFFE1;
    if (characteristicUuid.startsWith('0x')) {
      characteristicUuid = parseInt(characteristicUuid);
    }
  
    log('Requesting Bluetooth Device...');
    navigator.bluetooth.requestDevice({filters: [{services: [serviceUuid]}]})
    .then(device => {
      log('Connecting to GATT Server...');
      return device.gatt.connect();
    })
    .then(server => {
      log('Getting Service...');
      return server.getPrimaryService(serviceUuid);
    })
    .then(service => {
      log('Getting Characteristic...');
      return service.getCharacteristic(characteristicUuid);
    })
    .then(characteristic => {
      myCharacteristic = characteristic;
      return myCharacteristic.startNotifications().then(_ => {
        log('> Notifications started');
        myCharacteristic.addEventListener('characteristicvaluechanged',
            handleNotifications);
      });
    })
    .catch(error => {
      log('Argh! ' + error);
    });
  }
// disconnectButton.addEventListener('click',function(){
//     disconnect();
// });

// sendForm.addEventListener('submit',function(event){
//     event.preventDefault(); // Prevent from sending
//     send(inputField.value); // Sned text field contents
//     inputField.value = ''; // zero text field
//     inputField.focus(); // Focus on text field
// })


// // Selected device object cache
// let deviceCache = null;

// // Launch Bluetooth device chooser and connect to the selected
// function connect(){
//     return (deviceCache ? Promise.resolve(deviceCache) :  
//         requestBluetoothDevice()).
//         then(device => connectDeviceAndCacheCharacteristic(device)).
//         then(characteristic => startNotifications(characteristic)).
//         catch(error => log(error));
// }

// function requestBluetoothDevice(){
//     log('Requesting bluetooth device');

//     return navigator.bluetooth.requestBluetoothDevice({
//         filters: [{services: [0xFFE0]}],
//     }).
//         then(device => {
//             log('"'+device.name + '"bluetooth device selected');
//             deviceCache = device;

//             deviceCache.addEventListener('gattserverdisconnected',
//             handleDisconnection);

//             return deviceCache;
//         });
// }

// function handleDisconnection(event){
//     let device = event.target;

//     log('"' + device.name + '" bluetooth device disconnected, trying to reconnect...');

//     connectDeviceAndCacheCharacteristic(device).
//         then(characteristic => startNotifications(characteristic)).
//         catch(error => log(error));
// }

// // Characteristic object cache
// let characteristicCache = null;

// //Connect to the device specified, get service and characteristic
// function connectDeviceAndCacheCharacteristic(device){
//     if(device.gatt.connected && characteristicCache){
//         return Promise.resolve(characteristicCache);
//     }

//     log('Connecting to GATT server');

//     return device.gatt.connect().
//         then(server => {
//             log('GATT server connected, getting service...');

//             return server.getPrimaryService(0xFFE0);
//         }).
//             then(service => {
//                 log('Service found, getting characteristic...');

//                 return service.getCharacteristic(0XFFE1);
//             }).
//                 then(characteristic => {
//                     log('Characteristic found');
//                     characteristicCache = characteristic;

//                     return characteristicCache;
//                 });
// }

//     //enable the characteristic changes notification
// function startNotifications(characteristic){
//     log('Starting notifications...');

//     return characteristic.startNotifications().
//         then(() => {
//             log('Notifications started');
//         });
// }

// //Output to terminal
// function log(data,type = ''){
//     terminalContainer.insertAdjacentHTML('beforeend', 
//     '<div' + (type ? ' class="' + type + '"' : '') + '>' + data + '</div>'); 
// }

// //Disconnect from the connected device
// function disconnect(){
//     if(deviceCache){
//         log('Disconneting from "' + deviceCache.name + '" bluetooth device...');
//         deviceCache.removeEventListener('gattserverdisconnected', handleDisconnection);

//         if(deviceCache.gatt.connected){
//             deviceCache.gatt.disconnect();
//             log('"' + deviceCache.name + '" bluetooth device disconnected');
//         }else{
//             log('"' + deviceCache.name + 
//             '" bluetooth device is already disconnected');
//         }
//     }
//     characteristicCache=null;
//     deviceCache = null;  
// }

// function send(data){
//     //
// }