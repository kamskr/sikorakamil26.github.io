//defines the variables
let connectButton = document.getElementById('connect');
let disconnectButton = document.getElementById('disconnect');
let terminalContainer = document.getElementById('terminal');
let sendForm = document.getElementById('send-form');
let inputField = document.getElementById('input');

//connect to the device on Connect button click
connectButton.addEventListener('click',function(){
    connect();
});

disconnectButton.addEventListener('click',function(){
    disconnect();
});

sendForm.addEventListener('submit',function(event){
    event.preventDefault(); // Prevent from sending
    send(inputField.value); // Sned text field contents
    inputField.value = ''; // zero text field
    inputField.focus(); // Focus on text field
})


// Selected device object cache
let deviceCache = null;

// Launch Bluetooth device chooser and connect to the selected
function connect(){
    return (deviceCache ? Promise.resolve(deviceCache) :  
        requestBluetoothDevice()).
        then(device => connectDeviceAndCacheCharacteristic(device)).
        then(characteristic => startNotifications(characteristic)).
        catch(error => log(error));
}

function requestBluetoothDevice(){
    log('Requesting bluetooth device');

    return navigator.bluetooth.requestBluetoothDevice({
        filters: [{services: [0xFFE0]}],
    }).
        then(device => {
            log('"'+device.name + '"bluetooth device selected');
            deviceCache = device;
            return deviceCache;
        });
}

// Characteristic object cache
let characteristicCache = null;

//Connect to the device specified, get service and characteristic
function connectDeviceAndCacheCharacteristic(device){
    if(device.gatt.connected && characteristicCache){
        return Promise.resolve(characteristicCache);
    }

    log('Connecting to GATT server');

    return device.gatt.connect().
        then(server => {
            log('GATT server connected, getting service...');

            return server.getPrimaryService(0xFFE0);
        }).
            then(service => {
                log('Service found, getting characteristic...');

                return service.getCharacteristic(0XFFE1);
            }).
                then(characteristic => {
                    log('Characteristic found');
                    characteristicCache = characteristic;

                    return characteristicCache;
                });
}

    //enable the characteristic changes notification
function startNotifications(characteristic){
    log('Starting notifications...');

    return characteristic.startNotifications().
        then(() => {
            log('Notifications started');
        });
}

//Output to terminal
function log(data,type = ''){
    terminalContainer.insertAdjacentHTML('beforeend', 
    '<div' + (type ? ' class="' + type + '"' : '') + '>' + data + '</div>'); 
}

//Disconnect from the connected device
function disconnect(){
    //
}

function send(data){
    //
}