//Начало игры
let min = Number(document.getElementById("min").value);
let max = Number(document.getElementById("max").value);
let random = getRandomInt(min, max);

//Ответ на проверку числа
const btnCheck = document.getElementById("check");

const input = document.getElementById("number");
const labelHint = document.getElementById("hints");
const labelAnsw = document.getElementById("answer");
const counter = document.getElementById("counter");
let count = 0;
btnCheck.addEventListener('click', function () {
    count++;
    const userNumber = Number(input.value);
    if (count % 3 === 0) {
        labelHint.innerText = getHint(random);
    } else {
        labelHint.innerText = "";
    }
    if (isWarning(userNumber, min, max)) {
        labelAnsw.innerText = "Ваше число выходит из заданного диапазона: от " + min + " до " + max
    } else {
        labelAnsw.innerText = isMyNumber(random, userNumber);
    }
    counter.innerText = "Число попыток: " + count;
});

//Начать заново
let restartBtn = document.getElementById("restart");
restartBtn.addEventListener('click', function () {
    input.value = "";
    //Обновляем диапазон и выбираем новое рандомное число
    min = Number(document.getElementById("min").value);
    max = Number(document.getElementById("max").value);
    random = getRandomInt(min, max);
    //Обнуляем лэйблы и счетчик попыток
    labelAnsw.innerText = "";
    labelHint.innerText = "";
    count = 0;
    counter.innerText = "";
})