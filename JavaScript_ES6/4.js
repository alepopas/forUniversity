const kids = ["Миша", "Гена", "Маша", "Олег", "Петя", "Вова", "Вера", "Лена", "Света"], k = 30;

let newKids = new Array;

const func = (kids, k, i = kids.length-1) => {
    if (i>=0) {
        newKids = newKids.concat(kids.slice(0,kids.length-1 - i))
        return func(kids,k,--i);
    }
    else
        return console.log("Имя под номером " + k + " в игре: "+ newKids[k-1]);
}

func(kids, k);
