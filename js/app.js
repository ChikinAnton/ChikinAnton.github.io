const DATABASEDAYS = [
    {
        day: 1,
        level: 'elementary',
        title: 'Вступ в JavaScript',
        narration: `<p class="narration__paragraph">Привіт! Я радий, що ви обрали вивчати JavaScript заром зі мною. JavaScript - одна з найпопулярніших мов програмування у світі. Якщо ви починаєте з нуля, то ви зробили правильний вибір, оскільки JavaScript - це мова програмування, яка використовується для створення веб-сайтів та веб-додатків, і вона є незамінним інструментом для багатьох розробників у всьому світі.</p>
                    <p class="narration__paragraph">Вивчення JavaScript може бути викликом, але я впевнений, що ми зможете зробити це успішно разом. JavaScript може здатися складним на перший погляд, але з часом ми зрозуміємо, що це дуже потужний інструмент, який дозволяє створювати динамічні та інтерактивні веб-сайти.</p>
                    <p class="narration__paragraph">У цьому курсі-щоденнику ми будемо поступово вивчати JavaScript, починаючи з його основних концепцій і засобів, таких як змінні, функції, умовні оператори та цикли. Ми також розглянемо, як використовувати JavaScript для роботи з HTML-елементами та CSS-стилями, створення анімацій та інтерактивності на сторінках.</p>
                    <p class="narration__paragraph">Якщо у вас є попередні знання з програмування, то вам буде легше зрозуміти певні концепції, але навіть якщо ви новачок у програмуванні, не хвилюйтесь - я буду намагатися пояснювати все поступово і детально.</p>
                    <p class="narration__paragraph">Готові розпочати вивчення JavaScript? Давайте почнемо!</p>`,
        codeExamples: ''
    },
    {
        day: 2,
        level: 'elementary',
        title: 'Синтаксис в JavaScript',
        narration: `<p class="narration__paragraph">Привіт! Я знаю, що вивчення синтаксису JavaScript може бути складним і заплутаним на початку, тому дозвольте мені розповісти вам про це з розумінням, що ви тільки починаєте вивчати JavaScript.</p>
                    <p class="narration__paragraph"><span class="day__word-mark">JavaScript</span> - це мова програмування, яку використовують для розробки веб-додатків. Вона має свій власний синтаксис, який дуже схожий на синтаксис інших мов програмування, таких як <span class="day__word-mark">Java, C і Python.</span></p>
                    <p class="narration__paragraph">Основою JavaScript є інструкції, які дозволяють виконувати різні дії.</p>`,
        codeExamples: ''
    },
    {
        day: 3,
        level: 'elementary',
        title: 'Про типи данних в JavaScript',
        narration: `<p class="narration__paragraph">В JavaScript є кілька типів даних, основні з яких включають:</p>
                        <ol class="narration__paragraph">
                            <li><span class="day__word-mark">Рядки (Strings)</span> - це послідовності символів, які можуть містити букви, цифри, символи пунктуації та інші знаки.</li>
                            <li><span class="day__word-mark">Числа (Numbers)</span> - це числові значення, які можуть бути цілими або дробовими.</li>
                            <li><span class="day__word-mark">Булеві значення (Booleans)</span> - це значення "true" (істина) або "false" (хибна), які використовуються для логічних операцій.</li>
                            <li><span class="day__word-mark">Масиви (Arrays)</span> - це колекції значень, які можуть бути різних типів.</li>
                            <li><span class="day__word-mark">Об'єкти (Objects)</span> - це структури даних, що містять властивості та методи.</li>
                            <li><span class="day__word-mark">Функції (Functions)</span> - це блоки коду, які можуть бути викликані та виконувати певні дії.</li>
                            <li><span class="day__word-mark">Null та undefined</span> - це спеціальні значення, що вказують на відсутність значення.</li>
                        </ol>
                    <p class="narration__paragraph">Ці типи даних дозволяють програмістам виконувати різні операції з даними, що є важливим для написання різноманітних програм.</p>`,
        codeExamples: ''
    },
    {
        day: 4,
        level: 'elementary',
        title: 'Оператори у JavaScript арифметичні, порівняння, логічні',
        narration: `<p class="narration__paragraph">В JavaScript є кілька видів операторів, які використовуються для різних операцій з даними. Оператори дозволяють обробляти значення, порівнювати їх, здійснювати логічні дії та багато іншого. Давайте розглянемо декілька основних типів операторів у JavaScript:</p>
                        <ol class="narration__paragraph">
                            <li>Арифметичні оператори - ці оператори використовуються для виконання арифметичних операцій, таких як додавання, віднімання, множення та ділення. Наприклад, + додає два числа, - віднімає одне число від іншого, * множить два числа, а / ділить одне число на інше.li>
                            <li>Оператори порівняння - ці оператори використовуються для порівняння двох значень. Наприклад, == перевіряє, чи дорівнюють два значення, а != перевіряє, чи не дорівнюють вони. >, <, >= та <= порівнюють числові значення, а === та !== порівнюють не тільки значення, але і тип даних.</li>
                            <li>Логічні оператори - ці оператори використовуються для здійснення логічних операцій над значеннями. && (логічне І) повертає true, якщо обидва значення true, || (логічне АБО) повертає true, якщо хоча б одне значення true, а ! (логічне НЕ) змінює значення на протилежне.</li>
                        </ol>
                    <p class="narration__paragraph">Знання цих типів операторів дозволить вам створювати складніші програми в JavaScript та здійснювати різні маніпуляції з даними. Наприклад, ви можете використовувати логічні оператори, щоб перевірити, чи має користувач відповідний доступ до деякої інформації, або використовувати арифметичні оператори, щоб обчислити значення певних математичних виразів.</p>`,
        codeExamples: ''
    },
    {
        day: 5,
        level: 'elementary',
        title: 'Тип данних числа (Number)',
        narration: `<p class="narration__paragraph">Привіт!</p>
                    <p class="narration__paragraph">Я недавно почав вивчати JavaScript і сьогодні хочу розповісти про один з типів змінних - "number". Як саме він працює та як можна використовувати в своїх програмах.</p>
                    <p class="narration__paragraph">"Number" у JavaScript - це тип даних, який використовується для числових значень. Він може бути додатнім, від'ємним, з десятковою крапкою або без неї.</p>
                    <p class="narration__paragraph">Один з прикладів використання "number" - це математичні операції. Я можу використовувати оператори додавання (+), віднімання (-), множення (*) та ділення (/) для обчислення числових значень. Також, JavaScript має ряд вбудованих функцій, які можуть бути використані для обробки числових значень, наприклад, "Math.max()" для знаходження максимального значення в масиві чисел.</p>
                    <p class="narration__paragraph">Крім цього, "number" може бути використаний для зберігання інформації про відстані, швидкість, час, розміри та інші числові параметри.</p>
                    <p class="narration__paragraph">Проте, варто пам'ятати, що робота з числами у JavaScript може бути дещо складною через те, що деякі значення можуть бути втрачені під час обчислень через обмежену точність чисел з плаваючою крапкою. Також, при використанні "number" у рядках, потрібно бути обережним, оскільки можуть виникати непередбачувані результати.</p>
                    <p class="narration__paragraph">В цілому, вивчення типу змінних "number" було цікавим та корисним досвідом для мене як початкуючого розробника JavaScript. Я вважаю, що засвоєння цього типу даних допоможе мені в подальшій роботі з програмами, де використовуються числові значення.</p>`,
        codeExamples: '<img class="code__examples" src="img/days/day-5.png">'
    },
    {
        day: 6,
        level: 'elementary',
        title: 'Тип данних рядок (String)',
        narration: `<p class="narration__paragraph">Недавно я вивчив тип змінних "string" у JavaScript. Цей тип даних використовується для зберігання та маніпулювання рядками тексту. Рядки можуть містити будь-який текст, включаючи літери, числа, символи та пробіли.</p>
                    <p class="narration__paragraph">Одна з особливостей рядків у JavaScript полягає в тому, що вони є незмінними, тобто після створення рядка його неможливо змінити. Але ми можемо створити новий рядок, використовуючи певні методи рядків.</p>
                    <p class="narration__paragraph">Тип змінних "string" дуже корисний у JavaScript і дозволяє працювати з текстовими даними. Я сподіваюся, що ці приклади допоможуть вам краще зрозуміти, як працює цей тип даних у JavaScript.</p>`,
        codeExamples: '<img class="code__examples" src="img/days/day-6.png">'
    },
    {
        day: 7,
        level: 'elementary',
        title: 'Тип данних об`єкт (Object)',
        narration: `<p class="narration__paragraph">Я почав вивчати об'єкти в JavaScript з основ - це були фігурні дужки, між якими вказувалися властивості, розділені комами. Це дозволяло мені створювати об'єкти з ключами та значеннями, які можна було звертатися до них за допомогою імен.</p>
                    <p class="narration__paragraph">Далі я дізнався, що в об'єктах можна зберігати не тільки прості значення, такі як рядки або числа, але й функції. Функції в об'єктах називаються методами і можуть бути викликані з контексту об'єкта за допомогою оператора крапки.</p>
                    <p class="narration__paragraph">Також я вивчив, як отримати доступ до властивостей об'єкта за допомогою оператора квадратних дужок або крапки. Це дозволяє мені отримати значення властивості, або змінити її значення, якщо потрібно.</p>
                    <p class="narration__paragraph">Для створення більш складних об'єктів я можу створювати об'єкти в об'єктах, що дозволяє мені створювати багатошарові структури даних. Це може бути корисно, коли я працюю з більш складними даними, такими як дерева або графи</p>
                    <p class="narration__paragraph">Також я дізнався про способи перебору ключів та значень в об'єктах за допомогою циклу for...in та метода Object.keys(). Це дозволяє мені легко перебирати та взаємодіяти з властивостями мого об'єкта.</p>
                    <p class="narration__paragraph">Object.keys() - це метод, який повертає масив, що містить всі ключі, що належать об'єкту. Цей метод повертає тільки власні ключі об'єкта, а не успадковані від прототипу.</p>
                    <p class="narration__paragraph">for...in - це цикл, який дозволяє перебирати всі ключі об'єкта, включаючи ключі, що успадковані від прототипу</p>
                    <p class="narration__paragraph">Ці методи можуть бути корисними, коли мені потрібно отримати доступ до властивостей об'єкта та виконати дії з ними, такі як зміна їх значень чи вивід на екран.</p>
                    <p class="narration__paragraph">В цілому, вивчення об'єктів в JavaScript допомогло мені краще розуміти, як працюють дані в мові програмування, і дозволило мені створювати більш складні програми, які використовують об'єкти для зберігання та обробки даних.</p>`,
        codeExamples: '<img class="code__examples" src="img/days/day-7.png">'
    },
    {
        day: 8,
        level: 'elementary',
        title: 'Тип данних масив (Array)',
        narration: `<p class="narration__paragraph">Перед початком вивчення мавивів, я розумів, що масиви є одним з найважливіших елементів в Javascript, тому я почав вивчати їх з особливим інтузіазмом.</p>
                    <p class="narration__paragraph">Спочатку я зрозумів, що масив - це збірник значень, які можуть бути збережені в одному місці. Я створив кілька простих масивів, щоб побачити, як вони працюють. Я використовував оператори, такі як push, pop, shift та unshift, щоб додавати та видаляти елементи з масиву. Це допомогло мені краще зрозуміти, як вони працюють.</p>
                    <p class="narration__paragraph"><span class="day__word-mark">push, pop, shift та unshift</span> - це методи, які дозволяють додавати та видаляти елементи з масиву в Javascript. Метод push додає елемент в кінець масиву, метод pop видаляє останній елемент з масиву, метод shift видаляє перший елемент з масиву, а метод unshift додає елемент на початок масиву.</p>
                    <p class="narration__paragraph">Я також вивчив, як отримувати доступ до елементів масиву за індексом та як проходити через масив в циклі. Я використовував метод forEach для перебору масиву та виконання певних дій з кожним елементом.</p>
                    <p class="narration__paragraph"><span class="day__word-mark">forEach</span> - це метод, який використовується для перебору елементів масиву та виконання певної дії з кожним елементом. Метод forEach приймає функцію зворотного виклику (callback function), яка виконується для кожного елемента масиву. Функція зворотного виклику приймає три аргументи: поточний елемент масиву, індекс поточного елемента та сам масив.</p>
                    <p class="narration__paragraph">Після того, як я зрозумів основні концепції масивів, я перейшов до більш складних завдань. Я досліджував, як створювати багатовимірні масиви та як виконувати операції з масивами, такі як сортування та фільтрація.</p>
                    <p class="narration__paragraph">На моє задоволення, я зрозумів, що Javascript надає багато функцій для роботи з масивами. Я вивчив, як використовувати методи, такі як map, reduce та filter, щоб більш ефективно працювати з масивами.</p>
                    <p class="narration__paragraph">Хоча це було викликом для мене вивчити масиви в Javascript, я був задоволений своїм прогресом. Я відчував, що зрозумів основні концепції масивів та зміг застосовувати їх у своїх проектах. Я з нетерпінням чекаю на наступні виклики, які принесе мій шлях навчання.</p>`,
        codeExamples: '<img class="code__examples" src="img/days/day-8.png">'
    },
    {
        day: 9,
        level: 'elementary',
        title: 'Коментарі в JavaScript',
        narration: `<p class="narration__paragraph">При вивчені JavaScript, ви, напевно, вже чули про коментарі. Коментарі - це текст у вашому коді, який не виконується ігнорується JavaScript-ом. Вони можуть бути корисними для пояснення того, що робить певний кусок коду, для зауваження про можливі проблеми або для відключення частини коду, якщо ви не хочете виконувати її, але не хочете видаляти.</p>
                    <p class="narration__paragraph">Щоб створити коментар у JavaScript, використовуйте подвійні рядки // для однорядкових коментарів або початкові /* та закриваючі */ теги для багаторядкових коментарів.</p>
                    <p class="narration__paragraph">Коментарі не впливають на виконання коду, тому вони можуть бути корисними для відладки або для документування вашого коду. Однак, не перестаражайтесь з коментарями і не додавайте зайвих коментарів до вашого коду. Добре написаний код має бути зрозумілим без зайвих коментарів, але коментарі можуть бути корисними для пояснення складних або незрозумілих рішень.</p>`,
        codeExamples: '<img class="code__examples" src="img/days/day-9.png">'
    },
    {
        day: 10,
        level: 'base',
        title: 'Що таке мотоди?',
        narration: ``,
        codeExamples: ''
    },
    {
        day: 11,
        level: 'base',
        title: 'if',
        narration: ``,
        codeExamples: ''
    },
    {
        day: 12,
        level: 'base',
        title: 'Оператор switch',
        narration: ``,
        codeExamples: ''
    },
    {
        day: 13,
        level: 'base',
        title: 'Двовимірні масиви',
        narration: ``,
        codeExamples: ''
    },
    {
        day: 14,
        level: 'base',
        title: 'Функції',
        narration: ``,
        codeExamples: ''
    },
    {
        day: 15,
        level: 'base',
        title: 'Цикли for, while',
        narration: ``,
        codeExamples: ''
    },
    {
        day: 16,
        level: 'base',
        title: 'Що таке DOM',
        narration: ``,
        codeExamples: ''
    },
    {
        day: 17,
        level: 'base',
        title: 'Робота з DOM',
        narration: ``,
        codeExamples: ''
    },
    {
        day: 18,
        level: 'advanced',
        title: 'Про фреймворки',
        narration: ``,
        codeExamples: ''
    },
    {
        day: 19,
        level: 'advanced',
        title: 'Модальні вікна',
        narration: ``,
        codeExamples: ''
    },
    {
        day: 20,
        level: 'advanced',
        title: 'Асинхронні функції',
        narration: ``,
        codeExamples: ''
    },
];

