var myCharacteristic;
var id;
var deviceName;

  function connect() {
    let serviceUuid = "0000ffe0-0000-1000-8000-00805f9b34fb";

    let characteristicUuid = "0000ffe1-0000-1000-8000-00805f9b34fb";

    navigator.bluetooth.requestDevice({filters: [{services: [serviceUuid]}]})
    .then(device => {
      log('Connecting...');
      deviceName = device.name;
      return device.gatt.connect();
    })
    .then(server => {
      console.log('Getting Service...');
      return server.getPrimaryService(serviceUuid);
    })
    .then(service => {
      console.log('Getting Characteristic...');
      return service.getCharacteristic(characteristicUuid);
    })
    .then(characteristic => {
      myCharacteristic = characteristic;
      return myCharacteristic.startNotifications().then(_ => {
        console.log('> Notifications started');
        log("Connected to: " + deviceName);
        myCharacteristic.addEventListener('characteristicvaluechanged',
            handleNotifications);
      });
    })
    .catch(error => {
      console.log('Argh! ' + error);
    });
  }

  function disconnect() {
    if (myCharacteristic) {
      myCharacteristic.stopNotifications()
      .then(_ => {
        console.log('> Notifications stopped');
        log("Disconnected")
        myCharacteristic.removeEventListener('characteristicvaluechanged',
            handleNotifications);
      })
      .catch(error => {
        console.log('Argh! ' + error);
      });
    }
  }


  //tu ogariaj kiedy sczyta kod z opaski!
  function handleNotifications(event) {
    let value = event.target.value;
    log(deviceName + "> " + new TextDecoder().decode(value));
    console.log('> Received: ' + new TextDecoder().decode(value));
    id = new TextDecoder().decode(value);
  }


  //to do wysylania to na razie nie potrzebne
  function send() {
    var data = document.getElementById("input").value;
    log("You> " + data);
    myCharacteristic.writeValue(str2ab(data+"\n"))
    document.getElementById("input").value = "";
  }


  function str2ab(str) {
    var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i=0, strLen=str.length; i<strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }

  function log(str) {
    console.log("no szukam diva byku");
    document.getElementById("term").value += str+"\n";

  }