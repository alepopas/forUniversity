const str = "ГозулиагртГтГроаугитглтГроауГрулзиораороуизлтГроуулГиатзлилит"

const Groulit = [
    ["Г", 0],
    ["р", 0],
    ["о", 0],
    ["у", 0],
    ["л", 0],
    ["и", 0],
    ["т", 0]
]

const check = (str, i, j) => {
    if (j < Groulit.length) {
        if (str.charAt(i) === Groulit[j][0])
            Groulit[j][1]++;
        return check(str, i, ++j);
    }
}

let min = str.length;

const checkGroulit = (str, k) => {
    if (k < Groulit.length) {
        if (Groulit[k][1] < min)
            min = Groulit[k][1];
        return checkGroulit(str, ++k)
    }
    else
        return min;
}

const func = (str, i,j) => {
    if(i < str.length) {
        check(str,i,0);
        func(str, ++i, 0);
    }
    else {
        console.log('Количество пойманных Гроулитов = ' + checkGroulit(str,0));
    }
}

func(str,0,0);