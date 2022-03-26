var aNumber = 5;
var aString = "11";
var aBoolean = false;
var aNull = null;
var aUndefined;
var aArray = new Array(1, 2, 3, 4, 5);
var aFunction = new Function('a,b', 'return a + b');
var aRegExp = new RegExp('\\w', 'g');

var aLog = console.log;

function funcTypeof (a) {
    if (typeof(a) === "number") {
        aLog("Это число!");
    }
    if (typeof(a) === "string") {
        aLog("Это строка!");
    }
    if (typeof(a) === "boolean") {
        aLog("Это логическая переменная!");
    }
    if (typeof(a) === "object") {
        aLog("Это объект!");
    }
    if (typeof(a) === "undefined") {
        aLog("Это отсутствие примитива!");
    }
    if (typeof(a) === "function") {
        aLog("Это функция!");
    }
    if (typeof(a) === "Array") {
        aLog("Это массив!");
    }
    if (typeof(a) === "Regular Exp") {
        aLog("Это регулярное выражение!");
    }
}

funcTypeof(aNumber);
funcTypeof(aString);
funcTypeof(aBoolean);
funcTypeof(aNull);
funcTypeof(aUndefined);
funcTypeof(aFunction);
funcTypeof(aArray);
funcTypeof(aRegExp);