function goToCart() {
    window.location.href = "shopping-cart.html";
}
//(https://www.w3schools.com/howto/howto_js_redirect_webpage.asp, Date retrieved: December 3, 2023)

function toggleSearchTab() {
    var searchTab = document.getElementById('searchTab');
    searchTab.style.display = (searchTab.style.display === 'block') ? 'none' : 'flex';
}

function closeSearchTab() {
    document.getElementById('searchTab').style.display = 'none';
}
//(https://www.javascripttutorial.net/dom/css/toggle-an-element/, Date retrieved: December 3, 2023)
//(https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp, Date retrieved: December 3, 2023)
//(https://w3bits.com/javascript-toggle-display/, Date retrieved: December 3, 2023)

function showSaleBanner() {
    var saleBanner = document.getElementById('saleBanner');
    saleBanner.style.bottom = '0';

    setTimeout(function() {
        saleBanner.style.bottom = '-100px';
    }, 15000);
}
//(https://stackoverflow.com/questions/6242976/javascript-hide-show-element, Date retrieved: December 3, 2023)

function randomBanner() {

    var interval = Math.random() * (40000 - 20000) + 20000;

    showSaleBanner();

    setTimeout(randomBanner, interval);
}

randomBanner();

function startSaleCountdown(endTime) {
    var countdown = document.getElementById('saleCountdown');
    var showText = true;

    var interval = setInterval(function () {
        var now = new Date().getTime();
        var distance = endTime - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (showText) {
            countdown.innerText = "Sale ends in:";
        } else {
            countdown.innerText = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        }
        showText = !showText;

        if (distance < 0) {
            clearInterval(interval);
            countdown.innerText = "SALE ENDED";
        }
    }, 5000);
}
//(https://www.w3schools.com/howto/howto_js_countdown.asp, Date retrieved: December 3, 2023)
//(https://stackoverflow.com/questions/20618355/how-to-write-a-countdown-timer-in-javascript, Date retrieved: December 3, 2023)

var endTime = new Date('December 31, 2023 12:00:00').getTime() + 24 * 60 * 60 * 1000;
startSaleCountdown(endTime);

document.addEventListener("DOMContentLoaded", function () {
//(https://www.javascripttutorial.net/javascript-dom/javascript-domcontentloaded/, Date retrieved: December 3, 2023)

    var learnMore1 = document.getElementById('learnMore1');
    var learnMore2 = document.getElementById('learnMore2');
    var learnMore3 = document.getElementById('learnMore3');

    learnMore1.addEventListener('click', function () {
        window.location.href = 'su-27.html';
    });

    learnMore2.addEventListener('click', function () {
        window.location.href = 'kingtiger.html';
    });

    learnMore3.addEventListener('click', function () {
        window.location.href = 'Yamato.html';
    });
});


document.addEventListener("DOMContentLoaded", function () {
    var carouselContainer = document.querySelector('.carousel-container');
    var images = carouselContainer.querySelectorAll('img');
//(https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll, Date retrieved: December 3, 2023)

    var currentIndex = 0;
    var totalImages = images.length;

    function showNextImage() {
        images[currentIndex].style.display = 'none';

        currentIndex = (currentIndex + 1) % totalImages;

        images[currentIndex].style.display = 'block';
    }

    var carouselInterval = setInterval(showNextImage, 10000);
});
//(https://www.w3schools.com/howto/howto_js_slideshow.asp, Date retrieved: December 3, 2023)

function addToCart() {
    var quantity = document.getElementById('quantityInput').value;
    alert('Added ' + quantity + ' item(s) to the cart.');
}
//(https://stackoverflow.com/questions/69785514/how-do-i-add-items-to-my-cart-using-javascript, Date retrieved: December 3, 2023)

function clearDefault(input) {
    if (input.value === input.defaultValue) {
        input.value = '';
    }
}

function restoreDefault(input) {
    if (input.value === '') {
        input.value = input.defaultValue;
    }
}

function clearDefaultSearch() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput.value === 'Search...') {
        searchInput.value = '';
    }
}

function restoreDefaultSearch() {
    var searchInput = document.getElementById('searchInput');
    if (searchInput.value === '') {
        searchInput.value = 'Search...';
    }
}
//(https://stackoverflow.com/questions/4178221/clearing-and-restoring-default-value-from-text-input, Date retrieved: December 3, 2023)
