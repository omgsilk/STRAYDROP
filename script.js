const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

function sendGame(gameType) {
    const bet = document.getElementById('betInput').value;
    const data = {
        game: gameType,
        bet: parseInt(bet)
    };
    // Отправляем данные боту
    tg.sendData(JSON.stringify(data));
}
