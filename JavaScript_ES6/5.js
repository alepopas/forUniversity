const chess = [
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
    ["WBWBWBWB"],
]
const func = (chess, i) => {
    if (i>=0) {
        if (chess[i] == "WBWBWBWB" || chess[i] == "BWBWBWBW") return func(chess,--i);
        else return false
    }
    else return true;
}

if (func(chess, chess.length - 1) === false)
    console.log("Нельзя превратить в правильную шахматную доску.");
else
    console.log("Можно превратить в правильную шахматную доску.");
