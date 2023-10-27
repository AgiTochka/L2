function getHint(myNumber) {
    if(myNumber%2 === 0){
        return "Загаданное число четное";
    } else {
        return "Загаданное число нечетное";
    }
}

function isWarning(userNumber, min, max) {
    return (userNumber < min) || (userNumber > max);
}
