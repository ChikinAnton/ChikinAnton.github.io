const DATABASEDAYS = [
    {
        day: 1,
        level: 'elementary',
        title: 'Вступ в JavaScript',
        lecture: `
            <p loremdasff class="lecture__paragraph">
                JavaScript (JS) є однією з найпоширеніших та потужних мов програмування, що використовується у веброзробці. Він відкриває безмежні можливості для створення динамічних та інтерактивних вебсайтів. JavaScript дозволяє взаємодіяти з користувачами, обробляти події, маніпулювати змістом сторінок та взаємодіяти зі сторонніми сервісами.
                <br><br>
                Одна з найбільших переваг JavaScript полягає в тому, що він виконується безпосередньо у браузері користувача. Це означає, що не потрібно додаткових налаштувань або встановлення програмного забезпечення для виконання JavaScript-коду. Вебсторінки можуть негайно реагувати на взаємодію користувача, змінюючи зміст або відправляючи запити на сервер для отримання даних у реальному часі.
                <br><br>
                JavaScript також використовується для розробки повноцінних вебдодатків та вебсервісів. Завдяки JS, можна створювати складну логіку, обробляти та зберігати дані, виконувати асинхронні запити до сервера та багато іншого. Він є важливим компонентом для розробки фронтенду, дозволяючи створювати взаємодіючі елементи, анімацію та валідацію даних.
                <br><br>
                JavaScript також здатний працювати на стороні сервера завдяки популярному середовищу виконання Node.js. Це дозволяє розробникам використовувати JavaScript для створення вебсерверів, мережевих додатків та інших серверних рішень.
                <br><br>
                Вступ у світ JavaScript відкриває двері до безлічі можливостей у веброзробці. Вивчення цієї мови дає змогу творити інтерактивні, динамічні та потужні вебсайти та додатки. Він є невід'ємною складовою для кожного розробника, який прагне створити захоплюючі та сучасні вебрішення.
            </p>
        `
    },
    {
        day: 2,
        level: 'elementary',
        title: 'Історія розвитку JavaScript',
        lecture: `
            <p loremdasff class="lecture__paragraph">
                JavaScript (JS) є однією з найпопулярніших та впливових мов програмування у сфері веброзробки. Його історія починається у 1995 році, коли Брендан Айк, розробник компанії Netscape, створив мову, яку спочатку називали LiveScript. Однак, з метою використання популярності Java, мову перейменували на JavaScript.
                <br><br>
                У своїх початках JavaScript використовувався для простих скриптів на вебсторінках. Але з часом мова почала розвиватися та ставати більш потужною. У 1997 році стандартом ECMAScript (стандартна специфікація мови JavaScript) було прийнято першу версію, відому як ECMAScript 1.
                <br><br>
                Зараз JavaScript є високорівневою мовою, що використовується для розробки різноманітних вебдодатків та вебсайтів. Завдяки своїй універсальності, JavaScript зайняв свою нішу не тільки на клієнтській стороні, але й на серверномій стороні завдяки платформі Node.js.
                <br><br>
                Розвиток JavaScript супроводжується випуском нових версій стандарту ECMAScript. ECMAScript 6, випущений у 2015 році, вніс багато покращень, включаючи стрілкові функції, розширену підтримку класів, блоки шаблонів та інші функціональність. Пізніше з'явилися версії ECMAScript 7, 8, 9, 10 та 11, кожна з яких додає нові можливості та покращує роботу з мовою.
                <br><br>
                JavaScript також став популярним завдяки розвитку фреймворків та бібліотек, таких як Angular, React та Vue.js, які дозволяють розробникам швидше та ефективніше створювати складні вебдодатки. Ці фреймворки надають зручні інструменти для організації коду, керування станом додатків та створення компонентів.
                <br><br>
                Наприкінці 2010-х років та на початку 2020-х років JavaScript продовжує активно розвиватися. З'являються нові функціональні можливості, покращуються продуктивність та безпека мови, а також розширюються границі її застосування.
                <br><br>
                JavaScript став необхідним інструментом для сучасної веброзробки. Він дозволяє створювати динамічні, інтерактивні та потужні вебдодатки, які забезпечують захоплюючий досвід користувача. З кожним роком JavaScript продовжує змінювати веброзробку, впливаючи на її швидкість, якість та можливості.
            </p>
        `
    },
    {
        day: 3,
        level: 'elementary',
        title: 'Середовище виконання js-коду (редактори коду та інструмент розробника)',
        lecture: `
            <p loremdasff class="lecture__paragraph">
                Середовище виконання js-коду та інструменти розробника відіграють важливу роль у розробці JavaScript-проектів. Вони забезпечують зручну та продуктивну робочу середу для програмістів, допомагаючи їм писати, налагоджувати та тестувати код.
                <br><br>
                Одним з основних інструментів розробника є текстовий редактор або інтегроване середовище розробки (IDE). Вони надають розширений набір функцій, таких як підсвічування синтаксису, автодоповнення, перевірка помилок та багато іншого. Популярні редактори коду для JavaScript включають Visual Studio Code, Sublime Text, Atom та JetBrains WebStorm.
                <br><br>
                Крім редакторів коду, існують інші корисні інструменти, які полегшують розробку JavaScript-проектів. Наприклад, системи керування версіями, такі як Git, дозволяють відстежувати зміни в коді, співпрацювати з іншими розробниками та забезпечувати безпеку проекту.
                <br><br>
                Для налагодження та тестування JavaScript-коду використовуються інструменти, такі як браузерні консолі та інспектори, що дозволяють переглядати та змінювати структуру сторінок, відлагоджувати код, відстежувати помилки та аналізувати продуктивність.
                <br><br>
                Набір інструментів для розробки JavaScript постійно розширюється та вдосконалюється. Наприклад, пакетний менеджер npm дозволяє легко встановлювати та керувати залежностями проекту. Фреймворки та бібліотеки, такі як React, Vue.js та Angular, надають готові рішення для швидкого створення складних веб-додатків.
                <br><br>
                Загалом, середовище виконання js-коду та інструменти розробника відіграють критичну роль у продуктивності та якості розробки JavaScript-проектів. Вони допомагають розробникам ефективно працювати, забезпечуючи зручну робочу середу та набір потужних інструментів для розробки, тестування та впровадження веб-додатків.
            </p>
        `
    },
    {
        day: 4,
        level: 'elementary',
        title: 'Способи підключення скриптів',
        lecture: `
            <p loremdasff class="lecture__paragraph">
                Підключення скриптів є важливою частиною веб-розробки, оскільки вони дозволяють додати функціональність та динаміку до веб-сторінок. Існує кілька способів підключення скриптів до HTML-сторінок.
                <br><br>
                Перший спосіб - це використання елементу &ltscript> в HTML-коді. Можна підключити скрипт, вказавши шлях до файлу скрипта у властивості "src" елементу &ltscript>.
                <br><br>
                Наприклад:
            </p>
<pre class="code__exemple">
&ltscript src="script.js">&lt/script>
</pre>
            <p loremdasff class="lecture__paragraph">
                Цей підхід підключає зовнішній файл скрипта до веб-сторінки і виконує його код.
                <br><br>
                Другий спосіб - це написання скрипта безпосередньо в HTML-коді, використовуючи вміст елементу &ltscript>. Можна написати JS-код безпосередньо в HTML-файлі між відкриваючим і закриваючим тегами &ltscript>.
                <br><br>
                Наприклад:
            </p>
<pre class="code__exemple">
&ltscript>
    JS-код тут
&lt/script>
</pre>
            <p loremdasff class="lecture__paragraph">
                Цей підхід найчастіше використовується для невеликих фрагментів коду або для негайного виконання деяких функцій на сторінці.
                <br><br>
                Третій спосіб - використання атрибуту "onload" у вкладеному елементі &ltscript>. Можна використовувати цей атрибут для виконання функцій або ініціалізації коду після завантаження скрипта.
                <br><br>
                Наприклад:
            </p>
<pre class="code__exemple">
&ltscript src="script.js" onload="myFunction()">&lt/script>
</pre>
            <p loremdasff class="lecture__paragraph">
                У цьому прикладі, після завантаження скрипта "script.js", буде викликана функція "myFunction()".
                <br><br>
                Кожен з цих способів має свої переваги та використовується в залежності від потреб проекту. Правильний вибір способу підключення скриптів допоможе забезпечити ефективну та надійну роботу веб-сторінок.
            </p>
        `
    },
    {
        day: 5,
        level: 'elementary',
        title: 'Змінні: призначення, типи, синтаксис, рекомендації щодо іменування змінних',
        lecture: `
            <p loremdasff class="lecture__paragraph">
                Змінні - це основний елемент в будь-якій мові програмування, включаючи JavaScript. Вони використовуються для зберігання та маніпулювання даними під час виконання програми. Розглянемо основні аспекти змінних.
                <br><br>
                Призначення змінних полягає в тому, щоб зберігати дані, такі як числа, рядки, булеві значення тощо. В JavaScript можна оголошувати змінні, використовуючи ключове слово <span class="lecture-mark">var</span>, <span class="lecture-mark">let</span> або <span class="lecture-mark">const</span>. var було введено у більш старіших версіях JavaScript, зараз рекомендується використовувати <span class="lecture-mark">let</span> та <span class="lecture-mark">const</span>.
                <br><br>
                Синтаксис оголошення змінних виглядає так:
            </p>
<pre class="code__exemple">
let age = 18;
const name = "Anton";
var isStudent = true;
</pre>
            <p loremdasff class="lecture__paragraph">
                Тут оголошуються змінні <span class="lecture-mark">age</span>, <span class="lecture-mark">name</span> та <span class="lecture-mark">isStudent</span> і присвоюються їм значення.
                <br><br>
                Існують різні типи змінних у JavaScript. Декілька типів включають числа, рядки, булеві значення, об'єкти, масиви та інші. JavaScript є динамічно типізованою мовою, тому тип змінної може змінюватись під час виконання програми.
                <br><br>
                При іменуванні змінних, краще використовувати зрозумілі та описові назви, які відображають значення, що зберігається. Рекомендується використовувати камелкейс (camelCase) для складних назв змінних. Наприклад, <span class="lecture-mark">firstName</span>, <span class="lecture-mark">numberOfStudents</span>, <span class="lecture-mark">isLoggedIn</span>.
                <br><br>
                Обов'язково уникати використання однобуквених або непояснюваних скорочень, оскільки це може ускладнити зрозуміння коду іншим розробникам.
                <br><br>
                Змінні в JavaScript важливі для зберігання та маніпулювання даними. Використовуючи правильні типи змінних та назви змінних, зробить код більш зрозумілим та підтримуваним.        
            </p>
        `
    },
    {
        day: 7,
        level: 'elementary',
        title: 'Вступ в JavaScript',
        lecture: `
            <p loremdasff class="lecture__paragraph">
                
            </p>
        `
    },
    {
        day: 8,
        level: 'elementary',
        title: 'Вступ в JavaScript',
        lecture: `
            <p loremdasff class="lecture__paragraph">
                
            </p>
        `
    },
    {
        day: 9,
        level: 'elementary',
        title: 'Вступ в JavaScript',
        lecture: `
            <p loremdasff class="lecture__paragraph">
                
            </p>
        `
    },
    {
        day: 10,
        level: 'elementary',
        title: 'Вступ в JavaScript',
        lecture: `
            <p loremdasff class="lecture__paragraph">
                
            </p>
        `
    },
    
];

