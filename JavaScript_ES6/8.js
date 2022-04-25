const messanger = [
    ["+Миша"], ["+Олег"], ["+Антон"],
    ["+Таня"], ["-Миша"],
    ["Таня:Как дела?"],
    ["Олег:Все хорошо!"],
    ["-Таня"], ["+Толя"],
    ["Толя:Я что-то пропустил?"]
];

//Мы считаем трафик после каждого сообщения, надеюсь, ничего
const traffic = (peopleOnline, message) =>{
    console.log("Трафик: " + (message.length+2) * peopleOnline);
    //Зачем в примере считается с кавычками? В общем, поэтому там +2
}
const func = (message, i, count) =>{
    if(i < message.length) {
        if (message[i][0].slice(0,1) === "+")
            count++
        else if (message[i][0].slice(0,1) === "-")
            count--
        else
            traffic(count, message[i][0]);
        func(message, ++i, count);
    }
}

func(messanger,0,0);