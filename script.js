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
// Task 4
let obj = {
    "Коля" : '200',
    "Вася" : '300',
    "Петя" : '400',
}
for (let key in obj){
    console.log(`${key} - зарплата ${obj[key]} долларов`);
}