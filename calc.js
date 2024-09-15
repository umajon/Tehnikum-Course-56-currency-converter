// Задача: Создать свой конвертер валют

// Блок схема: 
// 1. взять из атрибута usdValue сумму и положить в обявъленную переменную usdInput
let usdInput = document.getElementById("usdValue");

// 2.Добавляем обработчик "addEventListener" к элементу "usdInput", чтобы отследить события "input", 
// чтобы запускать функция конвертацию "convertCurrency" при изменении значения
usdInput.addEventListener("input", convertCurrency);

// 3. Функция конвертации валют "convertCurrency": 
function convertCurrency() {
    
    //3.1 Получаем значение введенное в переменную "usdInput" с помощью "usdInput.value",
    // далее объявляем это в виде переменной "usdAmount" в зоне видимости функции "convertCurrency" 
    let usdAmount = usdInput.value;

    // 3.2 Объявляем курс каждой валюты доллару
    let USD_TO_BTC = 0.00001660833266623197;  // Курс USD к BTC
    let USD_TO_ETH = 0.0004161205084992614;  // Курс USD к ETH
    let USD_TO_UZS = 12770.00;  // Курс USD к UZS
    let USD_TO_RUB = 91.1;     // Курс USD к RUB
    let USD_TO_EUR = 0.9015;    // Курс USD к EUR

    // 3.3 Рассчитываем сумму в других валютах, 
    // с помощью умножения значения пременной "usdAmount" на каждую пременную курса валют "USD_TO_UZS", "USD_TO_RUB", "USD_TO_EUR".
    // и записываем это в отдельную переменную.
    let btcAmount = usdAmount * USD_TO_BTC;
    let ethAmount = usdAmount * USD_TO_ETH;
    let uzsAmount = usdAmount * USD_TO_UZS;
    let rubAmount = usdAmount * USD_TO_RUB;
    let eurAmount = usdAmount * USD_TO_EUR;

    // 3.4 Выводим рассчитанные суммы (uzsAmount,rubAmount,eurAmount) 
    // и вставляем их с помощью "innerText" в нужный id в html
    document.getElementById("btcValue").innerText = btcAmount;
    document.getElementById("ethValue").innerText = ethAmount;
    document.getElementById("uzsValue").innerText = uzsAmount;
    document.getElementById("rubValue").innerText = rubAmount;
    document.getElementById("eurValue").innerText = eurAmount;
}