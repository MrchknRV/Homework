// Функция рандома числа в диапазоне
const randomInt = (min, max) => {
  let currentRandom = min + Math.random() * (max + 1 - min);
  return Math.floor(currentRandom);
};

// Проверка ввода на "число" от пользователя
const isNumber = (num) => isFinite(num);

// Начало программы
const startGame = () => {
  let ans = confirm('Приветсвую тебя, хочешь сыграть в игру "Угадай число"?');
  if (ans) {
    gameRules();
    guessingGame();
  } else {
    ans = confirm("Это не займёт много времени и сил. Давай попробуем!");
    if (ans) {
      gameRules();
      guessingGame();
    } else {
      alert("Тогда приходи, когда будет желание сыграть!");
    }
  }
};

// Правила игры
const gameRules = () => {
  alert("Отлично, давай я ознакомлю тебя с правилами игры");
  alert("Я загадаю число от 1 до 100, а ты будешь его отгадывать.");
  alert("Вводить нужно будет только числа от 1 до 100");
  alert("Если вдргу тебе надоест введи 'Cтоп' и все закончится");
};

//Основная часть программы
const guessingGame = () => {
  let curNumber = randomInt(1, 100);
  alert("И так, я загадал число, как ты думаешь, что за оно?");
  let countUnvalid = 0;
  let count = 0;
  let isFlag = true; // Почему-то через break не хотело останавливаться, пришлось вводить флаг
  while (isFlag) {
    let userAnswer = parseInt(prompt("Вводи число:")); //Запрашиваем ввод числа

    if (userAnswer == "Стоп" || userAnswer == "стоп") {
      alert("Хорошо, приходи, когда будет желание!");
      isFlag = false;
    } else {
      let validUserAnswer = isNumber(userAnswer); // Проверяем валидность ввода

      if (validUserAnswer) {
        count++;

        if (userAnswer == curNumber) {
          alert(`Верно! Ты угадал с ${count} попытки`);
          alert("Скажи честно, ты подглядывал?:)");

          if (confirm("Хочешь сыграть ещё раз?")) {
            guessingGame();
          } else {
            alert("Приходи, когда появится желание сыграть снова :)");
            isFlag = false;
          }
        } else if (userAnswer > curNumber) {
          if (Math.abs(userAnswer - curNumber) < 5) {
            alert("Многовато будет!\nТы близок");
          } else {
            alert("Ох, слишком много! Попробуй еще раз");
          }
        } else if (userAnswer < curNumber) {
          if (Math.abs(userAnswer - curNumber) < 5) {
            alert("Бери выше\nГорячо!");
          } else {
            alert("Эх, это слишком мало!");
          }
        }
      } else {
        alert("Ты ввел не число!");
        countUnvalid++;
      }
    }

    if (countUnvalid === 5) {
      // При неправильных 5 попытках ввода перезапуск
      alert("Давай-ка я напомню тебе правила");
      gameRules();
      guessingGame();
    }
  }
};
// // Task 1
// const maxNumber = (num_1, num_2) => {
//   if (num_1 === num_2) {
//     return num_1;
//   } else if (num_1 > num_2) {
//     return num_1;
//   } else {
//     return num_2;
//   }
// };

// console.log(maxNumber(3, 5));

// //Task 2
// const isEven = (num) => {
//   if (num % 2 == 0) {
//     return "Число четное";
//   } else {
//     return "Число нечетное";
//   }
// };

// console.log(isEven(3));

//Task 3
//1
// const squareNumber = (num) => console.log(num ** 2);
// squareNumber(5);
//2
// const squareNumber = (num) => num ** 2;
// let numberSquare = squareNumber(5);
// console.log(numberSquare);

// //Task 4
// const validAge = () => {
//   let userAge = prompt("Сколько тебе лет?");
//   if (userAge < 0) {
//     alert("Вы ввели неправильное значение");
//   } else if (userAge > 13) {
//     alert("Добро пожаловать!");
//   } else {
//     alert("Привет, друг!");
//   }
// };

// validAge();

//Task5
// const composition = () => {
//   let num_1 = prompt("Введите первое число");
//   let num_2 = prompt("Введите второе число");
//   if (isNaN(num_1) || isNaN(num_2)) {
//     return "Одно или оба значения не являются числом";
//   } else {
//     return num_1 * num_2;
//   }
// };

// console.log(composition());
