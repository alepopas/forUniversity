var aLog = console.log;

function aPhrase() {
    var aArray = ["Холод","осени","с","Лизой","заменим","весной!"];
    var aResult = "";
    for (var i = 0; i < aArray.length; i++) {
        aResult += aArray[i] + " ";
    }
    aLog(aResult);
}

aPhrase();