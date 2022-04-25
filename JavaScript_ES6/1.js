const func = (a = 90000400001240, b = 24) => {
    if (b != 0 ) {
        if (a % 10 === 0) {
            b--;
            return func(a/10,b);
        }
        else {
            b--;
            return func(--a,b);
        }
    }
    else
        return console.log("Новое a = " + a);
}

func();