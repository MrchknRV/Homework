// Task 1
let password = 'пароль'
let user_password = String(prompt("Введите пароль:"))
if (password !== user_password.toLocaleLowerCase()){
    alert("Пароль введен неправильно")
} else {
    alert("Пароль введен верно")
}
// Task 2
let c = 2;
if (c > 0 && c < 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}
// Task 3
let d = 20;
let e = 1;
if (d > 100 || e > 100) {
    console.log("Верно");
} else {
    console.log("Неверно");
}
// Task 4
let a = '2';
let b = '3';
// Код выше изменять менять нельзя. Чтобы решить задачу исправьте код ниже:
alert(Number(a) + Number(b));