const diaryList = document.querySelector('.diary__list');
const narration = document.querySelector('.narration');
const headerDay = document.querySelector('.header__day');
const titleWebsite = document.querySelector('.title__website');
const elementaryDays = document.querySelector('.elementary-days');
const baseDays = document.querySelector('.base-days');
const advancedDays = document.querySelector('.advanced-days');
const narrationTitle = document.querySelector('.narration__title');
const backPageButton = document.querySelector('.back-page');
const nextPageButton = document.querySelector('.next-page');
const menuButton = document.querySelector('.menu__button');
const menuWindow = document.querySelector('.navigation__window');

menu = false;

dayToIndex = 0;
stateDay = 0;



// Функція для получення номеру дня
function getDay(day){
    let dayNumber = day.getAttribute("data-day");
    dayToIndex = Number(dayNumber) - 1;
    localStorage.setItem("myDay",JSON.stringify(dayToIndex));
};

// Функція загрузки контенту для сторінки дня
function loadDayPage(){
    for(let key in DATABASEDAYS){
        if(key == dayToIndex){
            narration.innerHTML += `
                ${DATABASEDAYS[key].narration}
                ${DATABASEDAYS[key].codeExamples}`
            narrationTitle.innerHTML += `${DATABASEDAYS[key].title}`
            headerDay.innerHTML += `${DATABASEDAYS[key].day}`
            titleWebsite.innerHTML += `JS DAYS - ${DATABASEDAYS[key].title}`
            stateDay = Number(key);
        };
    };
};

