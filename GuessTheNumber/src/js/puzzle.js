function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isMyNumber(myNumber, userNumber){
    if (userNumber === myNumber){
        return "Правильно! Я загадал число " + myNumber;
    } else if(userNumber > myNumber){
        return "Загаданное число меньше " + userNumber;
    } else if(userNumber < myNumber){
        return "Загаданное число больше " + userNumber;
    }
}
