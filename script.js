/*
Функция отображения описания картинки.
Входной параметр index – номер картинки, для которой будет отображено описание.
*/
/*
Блок-схема:
1.  На вход функции поступает параметр index.
2.  Из массива descriptions извлекается описание, соответствующее этому индексу.
3.  Находится элемент с id="image-description".
4.  Если элемент найден, его текстовое содержимое устанавливается равным извлеченному описанию.
*/
function show_description(index) {
    const descriptions = [
        "Образец из новейшей коллекции на лето 2024 года. Только фирменный дизайн. Доставка по всей стране.",
        "Обратите внимание на эту подборку. Данный набор - работа лучших модельеров нашей компании. Доставляем по всей стране.",
        "Бестселлер лета 2023. Товар пользуется небывалой популярностью и в этом году. Бесплатная доставка на Дальнем Востоке.",
        "Классический вариант для вечернего коктейля. Подходит как зрелым женщинам, так и девушкам. Только фирменный дизайн.",
        "Отличный выбор для загородных поездок, пикника. Товар сделан из лёгкой ткани, через которую кожа легко дышит.",
        "Оптимальный вариант как для дружеской компании, так и для светских мероприятий. Бесплатная доставка по Северному Кавказу.",
        "Здесь представлен новый вариант из коллекции Лето 2024. Информация о товаре будет добавлена позже."
    ];

    let elem = document.getElementById("image-description");
    if (elem) {
        elem.textContent = descriptions[index];
    }
}

/*
Функция скрывает описание, когда мы уберем курсор с картинки
*/
/*
Блок-схема:
1.  Найти элемент с id="image-description".
2.  Если элемент существует, установить его текстовое содержимое в значение по умолчанию: "Наведите курсор на картинки популярных товаров и тут появятся их описания".
*/
function hide_description() {
    let elem = document.getElementById("image-description");
    if (elem) {
        elem.textContent = "Наведите курсор на картинки популярных товаров и тут появятся их описания";
    }
}

// Функция для разворачивания/сворачивания изображения
/*
Функция для разворачивания/сворачивания изображения.
*/
/*
Блок-схема:
1.  На вход поступает объект event.
2.  Получаем элемент, на котором произошло событие (event.target), обозначим его как img.
3.  Проверяем, содержит ли img класс 'expanded'.
4.  Если да:
    a.  Удаляем класс 'expanded' из img.
    b.  Удаляем слушатель события 'click' из document.body.
5.  Иначе (если класс 'expanded' отсутствует):
    a.  Добавляем класс 'expanded' к текущему img.
    b.  Добавляем слушатель события 'click' к document.body для обработки кликов вне развернутого изображения.
*/
function toggleImageSize(event) {
    const img = event.target;

    if (img.classList.contains('expanded')) {
        img.classList.remove('expanded');
        document.body.removeEventListener('click', outsideClickHandler);
    } else {
        img.classList.add('expanded');
        document.body.addEventListener('click', outsideClickHandler);
    }
}

// Обработчик клика вне развернутого изображения
/*
Обработчик клика вне развернутого изображения.
*/
/*
Блок-схема:
1.  На вход поступает объект event.
2.  Получаем развёрнутое изображение по классу expanded
3.  Проверяем, существует ли развернутое изображение (expandedImg) и не содержит ли expandedImg элемент, на котором произошел клик (event.target).
3.  Если оба условия выполняются:
    a.  Удаляем класс 'expanded' из expandedImg.
    b.  Удаляем слушатель события 'click' из document.body.
*/
function outsideClickHandler(event) {
    const expandedImg = document.querySelector('.image.expanded');
    if (expandedImg && !expandedImg.contains(event.target)) {
        expandedImg.classList.remove('expanded');
        document.body.removeEventListener('click', outsideClickHandler);
    }
}

