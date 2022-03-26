var aLog = console.log;

var dress = {
    dressColor: "red",
    dressSize: 42,
    firstMethod: function (count) {
        dress.dressSize = count;
    },
    secondMethod: function () {
        aLog("Цвет: " + dress.dressColor);
        aLog("Размер: " + dress.dressSize);
        aLog("Наличие в магазине: " + dress.dressStoreAvailability);
        aLog("Брэнд: " + dress.dressBrand);
        aLog("Длина: " + dress.dressLength);
    },
    get thirdMethod(){
        return this.dressStoreAvailability;
    }
};

Object.defineProperty(dress, 'dressStoreAvailability', {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false
});

Object.defineProperty(dress, 'dressBrand', {
    value: 'Chanel',
    writable: false,
    enumerable: false,
    configurable: false
});

Object.defineProperty(dress, 'dressLength', {
    value: ["Mini","Midi","Maxi"],
    writable: false,
    enumerable: false,
    configurable: false
});

dress.firstMethod(44);
dress.secondMethod();
aLog(dress.thirdMethod);