// Функція загрузки стиску днів на головній
function loadDayList(){
    for (let key in DATABASEDAYS){
        diaryList.innerHTML += `
            <div class="diary-item">
                <a onclick="getDay(this)" data-day="${DATABASEDAYS[key].day}" href="day.html" class="day">${DATABASEDAYS[key].day}<pre><span> день</span></pre></a>
                <div class="description">${DATABASEDAYS[key].title}</div>
            </div>
        `
    };
}

// Функція загрузки таблиці днів в щоденнику
function loadTableDay(){
    for(let key in DATABASEDAYS){
        if(DATABASEDAYS[key].level == "elementary"){
            elementaryDays.innerHTML += `
                <div class="day__block">
                    <a onclick="getDay(this)" data-day="${DATABASEDAYS[key].day}" href="day.html" class="day">${DATABASEDAYS[key].day}<pre><span> день</span></pre></a>
                </div>
            `
        }else if(DATABASEDAYS[key].level == "base"){
            baseDays.innerHTML += `
                <div class="day__block">
                    <a onclick="getDay(this)" data-day="${DATABASEDAYS[key].day}" href="day.html" class="day">${DATABASEDAYS[key].day}<pre><span> день</span></pre></a>
                </div>
            `
        }else if(DATABASEDAYS[key].level == "advanced"){
            advancedDays.innerHTML += `
                <div class="day__block">
                    <a onclick="getDay(this)" data-day="${DATABASEDAYS[key].day}" href="day.html" class="day">${DATABASEDAYS[key].day}<pre><span> день</span></pre></a>
                </div>
            `
        };
    };
};

