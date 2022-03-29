var aLog = console.log;

var dress = {
    dressColor: "red",
    dressSize: 42,
    firstMethod: function (count) {
        this.dressSize = count;
    },
    secondMethod: function () {
        aLog("Цвет: " + this.dressColor);
        aLog("Размер: " + this.dressSize);
        aLog("Наличие в магазине: " + this.dressStoreAvailability);
        aLog("Брэнд: " + this.dressBrand);
        aLog("Длина: " + this.dressLength);
    },
    get thirdMethod() {
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