const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
    let sum = 0;

    for (let i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }

    let avg = sum / numberList.length;
    return avg;
}

console.log("El promedio es:", average(numbers));