const diaryList = document.querySelector('.diary__list');
const lecture = document.querySelector('.lecture');
const headerDay = document.querySelector('.header__day');
const titleWebsite = document.querySelector('.title__website');
const elementaryDays = document.querySelector('.elementary-days');
const baseDays = document.querySelector('.base-days');
const advancedDays = document.querySelector('.advanced-days');
const lectureTitle = document.querySelector('.lecture__title');
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
            lecture.innerHTML += `${DATABASEDAYS[key].lecture}`

            lectureTitle.innerHTML += `${DATABASEDAYS[key].title}`
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
};

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
    window.scrollTo(0, 0);
    stateDay--;
    console.log(stateDay);

    if(stateDay <= -1){
        stateDay++;
        elem.style.background = "#9088FF";
    }else{
        lecture.innerHTML = `
            ${DATABASEDAYS[stateDay].lecture}`
        lectureTitle.innerHTML = `${DATABASEDAYS[stateDay].title}`
        headerDay.innerHTML = `${DATABASEDAYS[stateDay].day}`
        titleWebsite.innerHTML = `JS DAYS - ${DATABASEDAYS[stateDay].title}`
        backPageButton.style.background = "var(--main)";
        nextPageButton.style.background = "var(--main)";
    };
};

// Функція наступної сторінки
function nextPage(elem){
    window.scrollTo(0, 0);
    stateDay++;
    console.log(stateDay);

    if(stateDay >= 19){
        stateDay--;
        elem.style.background = "#9088FF";
    }else{
        lecture.innerHTML = `
        ${DATABASEDAYS[stateDay].lecture}`
        lectureTitle.innerHTML = `${DATABASEDAYS[stateDay].title}`
        headerDay.innerHTML = `${DATABASEDAYS[stateDay].day}`
        titleWebsite.innerHTML = `JS DAYS - ${DATABASEDAYS[stateDay].title}`
        backPageButton.style.background = "var(--main)";
        nextPageButton.style.background = "var(--main)";
    };
};

// Функція для відображення мобільного меню
function mobileMenu(){
    if(menu == false){
        menuWindow.style.left = "0";
        menu = true;
    }else if(menu == true){
        menuWindow.style.left = "-100%";
        menu = false;
    };
};