// import JustValidate from "just-validate";

// Список вопросов

const questions = [
  {
    id: "frame", //корпус
    answer1: "Назовите доступные направления подвижности для позвоночника",

    answer2: "Назовите точки крепления и функции",
    option2: ["мышц спины", "мышц живота", "дыхательных мышц"],

    answer3: "Назовите мышцы-синергисты для",
    option3: [
      "сгибания позвоночника",
      "разгибания позвоночника",
      "ротации позвоночника",
      "расширения грудной клетки",
      "сужения грудной клетки",
    ],
  },

  {
    id: "forearm", //предплечье
    answer1: "Назовите доступные направления подвижности для",
    option1: ["запястья", "локтя"],

    answer2: "Назовите точки крепления и функции мышц предплечья",

    answer3: "Назовите мышцы-синергисты для",
    option3: [
      "сгибания локтя",
      "разгибания локтя",
      "супинации предплечья",
      "пронации предплечья",
      "сгибания запястья",
      "разгибания запястья",
      "лучевого отведения запястья",
      "локтевого отведения (приведения) запястья",
    ],
  },

  {
    id: "shoulder girdle", //плечевой пояс
    answer1: "Назовите доступные направления подвижности для лопатки",

    answer2:
      "Назовите точки крепления и функции мышц плечевого пояса (вокруг лопатки)",

    answer3: "Назовите мышцы-синергисты для",
    option3: [
      "элевации лопатки",
      "депрессии лопатки",
      "протракции лопатки",
      "ретракции лопатки",
      "ротации лопатки вверх",
      "ротации лопатки вниз",
    ],
  },
];

const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const milSec = document.querySelector(".mil-sec");

const btnGenerate = document.querySelectorAll(".button");

const btnReset = document.getElementById("reset");
const timerDisplay = document.getElementById("display");
const btnReady = document.getElementById("ready");

// Таймер

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;

function startTimer() {
  milliseconds++;

  if (milliseconds > 99) {
    seconds++;
    sec.innerHTML = "0" + seconds;

    milliseconds = 0;

    if (seconds > 9) {
      sec.innerHTML = seconds;
    }

    if (seconds > 59) {
      minutes++;
      min.innerHTML = "0" + minutes;

      seconds = 0;
      sec.innerHTML = "0" + seconds;
    }

    if (minutes > 9) {
      min.innerHTML = minutes;
    }
  }

  milSec.innerHTML = milliseconds < 10 ? "0" + milliseconds : milliseconds;
}

btnReset.addEventListener("click", function () {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  min.innerHTML = "00";
  sec.innerHTML = "00";
  milSec.innerHTML = "00";
});
btnReady.addEventListener("click", function () {
  clearInterval(interval);
});
// КОНЕЦ ТАЙМЕРА

// ФУНКЦИЯ СТАРТА ТАЙМЕРА И КАРТОЧКИ ПО КНОПКЕ "СГЕНЕРИРОВАТЬ"
function counterStartCard() {
  for (const btn of btnGenerate) {
    btn.addEventListener("click", function (e) {
      let card = this.closest(".card");
      clearInterval(interval);
      interval = setInterval(startTimer, 10);
    });
  }
}

// КОНЕЦ ФУНКЦИИ

//ВАЛИДАЦИЯ;
const form = document.querySelectorAll(".form");
const inputs = document.querySelectorAll(".input");

function validation() {
  function removeErrors(input) {
    const parent = input.parentNode;
    if (parent.classList.contains("error")) {
      parent.querySelector(".error-label").remove(".error-label");
      parent.classList.remove("error");
    }
  }

  function createError(input, text) {
    const parent = input.parentNode;
    const errorLabel = document.createElement("label");

    errorLabel.classList.add("error-label");
    errorLabel.textContent = text;

    parent.classList.add("error");
    parent.append(errorLabel);
  }

  for (const inp of inputs) {
    inp.addEventListener("input", function (e) {
      removeErrors(inp);
      if (e.target.value === "") {
        createError(inp, "Поле не заполнено!");
      } else if (!Number(e.target.value)) {
        createError(inp, "Введены буквы, а надо цифры!");
      } else if (e.target.value.length >= 4) {
        createError(inp, "Слишком много символов!");
      } else {
        counterStartCard();
      }
    });
  }
}
validation();