/*
Блок-схема:
1.  После загрузки DOM (DOMContentLoaded):
2.  Найти все элементы с классами '.block-images .image' (все миниатюры).
3.  Для каждой найденной миниатюры:
    a.  Добавить обработчик события 'click', который вызывает функцию toggleImageSize.
*/
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.block-images .image');
    images.forEach(img => {
        img.addEventListener('click', toggleImageSize);
    });

    /*
    Блок-схема:

    1. После загрузки DOM (DOMContentLoaded):
    2. Инициализация переменных:
       a. seconds = 10 (начальное количество секунд).
       b. secondsLeft = seconds (оставшееся количество секунд).
       c. timer = null (переменная для хранения таймера).
       d. elementSecondsLeft = document.querySelector("#seconds-left") (элемент для отображения оставшихся секунд).
    3. Если elementSecondsLeft найден:
       a. Вызвать функцию changeSecondLeft() (отобразить начальное значение).
       b. Установить таймер: setInterval(changeSecondLeft, 1000) (вызывать changeSecondLeft каждую секунду).
    */
    let seconds = 10;
    let secondsLeft = seconds;
    let timer;
    let elementSecondsLeft = document.querySelector("#seconds-left");

    if (elementSecondsLeft) {
        changeSecondLeft();
        timer = setInterval(changeSecondLeft, 1000);
    }
   /*
    Блок-схема:
    1. Вызывается каждую секунду таймером setInterval.
    2. Если elementSecondsLeft существует:
       a. Обновить текстовое содержимое elementSecondsLeft значением secondsLeft.
    3. Если secondsLeft <= 0:
       a. Остановить таймер: clearInterval(timer).
       b. Вызвать функцию removeSale().
    4. Уменьшить secondsLeft на 1.
    */
    function changeSecondLeft() {
        if (elementSecondsLeft) {
            elementSecondsLeft.innerText = secondsLeft;
        }

        if (secondsLeft <= 0) {
            clearInterval(timer);
            removeSale();
        }
        secondsLeft--;
    }
   /*
    Блок-схема:
    1. Найти элемент p внутри элемента с классом "burning-sale".
    2. Если элемент найден, установить его innerHTML в "Ха-ха-ха, НЕ УСПЕЛ!".
    3. Найти элемент img внутри элемента с классом "burning-sale".
    4. Если элемент найден, установить его свойство style.opacity в "0".
    */
    function removeSale() {
        let p = document.querySelector(".burning-sale p");
        if (p) {
            p.innerHTML = "Ха-ха-ха, НЕ УСПЕЛ!";
        }

        let image = document.querySelector(".burning-sale img");
        if (image) {
            image.style["opacity"] = "0";
        }
    }
    /*
    Блок-схема:
    1. После загрузки DOM (DOMContentLoaded):
    2. Найти элементы с классами "preloader" и "loader__content".
    3. Если оба элемента найдены:
       a. Установить таймер: setTimeout(() => { ... }, 1000) (выполнить код через 1 секунду).
       b. Внутри таймера:
          i. Установить свойство style.opacity элемента "preloader" в "0".
          ii. Установить свойство style.visibility элемента "preloader" в "hidden".

    */
    const preloader = document.querySelector('.preloader');
    const content = document.querySelectorAll('.loader__content');
    if (preloader && content) {
        setTimeout(() => {
            preloader.style.opacity = '0';
            preloader.style.visibility = 'hidden';
        }, 1000);
    }
    /*
    Блок-схема:
    1. После загрузки DOM (DOMContentLoaded):
    2. Найти элемент с id="scrollToTop".
    3. Добавить слушатель события "scroll" к window:
       a. При прокрутке страницы:
          i. Если window.scrollY > 300 (прокрутка вниз более 300px), установить свойство style.display элемента "scrollToTop" в "block".
          ii. Иначе, установить style.display в "none".
    4. Добавить слушатель события "click" к элементу "scrollToTop":
       a. При клике:
          i. Вызвать функцию window.scrollTo({ top: 0, behavior: "smooth" }) для плавной прокрутки вверх страницы.
    */
    const scrollToTopBtn = document.getElementById("scrollToTop");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
    /*
    Блок-схема:
    1. После загрузки DOM (DOMContentLoaded):
    2. Найти элемент с классом "swiper".
    3. Если элемент найден:
    4. Инициализировать новый Swiper с настройками:
       a. пагинация:
       el: '.swiper-pagination',
       clickable: true,

       b. навигация:
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
    */
    const sliders = document.querySelector('.swiper');

    if (sliders) {
        const swiper = new Swiper(sliders, {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
});