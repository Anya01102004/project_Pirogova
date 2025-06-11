/*
Функция отображения описания картинки.
Входной параметр index – номер картинки, для которой будет отображено
описание. Отсчет идет с 0.
*/
function show_description(index){
    /*Создадим массив с описаниями картинок в том порядке, в каком они
   отображаются*/
    const descriptions=[
        "Образец из новейшей коллекции на лето 2024 года. Только фирменный дизайн. Доставка по всей стране.",

        "Обратите внимание на эту подборку. Данный набор - работа лучших модельеров нашей компании. Доставляем по всей стране.",

        "Бестселлер лета 2023. Товар пользуется небывалой популярностью и в этом году. Бесплатная доставка на Дальнем Востоке.",

        "Классический вариант для вечернего коктейля. Подходит как зрелым женщинам, так и девушкам. Только фирменный дизайн.",

        "Отичный выбор для загородных поездок, пикника. Товар сделан из лёгкой ткани, через которую кожа легко дышит.",

        "Оптимальный вариант как для дружеской компании, так и для светских мероприятий. Бесплатная доставка по Северному Кавказу.",

        "Здесь представлен новый вариант из коллекции Лето 2024. Информация о товаре будет бодавлена позже."
    ];    
     //Ищем элемент с id="image-description"
 let elem=document.getElementById("image-description");
 //В этот элемент и выводим описание
 elem.textContent = descriptions[index];
}
/*
Функция скрывает описание, когда мы уберем курсор с картинки
*/
function hide_description(){
    //Ищем элемент с id="image-description"
    let elem = document.getElementById("image-description");
    //Указываем в элемент текст по умолчанию
    elem.textContent =
    "Наведите курсор на картинки популярных товаров и тут появятся их описания";
    }
    
// Установить количество секунд для отсчета
let seconds = 10;
/*Переменная хранит количество секунд, которое осталось до исчезновения
промокода. Изначально равно количеству секунд для отсчета*/
let secondsLeft = seconds;
/* Переменная-таймер используется для периодического вызова какой-либо
функции*/
let timer;
/*Получим элемент с идентификатором seconds-left, в который будет выводит
оставшееся количество секунд*/
let elementSecondsLeft = document.querySelector("#seconds-left");
//Если нашли такой элемент, то выполним следующие действия:
if (elementSecondsLeft) {
/*Сразу выводим в этот элемент оставшееся количество секунд путем вызова
функции changeSecondLeft()*/
changeSecondLeft();
/*Запускаем таймер, который будет вызывать эту же функцию
changeSecondLeft() чрез каждые 1000 милисекунд (т.е. через каждую секунду)*/
timer = setInterval(changeSecondLeft, 1000);
}

//Функция вывода в элемент elementSecondsLeft оставшегося количества секунд
function changeSecondLeft() {
    elementSecondsLeft.innerText = secondsLeft;
    /*Если осталось 0 секунд, то останавливаем таймер с помощью
    clearInterval() и вызываем функцию удаления изображения промокода и изменения
    текста*/
    if (secondsLeft <= 0) {
    clearInterval(timer);
    removeSale();
    }
    //Уменьшаем оставшееся количество секунд на 1
    secondsLeft--;
    }
    //Функция удаления изображения промокода и изменения текста
    function removeSale() {
    /*Находим на странице тег абзаца текста p, расположенный внутри тега с
    классом burning-sale*/
    let p = document.querySelector(".burning-sale p");
    //Заменяем содержимое тега на новый текст
    p.innerHTML = "Ха-ха-ха, НЕ УСПЕЛ!";
    /*Находим на странице тег картинки img, расположенный внутри тега с
классом burning-sale*/
let image = document.querySelector(".burning-sale img");
/*Меняем у картинки значение CSS-свойства opacity на 0, что означает, что
элемент становится прозрачным и его не видно на странице.*/
image.style["opacity"] = "0";
}
// Preloader страницы
const preloader = document.querySelector('.preloader');
const content = document.querySelectorAll('.loader__content');
if (preloader && content) {
    setTimeout(() => {
        // Скрываем прелоадер
        preloader.style.opacity = '0';
        preloader.style.visibility = 'hidden';

        // Показываем контент
       content.style.display = 'block';

        // Удаляем элемент из DOM
        preloader.remove();
    }, 1000); // Задержка 3 секунды
}
// Кнопка прокрутки вверх
document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.getElementById("scrollToTop");

    // Показываем кнопку при прокрутке вниз
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    // Прокрутка вверх при клике
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // объявляем переменную sliders,куда помещаем элемент с классом swiper
const sliders = document.querySelector('.swiper');
//проверяем существует ли элемент
    if (sliders) {  
        const swiper = new Swiper(sliders, {
            // Пагинация
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            // Навигационные стрелки
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

});



