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
  while (true) {
    let userInput = prompt("Вводи число:"); //Запрашиваем ввод числа

    if (userInput == null || userInput.toLocaleLowerCase() === "стоп") {
      alert("Хорошо, приходи, когда будет желание!");
      break;
    } else {
      const userAnswer = parseInt(userInput);
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
            break;
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

//Second Game "Simple Arithmetic"
//Начало игры
const startGameSimpleArithmetic = () => {
  let ans = confirm(
    'Приветсвую тебя, хочешь сыграть в игру "Простая арифметика"?'
  );
  if (ans) {
    gameRulesArithmetic();
    SimpleArithmeticGame();
  } else {
    ans = confirm("Это не займёт много времени и сил. Давай попробуем!");
    if (ans) {
      gameRulesArithmetic();
      SimpleArithmeticGame();
    } else {
      alert("Тогда приходи, когда будет желание сыграть!");
    }
  }
};
//Игровые правила
const gameRulesArithmetic = () => {
  alert("Отлично, давай я ознакомлю тебя с правилами игры");
  alert("Я буду задавать тебе примеры по выбранному тобой уровню сложности");
  alert("А ты должен будешь вводить ответ на этот пример");
  alert("Вводить нужно будет только числа");
};
//Генерация вопроса и правильного ответа
const generationQuestion = (difficulty) => {
  let operations = difficulty === "легкий" ? ["+", "-"] : ["+", "-", "*", "/"];
  let maxNum = difficulty === "сложный" ? 1000 : 100;
  let number1 = randomInt(1, maxNum);
  let number2 = randomInt(1, maxNum);
  let operation = operations[Math.floor(Math.random() * operations.length)];
  let question;
  let answer;
  if (operation === "/") {
    let div = number1 * number2;
    question = `${div} ${operation} ${number2}`;
    answer = div / number2;
  } else {
    question = `${number1} ${operation} ${number2}`;
    answer = eval(question);
  }
  return { question, answer: Math.round(answer * 100) / 100 };
};
//Основная программа, с возможностью выбрать уровень сложности игры
function SimpleArithmeticGame() {
  let difficulty = prompt(
    "Выбери уровень сложности:\n\tЛегкий\n\tСредний\n\tСложеный"
  ).toLocaleLowerCase();
  if (!["легкий", "средний", "сложный"].includes(difficulty)) {
    alert("Неверный уровень сложности\nПопробуй ещё раз");
    return SimpleArithmeticGame();
  }
  const questions = [];
  let correctAnswer = 0;
  while (true) {
    let numberOfTasks = prompt("Выбери количество примеров:");
    if (numberOfTasks == null || numberOfTasks.toLocaleLowerCase() == "стоп") {
      alert("Хорошо, приходи, когда будет желание!");
      break;
    } else {
      let validNumberOfTasks = isNumber(numberOfTasks);
      if (validNumberOfTasks) {
        for (let i = 0; i < numberOfTasks; i++) {
          questions.push(generationQuestion(difficulty));
        }
        questions.forEach((q, index) => {
          let userAnswer = parseInt(
            prompt(`Вопрос ${index + 1}: ${q.question}`)
          );
          let validUserAnswer = isNumber(userAnswer);
          if (validUserAnswer) {
            if (userAnswer === q.answer) {
              correctAnswer++;
            }
          } else {
            alert("Ты ввел не число");
          }
        });
      } else {
        alert("Ты ввел не число!");
      }
      let score = (correctAnswer / questions.length) * 100;
      alert(
        `Вы правильно ответили на ${correctAnswer} из ${
          questions.length
        } вопросов.\nВаш результат: ${score.toFixed(2)}%`
      );
    }
    let gameAgain = confirm("Желаете сыграть ещё раз?");
    if (gameAgain) {
      return SimpleArithmeticGame();
    } else {
      alert("Хорошо, приходите ещё!");
      break;
    }
  }
}
