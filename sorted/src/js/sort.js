// Функция, которая получает пользовательский массив значений
function getNumbers() {
    const inputValue = document.getElementById('numbers').value;
    return inputValue.replaceAll(' ', '').split(",").map(Number);
}


let i = 0;
let j = 0;

//Пошаговая сортировка пузырьком
function bubbleSortStep(arr) {
    if (i < arr.length) {
        if (j < arr.length) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
            j++;
        } else {
            j = 0;
            i++;
        }
    }
}

//Пошаговая сортировка выбором
function selectionSortStep(array, currentIndex) {
    let minIndex = currentIndex;

    for (let i = currentIndex + 1; i < array.length; i++) {
        if (array[i] < array[minIndex]) {
            minIndex = i;
        }
    }

    if (minIndex !== currentIndex) {
        let temp = array[currentIndex];
        array[currentIndex] = array[minIndex];
        array[minIndex] = temp;
    }
}
//Пошаговая сортировка вставками
function insertionSort(array, currentIndex) {
    let currentElement = array[currentIndex];
    let j = currentIndex - 1;

    while (j >= 0 && array[j] > currentElement) {
        array[j + 1] = array[j];
        j--;
    }

    array[j + 1] = currentElement;
}

//быстрая сортировка (функция обрабатывает разбивку)
function partition(arr, left, right) {
    const pivotValue = arr[right];
    let i = left;
    for (let j = left; j < right; j++) {
        if (arr[j] < pivotValue) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}
//Сортировка слиянием
function mergeSortHelper(arr, aux, left, right) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        mergeSortHelper(arr, aux, left, mid);
        mergeSortHelper(arr, aux, mid + 1, right);
        merge(arr, aux, left, mid, right);
    }
}
function mergeSortStep(arr) {
    const aux = new Array(arr.length);
    mergeSortHelper(arr, aux, 0, arr.length - 1);
}
function merge(arr, aux, left, mid, right) {
    for (let i = left; i <= right; i++) {
        aux[i] = arr[i];
    }

    let i = left;
    let j = mid + 1;
    let k = left;

    while (i <= mid && j <= right) {
        if (aux[i] <= aux[j]) {
            arr[k++] = aux[i++];
        } else {
            arr[k++] = aux[j++];
        }
    }

    while (i <= mid) {
        arr[k++] = aux[i++];
    }
}

//функция проверяет окончена сортировка или нет
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) {
            return false;
        }
    }
    return true;
}