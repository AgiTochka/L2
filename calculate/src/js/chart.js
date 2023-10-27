// Функция для обновления данных на диаграмме
function updateChart() {
    const targetCalories = parseInt(localStorage.getItem('targetCalories')) || 2000;
    const totalCalories = parseInt(document.getElementById('totalCalories').textContent) || 0;
    if(targetCalories<totalCalories){
        drawPieChart([totalCalories, targetCalories - totalCalories],['#f32f52', '#36A2EB'])
        alert("Превышена норма калорий");
    } else{
        drawPieChart([totalCalories, targetCalories - totalCalories],['#36A2EB', '#FFCE56'])
    }
}
// Функция для рисования круговой диаграммы
function drawPieChart(data, colors) {
    const ctx = document.getElementById('caloriesChart').getContext('2d');

    const total = data.reduce((acc, val) => acc + val, 0);
    let startAngle = -Math.PI / 2; // Начинаем с верхней точки круга

    for (let i = 0; i < data.length; i++) {
        const sliceAngle = (2 * Math.PI * data[i]) / total;
        ctx.beginPath();
        ctx.arc(100, 70, 50, startAngle, startAngle + sliceAngle);
        ctx.lineTo(100, 70);
        ctx.fillStyle = colors[i];
        ctx.fill();
        startAngle += sliceAngle;
    }

}