const points = [
    [0, 0], [0, 1],
    [0, -1], [1, 0],
    [-1, 0], [4, 5],
    [4, 4], [3, 4],
    [4, 3], [3, 3],
    [11, 2], [5, 5],
    [6, 9], [3, 6],
    [1, 4], [9, 1],
    [7, 10], [4, -1],
    [-3, 0], [-5, 2],
    [0, 2], [0, 2],
    [3, 2], [-2, 0],
    [4, 5], [4, 4],
    [4, 6], [5, 3],
    [3, -1], [3, 0],
    [6, 9], [2, 6],
    [3, -7], [6, 7],
    [7, 10], [4, -1],
    [-5, 2], [-1, 2]
];
//счетчик для центральных точек
let count = 0;

//для каждой i-той точки проверяется, является ли j-ая точка ее соседом справа, слева, сверху или снизу, возвращается массив соседей
const check = (neigh, i, j) => {
    if (j >= 0) {
        if (points[i][0] > points[j][0] && points[i][1] === points[j][1]) ++neigh[0];
        if (points[i][0] < points[j][0] && points[i][1] === points[j][1]) ++neigh[1];
        if (points[i][1] > points[j][1] && points[i][0] === points[j][0]) ++neigh[2];
        if (points[i][1] < points[j][1] && points[i][0] === points[j][0]) ++neigh[3];
        return check(neigh, i, --j);
    }
    else
        return neigh;
}

//основная функция
const func = (points, i = points.length-1, j = points.length-1 ) => {
    if (i >= 0) {
        let neigh = [0,0,0,0];
        check(neigh, i, j);
        if (neigh[0]*neigh[1]*neigh[2]*neigh[3] != 0) count++;
        return func(points, --i, j);
    }
    else
        return console.log("Количество центральных точек = " + count);
}

func(points);