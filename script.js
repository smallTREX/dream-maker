// script.js
document.getElementById('draw').addEventListener('click', function() {
    const selectElement = document.getElementById('options');
    const options = Array.from(selectElement.options).map(option => option.value);
    const randomIndex = Math.floor(Math.random() * options.length);
    const winner = options[randomIndex];
    document.getElementById('result').innerText = `結果是：${winner}`;
});
