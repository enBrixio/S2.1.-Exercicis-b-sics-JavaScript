const array = [ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ];

const result = array.filter((num) => num >= 10).map((num) => num * 2).reduce((num1, num2) => num1 + num2, 0);

console.log(result); // 130