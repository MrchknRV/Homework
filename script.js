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

// Task 5
let month_number = 12;
switch (month_number) {
    case 1:
        console.log('зима');
        break;
    case 2:
        console.log('зима');
        break;
    case 3:
        console.log('весна');
        break;
    case 4:
        console.log('весна');
        break;
    case 5:
        console.log('весна');
        break;
    case 6:
        console.log('лето');
        break;
    case 7:
        console.log('лето');
        break;
    case 8:
        console.log('лето');
        break;
    case 9:
        console.log('осень');
        break;
    case 10:
        console.log('осень');
        break;
    case 11:
        console.log('осень');
        break;
    case 12:
        console.log('зима');
        break;
    
    default:
        console.log("Нет такого");
            
}

// // Additional Task 1
// let number = prompt("Пожалуйста, введите любое число");
// if (Number(number) % 2 == 0) {
//     alert("Число четное")
// } else {
//     alert("Число нечетное")
// }

// // Additional Task 2
// let clientOS = 0;
// if (clientOS === 0) {
//     alert("Установите версию приложения для iOS по ссылке")
// } else {
//     alert("Установите версию приложения для Android по ссылке")
// }

// // Additional Task 3
// let client_OS
// let clientDeviceYear = 2015;
// if (client_OS === 0 && clientDeviceYear < 2015) {
//     alert("Установите облегченную версию приложения для iOS по ссылке")
// } else if (client_OS === 1 && clientDeviceYear < 2015) {
//     alert("Установите облегченную версию приложения для Android по ссылке")
// } else if (client_OS === 0 && clientDeviceYear >= 2015) {
//     alert("Установите версию приложения для iOS по ссылке")
// }else {
//     alert("Установите версию приложения для Android по ссылке")
// }