var aNumber = 5;
var aString = "11";
var aBoolean = false;
var aNull = null;
var aUndefined;
var aArray = new Array(1, 2, 3, 4, 5);
var aFunction = new Function('a,b', 'return a + b');
var aRegExp = new RegExp('\\w', 'g');

var alog = console.log;

function funcTypeof (a) {
    if (typeof(a) === "number") {
        log("Это число!");
    }
    if (typeof(a) === "string") {
        console.log("Это строка!");
    }
    if (typeof(a) === "boolean") {
        console.log("Это логическая переменная!");
    }
    if (typeof(a) === "object") {
        console.log("Это объект!");
    }
    if (typeof(a) === "undefined") {
        console.log("Это отсутствие примитива!");
    }
    if (typeof(a) === "function") {
        console.log("Это функция!");
    }
    if (typeof(a) === "Array") {
        console.log("Это массив!");
    }
    if (typeof(a) === "Regular Exp") {
        console.log("Это регулярное выражение!");
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