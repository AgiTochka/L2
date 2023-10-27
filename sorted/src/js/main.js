let animationInterval;
let stopAnimation = false;
const array = [];

for (let i = 0; i < 20; i++) {
    const randomNumber = Math.floor(Math.random() * (100 - 20 + 1)) + 20;
    array.push(randomNumber);
}

console.log(array); // чтобы самой пример не придумывать


function startAnimation() {
    const algorithm = document.getElementById('algorithm').value;
    const visualization = document.getElementById('visualization');
    const numbers = getNumbers(); // Получаем массив чисел
    visualization.innerHTML = renderNumbers(numbers);
    let left = 0;
    let right = numbers.length - 1;
    let stack = [[left, right]];
    switch (algorithm) {
        case 'bubble':
            animationInterval = setInterval(() => {
                if (!stopAnimation) {
                    bubbleSortStep(numbers);
                    visualization.innerHTML = renderNumbers(numbers);
                    if (isSorted(numbers)) {
                        clearInterval(animationInterval);
                    }
                } else {
                    visualization.innerHTML = renderNumbers(numbers);
                }
            }, 100);
            break;
        case 'selection':
            let cur= 0;
            animationInterval = setInterval(() => {
                if (!stopAnimation) {
                    selectionSortStep(numbers, cur);
                    cur++;
                    visualization.innerHTML = renderNumbers(numbers);
                    if (isSorted(numbers)) {
                        clearInterval(animationInterval);
                    }
                }
            }, 100);
            break;
        case 'insertion':
            let currentIndex = 0;
            animationInterval = setInterval(() => {
                if (!stopAnimation) {
                    insertionSort(numbers, currentIndex);
                    currentIndex++;
                    visualization.innerHTML = renderNumbers(numbers);
                    if (isSorted(numbers)) {
                        clearInterval(animationInterval);
                    }
                }
            }, 300);
            break;
        case 'quick':
            animationInterval = setInterval(() => {
                if (!stopAnimation && stack.length > 0) {
                    const [left, right] = stack.pop();
                    const pivotIndex = partition(numbers, left, right);
                    if (left < pivotIndex - 1) {
                        stack.push([left, pivotIndex - 1]);
                    }
                    if (right > pivotIndex + 1) {
                        stack.push([pivotIndex + 1, right]);
                    }
                    visualization.innerHTML = renderNumbers(numbers);
                } else {
                    clearInterval(animationInterval);
                }
            }, 300);
            break;
        case 'merge':
            animationInterval = setInterval(() => {
                if (!stopAnimation && stack.length > 0) {
                    const [left, right] = stack.pop();
                    const mid = Math.floor((left + right) / 2);
                    if (left < right) {
                        stack.push([left, mid]);
                        stack.push([mid + 1, right]);
                        mergeSortStep(numbers);
                        visualization.innerHTML = renderNumbers(numbers);
                    }
                } else {
                    clearInterval(animationInterval);
                }
            }, 300);
            break;
    }
}

function stopAnimationFunction() {
    stopAnimation = true;
}

function resetAnimation() {
    clearInterval(animationInterval);
    stopAnimation = false;
    const visualization = document.getElementById('visualization');
    visualization.innerHTML = '';
}


function renderNumbers(numbers) {
    return numbers.map(number => `<div class="bar" style="height:${number}px"></div>`).join('');
}


document.getElementById('start').addEventListener('click', startAnimation);
document.getElementById('stop').addEventListener('click', stopAnimationFunction);
document.getElementById('stop').addEventListener('click', resetAnimation);
