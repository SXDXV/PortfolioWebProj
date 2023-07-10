document.addEventListener("DOMContentLoaded", function () {
    var navLinks = document.querySelectorAll(".navbar .nav-link");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            // Сохранение активной вкладки в Local Storage
            localStorage.setItem("activeTab", this.getAttribute("href"));

            // Удаление класса "active" у всех ссылок
            navLinks.forEach(function (navLink) {
                navLink.classList.remove("active");
            });
        });
    });

    // Проверка и установка активной вкладки при загрузке страницы
    var activeTab = localStorage.getItem("activeTab");

    // Если нет сохраненной активной вкладки, выделите первую вкладку
    if (!activeTab) {
        var firstNavLink = document.querySelector('.navbar .nav-link');
        firstNavLink.classList.add("active");
        activeTab = firstNavLink.getAttribute("href");
    }

    // Установка активной вкладки
    document.querySelector('.navbar .nav-link[href="' + activeTab + '"]').classList.add("active");
    localStorage.removeItem("activeTab");


    var header = document.querySelector(".background-image");
    var block = document.querySelector(".block");
    var breathingObject = document.querySelector(".breathing-object")

    function updateMarginTop() {
        block.style.top = 0;
        var headerHeight = header.offsetHeight;

        breathingObject.style.transform = "scale(1)";
        block.style.top = headerHeight + "px";
    }

    // Вызов функции для первоначального установления отступа
    updateMarginTop();

    // Обработчик события resize
    window.addEventListener("resize", function () {
        updateMarginTop();
    });
});