//Валидация 1
// function validation() {
//   function removeError() {
//     if (input.classList.contains("error-label")) {
//       document.querySelector("label").remove();
//     }
//   }

//   function createError(text) {
//     const errorLabel = document.createElement("label");
//     errorLabel.classList.add("error-label");
//     errorLabel.textContent = text;

//     input.insertAdjacentElement("afterend", errorLabel);

//     console.log(errorLabel);
//   }

// btnGenerate.addEventListener("click", () => {
//   removeError();
//   if (input.value === "") {
//     createError("Поле не заполнено!");
//     clearInterval(interval);
//   } else if (!Number(input.value)) {
//     createError("Введены буквы, а надо цифры!");
//     clearInterval(interval);
//   }
// });
// }
// validation();

// validation(this);
// function validation(form) {
//   let result = true;

//   const card = document.querySelectorAll(".card");
//   console.log(card);
//   card.forEach((i) => {
//     console.log(i.children[0][0]);
//   });

//   // form.querySelectorAll("input").forEach((input) => {
//   //   console.log(input);
//   // });

//   return result;
// }

// const form=document.querySelectorAll(".form")
// form.addEventListener("click", function (event) {
//   event.preventDefault();
//   if (validation(this) === true) {
//     alert("Форма работает!");
//   }
// });

// const validate = new JustValidate(".add-form");
// validate.addField("#inp", [
//   {
//     rule: "number",
//   },
// ]);

// function validate() {
//   const validator = new JustValidate(".form", {
//     errorLabelStyle: {
//       color: "blue",
//     },
//   });
//   validator.addField("#inp", [
//     {
//       rule: "number",
//       errorMessage: "Введите номер студента",
//     },
//     {
//       rule: "maxLength",
//       value: 4,
//       errorMessage: "Максимум 4 цифры",
//     },
//     {
//       rule: "required",
//       errorMessage: "Введите номер студента",
//     },
//   ]);
// }
// validate();

// Рандом
const questionText = document.querySelector(".item-text");
// console.log(questionText);

// let indexOfQuestion = questions.forEach((e) => {
//   let indexId = e.id;
//   console.log(indexId);
// });
let indexOfQuestion;

let dublicateQuestions = [];

function randomQestion() {
  let randomNumber = Math.floor(Math.random() * questions.length);
  // console.log(randomNumber);
  // dublicateQuestions.push(randomNumber);

  let dublicate = false;

  if (dublicateQuestions.length > 0) {
    dublicateQuestions.forEach((item) => {
      if (item == randomNumber) {
        dublicate == true;
      }
    });
    if (dublicate) {
      randomQestion();
    } else {
      indexOfQuestion = randomNumber;
    }
  }
  if (dublicateQuestions == 0) {
    indexOfQuestion = randomNumber;
  }
  dublicateQuestions.push(indexOfQuestion);
  // console.log(dublicateQuestions);
}
randomQestion();
// function randomQestion() {
//   let randomNumber = Math.floor(Math.random() * questions.length);
//   console.log(randomNumber);
//   let dublicate = false;

//   if (indexOfPage == questions.length) {
//     console.log("Hi");
//   } else {
//     if (complitedAnswers.langth > 0) {
//       complitedAnswers.forEach((item) => {
//         if (item == randomNumber) {
//           dublicate = true;
//         }
//       });
//       if (dublicate == true) {
//         randomQestion();
//       } else {
//         indexOfQuestion = randomNumber;
//       }
//     }
//     if (complitedAnswers == 0) {
//       indexOfQuestion = randomNumber;
//     }
//   }
//   complitedAnswers.push(indexOfQuestion);
//   console.log(complitedAnswers);
// }
// console.log(randomQestion());
// questionText.innerHTML = randomQestion();
