let name = prompt("Введите Ваше имя: ");
let patronymic = prompt("Введите Ваше отчество: ");
let surname = prompt("Введите Вашу фамилию: ");
let age = parseInt(prompt("Введите Ваш возраст: "));
let gender = "";
let question = confirm("Ваш пол мужской?");
if (question) {
  gender = "мужской";
} else {
  gender = "женский";
}

let pensioner = "";
if (gender === "мужской" && age >= 65) {
  pensioner = "да";
} else if (gender === "женский" && age >= 55) {
  pensioner = "да";
} else {
  pensioner = "нет";
}

if (
  name.length > 0 &&
  patronymic.length > 0 &&
  surname.length > 0 &&
  !isNaN(age) &&
  typeof age === "number"
) {
  alert(
    "Ваше ФИО: " +
      surname +
      " ," +
      name +
      ", " +
      patronymic +
      " ||  Ваш возраст в годах: " +
      age +
      " || Ваш возраст в днях: " +
      age * 364 +
      " || Через 5 лет вам будет: " +
      (age + 5) +
      " || Ваш пол: " +
      gender +
      " || Вы являетесь пенсионером: " +
      pensioner
  );
} else {
  alert("Вы заполнили не все данные");
}
