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

// Таймер

const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const milSec = document.querySelector(".mil-sec");

const btnGenerate = document.querySelectorAll(".button");

const btnReset = document.getElementById("reset");
const timerDisplay = document.getElementById("display");
const btnReady = document.getElementById("ready");

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
for (btn of btnGenerate) {
  btn.addEventListener("click", function () {
    let card = this.closest(".card");
    console.log(card);
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
  });
}
// btnGenerate.addEventListener("click", () => {
//   clearInterval(interval);
//   interval = setInterval(startTimer, 10);
// });

btnReset.addEventListener("click", () => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;

  min.innerHTML = "00";
  sec.innerHTML = "00";
  milSec.innerHTML = "00";
});
btnReady.addEventListener("click", () => {
  clearInterval(interval);
});

// ВАЛИДАЦИЯ
// const form = document.getElementById("add-form");
// const input = document.getElementById("inp");

// function validation(form) {
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

//   btnGenerate.addEventListener("click", () => {
//     removeError();
//     if (input.value === "") {
//       createError("Поле не заполнено!");
//       clearInterval(interval);
//     } else if (!Number(input.value)) {
//       createError("Введены буквы, а надо цифры!");
//       clearInterval(interval);
//     }
//   });
// }
// validation(this);
function validation(form) {
  let result = true;

  const card = document.querySelectorAll(".card");
  console.log(card);
  card.forEach((i) => {
    console.log(i.children[0][0]);
  });

  // form.querySelectorAll("input").forEach((input) => {
  //   console.log(input);
  // });

  return result;
}

document.querySelectorAll(".form").addEventListener("click", function (event) {
  event.preventDefault();
  if (validation(this) === true) {
    alert("Форма работает!");
  }
});
