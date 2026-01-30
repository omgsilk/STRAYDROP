/* Общие настройки страницы */
body {
    background-color: #0f0f1e; /* Темно-синий, почти черный фон */
    color: #ffffff;
    font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    overflow: hidden; /* Чтобы не было прокрутки */
}

/* Контейнер приложения */
.app-container {
    text-align: center;
    width: 90%;
    max-width: 400px;
}

h1 {
    font-size: 28px;
    color: #f39c12; /* Золотой цвет */
    text-shadow: 0 0 15px rgba(243, 156, 18, 0.5);
    margin-bottom: 30px;
}

/* Поле ввода ставки */
input[type="number"] {
    background: #1a1a2e;
    border: 2px solid #34495e;
    border-radius: 10px;
    color: #2ecc71; /* Зеленый цвет денег */
    font-size: 24px;
    font-weight: bold;
    padding: 10px;
    width: 120px;
    text-align: center;
    outline: none;
    transition: border 0.3s;
}

input[type="number"]:focus {
    border-color: #f39c12;
}

/* Кнопки игр */
button {
    background: linear-gradient(145deg, #1e1e3f, #2b2b5c);
    border: 1px solid #4a4a8a;
    border-radius: 15px;
    color: white;
    cursor: pointer;
    display: block;
    font-size: 18px;
    font-weight: 600;
    margin: 15px auto;
    padding: 20px;
    width: 100%;
    transition: all 0.2s ease;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

button:active {
    transform: scale(0.95);
    background: #f39c12;
    color: #000;
}

button span {
    display: block;
    font-size: 30px;
    margin-bottom: 5px;
}

p {
    color: #8e8e93;
    font-size: 14px;
}
