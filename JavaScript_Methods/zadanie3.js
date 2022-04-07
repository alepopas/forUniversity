var aLog = console.log;

var paragraph = "Однажды я шёл перед вечером мимо базарной площади в лесничество." +
    "Оно помещалось на окраине города над рекой." +
    "Среди улицы мальчишки играли в футбол." +
    "Громкоговоритель висел на телеграфном столбе." +
    "Он неожиданно защелкал."

function aStringToMassive(paragraph) {
    var aSplitSentences = paragraph.split(".");
    var aSplitWords = new Array();
    for (var i = 0; i < aSplitSentences.length - 1; i++ ) {
        aSplitWords[i] = aSplitSentences[i].split(" ");
    }
    aText = {
        sentences: [
            {length: aSplitWords[0].length, words: aSplitWords[0].toString() + ',.'}
        ],
        addNew: function(i) {
            var aNewLength = aSplitWords[i].length;
            var aNewWords  = aSplitWords[i].toString() + ',.';
            var aNewElement = {length: aNewLength, words: aNewWords}
            this.sentences = this.sentences.concat(aNewElement);
        }
    }
    for (var i = 1; i < aSplitSentences.length - 1; i++ ) {
        aText.addNew(i)
    }
    aLog(aText.sentences);
}

aStringToMassive(paragraph);