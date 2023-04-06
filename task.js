// //Technical Assessment
//
// //Task
//
// //Write a function that finds missing number in array:
//
// Given array of sequent numbers 0,1,2,3...N with missing member
//
// Function finds a first missing number occurrence in the sequence
//
// Note: no need to implement a sorting function (if needed), array.sort() is enough
//
// Example:
//
//     Input: [5,0,1,3,2]
//
// Output: 4
//
// Input: [7, 9,10, 11, 12]
//
// Output: 8
//
// Implement the function and explain your thinking and assumptions as a comment
//
// You can send the solution as an email or link to github (or similar)

const findNumber = (num) => {
    const temp = num.sort((a,b)=>a-b)
    for (let i = 0; i < temp.length; i++) {
        let res;
        if (temp[i]+1 === temp[i+1]-1) {
            res = temp[i] + 1
            return res
        }
    }
}

console.log(findNumber([5, 4, 0, 2, 1])) //3
console.log(findNumber([7, 9, 10, 11, 12])) // 8
console.log(findNumber([100, 101, 103, 104, 105])) //102

///итерируемся по сортированным элементам и проверяем следующее число
// за итерируемым равно следующему элементу - 1 если да возвращаем текущий элемент +1

const findNumber2 = (num) => {
    const max = Math.max(...num)
    const min = Math.min(...num)
    const tempArr = []
    for (let i = min; i <= max; i++) {
        tempArr.push(i)
    }
    const sum1 = num.reduce((acc, val) => acc + val, 0)
    const sum2 = tempArr.reduce((acc, val) => acc + val, 0)

    return sum2-sum1
}

console.log(findNumber2([5, 4, 0, 2, 1])) // 3
console.log(findNumber2([7, 9, 10, 11, 12])) // 8
console.log(findNumber2([100, 101, 103, 104, 105]))  //102

/// Находим Макс мин значение и заполняем массив числами которые находятся в этом промежутке,
// после этого суммируем входной массив и заполненный массив и вычитаем сумму одного из другого и получаем пропущенное число

const findNumber3 = (num) => {
    const max = Math.max(...num)

    const temp = num.sort((a,b)=>a-b)

    for (let i = 0; i < temp.length; i++) {
        if(temp[i] + temp.length-i !== max){
            return temp[i]-1
        }
    }
}
console.log(findNumber3([5, 4, 0, 2, 1])) // 3
console.log(findNumber3([7, 9, 10, 11, 12])) // 8
console.log(findNumber3([100, 101, 103, 104, 105,106,107]))  //102


///длинна массива + минимальное число это будет максимальное
// число и в соответствии с этим мы итерируемся по отсортированному
// массиву и к каждому итерируемому элементу прибавляем длину - индекс
// если оно не равно возвращаем текущий элемент -1



