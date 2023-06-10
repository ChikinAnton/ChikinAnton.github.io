
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

    if(stateDay >= 30){
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