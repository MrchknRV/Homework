// // Task 1
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
// Task 6
const friday = 2;
for (let day = friday; day <= 31; day += 7 ){
    console.log(`Сегодня пятница ${day}-e число. Необходимо подготовить еженедельный отчет`);
}