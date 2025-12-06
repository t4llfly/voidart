const input = document.getElementById('void-input');
const responseDiv = document.getElementById('void-response');
const sendBtn = document.getElementById('send-btn');

const secrets = {
    'привет': '...и тебе привет.',
    'кто здесь': 'ты один.',
    'автор': 'безысходность.',
    'страх': 'боль.',
    'вера': 'забвенье.',
    'депрессия': 'боль.',
    'одиночество': 'друг.',
    'друг': 'предатель.',
    'дружба': 'предательство.',
    'сон': 'убежище.',
    'слезы': 'временно.',
    'любовь': 'надежда.',
    'жизнь': 'пустота.',
    'смерть': 'забвенье.',
    'суицид': 'неправильно.',
    'музыка': 'бегство.',
    'искусство': 'отражение.',
    'помощь': 'ты сам.',
    'вопрос': 'ответ.',
    'ненависть': 'вечно.',
    'гнев': 'глупо.',
    'будущее': 'неизвестно.',
    'прошлое': 'слезы.',
    'реальность': 'страшно.',
    'смысл': 'нет.',
    'тишина': 'покой.',
    'темнота': 'друг.',
    'свет': 'маяк.',
    'время': 'уходит.',
    'память': 'боль.',
    'забудь': 'сложно.',
    'помни': 'сложно.',
    'прощай': 'навсегда.',
    'админ': 'здесь нет такого.',
    'только моника': 'только моника.',
    'бот': 'я не бот.',
    'ии': 'я не ии.',
    'нейросеть': 'я не нейросеть.',
    'человек': 'ты не один.',
    'сайори': 'счастливые мысли.',
    'счастливые мысли': 'сайори.',
    'рутина': 'тюрьма.',
    'нетарт': 'выделиться.',
    'творчество': 'самовыражение.',
    'свобода': 'необходимость.'
};

function speakToVoid(text) {
    const cleanText = text.trim().toLowerCase();

    responseDiv.style.opacity = '0';

    setTimeout(() => {
        if (secrets[cleanText]) {
            responseDiv.textContent = secrets[cleanText];
            responseDiv.style.opacity = '1';
        } else if (Math.random() > 0.9) {
            const randomAnswers = ["непонятно.", "тишина.", "пустота не ответила."];
            responseDiv.textContent = randomAnswers[Math.floor(Math.random() * randomAnswers.length)];
            responseDiv.style.opacity = '0.5';
        } else {
            responseDiv.textContent = '';
        }
    }, 500);
}

function processInput() {
    speakToVoid(input.value);
    input.value = '';
    input.blur();
    setTimeout(() => input.focus(), 10);
}

sendBtn.addEventListener('click', () => {
    processInput();
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        processInput();
    }
});

const phrases = [
    "дождись рассвета вместе со мной.",
    "дождись рассвета ради меня.",
    "дождись рассвета, я всегда рядом.",
    "дождись рассвета, я тебя поддержу.",
    "дождись рассвета и забудь про проблемы."
];

const phraseElement = document.getElementById('random-phrase');

function setRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    phraseElement.textContent = phrases[randomIndex];
}

setRandomPhrase();