// Функція минулої сторінки
function backPage(elem){    
    stateDay--;
    console.log(stateDay);

    if(stateDay <= -1){
        stateDay++;
        elem.style.background = "#9088FF";
    }else{
        narration.innerHTML = `
            ${DATABASEDAYS[stateDay].narration}
            ${DATABASEDAYS[stateDay].codeExamples}`
        narrationTitle.innerHTML = `${DATABASEDAYS[stateDay].title}`
        headerDay.innerHTML = `${DATABASEDAYS[stateDay].day}`
        titleWebsite.innerHTML = `JS DAYS - ${DATABASEDAYS[stateDay].title}`
        backPageButton.style.background = "var(--main)";
        nextPageButton.style.background = "var(--main)";
    };
};

// Функція наступної сторінки
function nextPage(elem){    
    stateDay++;
    console.log(stateDay);

    if(stateDay >= 19){
        stateDay--;
        elem.style.background = "#9088FF";
    }else{
        narration.innerHTML = `
        ${DATABASEDAYS[stateDay].narration}
        ${DATABASEDAYS[stateDay].codeExamples}`
        narrationTitle.innerHTML = `${DATABASEDAYS[stateDay].title}`
        headerDay.innerHTML = `${DATABASEDAYS[stateDay].day}`
        titleWebsite.innerHTML = `JS DAYS - ${DATABASEDAYS[stateDay].title}`
        backPageButton.style.background = "var(--main)";
        nextPageButton.style.background = "var(--main)";
    };
};

// Функція для відображення мобільного меню
function mobileMenu(){
    if(menu == false){
        // menuWindow.classList.add('nav-active');
        menuWindow.style.left = "0";

        menu = true;
    }else if(menu == true){
        // menuWindow.classList.remove('nav-active');
        menuWindow.style.left = "-400px";
        menu = false;
    };
};