const array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2];

let result = new Array(array.length);

const func = (result, array, k, n, i) =>{
    if (i < array.length) {
        if (array[i] % 2 !== 0) {
            result[2*k] = array[i];
            k++;
            func(result, array, k, n, ++i);
        }
        else {
            result[2*n+1] = array[i];
            n++;
            func(result, array, k, n, ++i);
        }
    }
    else {
        if ((n === k) || ((n + 1) === k)) // тк должен начинаться с нечет, количество нечет (k) равно четн (n) или больше ровно на 1
            return console.log("Отсортированный массив: " + result);
        else
            return console.log("Этот массив нельзя отсортировать. ");
    }
}

func(result, array, 0, 0, 0);
