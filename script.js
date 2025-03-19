// // Task 1
// let a = 10;
// alert(a);
// a = 20;
// alert(a);

// // Task 2
// let years = 2007;
// alert(years);

// // Task 3
// let creatorJS = "Брендан Эйх";
// alert(creatorJS);

// // Task 4
// let num1 = 10;
// let num2 = 2;
// let summ, differnce, multiplication, division;
// summ = num1 + num2;
// differnce = num1 - num2;
// multiplication = num1 * num2;
// division = num1 / num2;
// alert(`Сумма ${num1} и ${num2} равна ${summ}, 
// Разность ${num1} и ${num2} равна ${differnce},
// Произведение ${num1} и ${num2} равна ${multiplication},
// Деление ${num1} и ${num2} равна ${division}`);

// // Task 5
// let num = 2;
// let result = num ** 5;
// alert(result)

// // Task 6
// let aa = 9;
// let bb = 2;
// alert(aa % bb);

// // Task 7
// let numb = 1;
// numb += 5;
// numb -= 3;
// numb *= 7;
// numb /= 3;
// numb++;
// numb--;
// alert(num);

// // Task 8
// let age = prompt("Сколько вам лет?")
// alert(age)

// // Task 9
// const user = {
//     nname: 'Rodion',
//     aage: 23,
//     isAdmin: false
// }

// let i = 0;
// while (i < 2){
//     console.log('Привет');
//     i++
// }
// // Task 2
// let i = 1;
// while (i <= 5){
//     console.log(i);
//     i++
// }
// // Task 3
// let i = 7;
// while (i <= 22){
//     console.log(i);
//     i++
// }
// // Task 4
// let obj = {
//     "Коля" : '200',
//     "Вася" : '300',
//     "Петя" : '400',
// }
// for (let key in obj){
//     console.log(`${key} - зарплата ${obj[key]} долларов`);
// }
// // Task 5
// let num = 0;
// let n = 1000;
// while (n > 50){
//     num++
//     n /= 2
// }
// console.log(`Кол-во итерацией ${num}, полученное число ${n}`);
// // Task 6
// const friday = 2;
// for (let day = friday; day <= 31; day += 7 ){
//     console.log(`Сегодня пятница ${day}-e число. Необходимо подготовить еженедельный отчет`);
// }

// // Additional task 1
// let k = 100;
// let count = 0;
// while (k > 0) {
//     count++
//     k -= 7
// }

// console.log(`Получившиеся число ${k}, кол-во  итераций - ${count}`);

// Additional task 3
const describingBookObject = {
    title: "Faust",
    author: "Johann Wolfgang von Goethe",
    "year of publication": 1790,
}
for (let key in describingBookObject) {
    console.log(`${key} - ${describingBookObject[key]}`);
}

