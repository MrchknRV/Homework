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
    let userAnswer = prompt("Вводи число:"); //Запрашиваем ввод числа

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
