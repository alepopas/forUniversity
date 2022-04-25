const rocks = [
    ["A", "B", true], ["A", "C", true], ["B", "C", true],
    ["A", "D", true], ["B", "D", true], ["D", "C", true],
    ["E", "D", true], ["E", "B", true], ["A", "E", false],
    ["C", "E", false]
]

const names = ["A", "B", "C", "D", "E"], places = [0,0,0,0,0];
let newNames = new Array;

//для каждого из камушков проверяется сколько раз он оказывался тяжелее других, это количество и будет определять место
const check = (i, j) => {
    if (j >= 0) {
        if ((rocks[j][0] === names[i] && rocks[j][2] === true) || (rocks[j][1] === names[i] && rocks[j][2] === false ))
            places[i]++;
        return check(i, --j);
    }
    else {
        newNames[names.length-1 - places[i]] = names[i];
        return newNames;
    }
}

//основная функция
const func = (rocks, i = names.length-1, j = rocks.length-1) => {
    if (i >= 0) {
        check(i,j);
        return func(rocks, --i, j);
    }
    else
        return console.log("Отсортированные камушки: " + newNames);
}

func(rocks);