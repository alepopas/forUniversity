var aLog = console.log;

function funcPhrase() {
    var aArray = ["Холод", "осени", "с","Лизой","заменим","весной!"];
    var aPhrase = "";
    for (var i = 0; i < aArray.length; i++) {
        aPhrase += aArray[i] + " ";
    }
    aLog(aPhrase);
}

funcPhrase();