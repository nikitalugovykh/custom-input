/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

// фильтр на мобильном устройстве
const sidebarToggleBtn = document.querySelector('.toggle-sidebar');
const sidebarBurger = document.querySelector('.toggle-sidebar__burger');
const sidebar = document.querySelector('.sidebar');

sidebarToggleBtn.onclick = function () {
    sidebarBurger.classList.toggle('active');
    sidebar.classList.toggle('sidebar--mobile-active')
};

// Показать еще 3 карточки
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
    });
    
});

// Показать/скрыть контент внутри виджетов

const widgets = document.querySelectorAll('.widget');

widgets.forEach(function(widget) {
    widget.addEventListener('click' , function (event) {
        if(event.target.classList.contains('widget__title')) {
            event.target.classList.toggle('widget__title--active');
            event.target.nextElementSibling.classList.toggle('widget__body--hidden')
        }
    })
})

// location - кнопка любая

const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckBoxes = document.querySelectorAll('[data-location-param]')
// клик по кнопке любая и отключение других чекбоксов
checkBoxAny.addEventListener('change', function() {
    if(checkBoxAny.checked) {
        topLocationCheckBoxes.forEach(function(item) {
            item.checked = false;
        })
    }
}) 

// клик по кнопкам для сброса состояния кнопки любая 
topLocationCheckBoxes.forEach(function(item) {
    item.addEventListener('change', function() {
        checkBoxAny.checked = false;
    })
})

// показать еще 3 дополнительных опции в фильтре 

const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddencheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function(e) {
    // отмена стандартного поведения
    e.preventDefault();
    // если блоки были скрыты, значит показываем 
    if(showMoreOptions.dataset.options == 'hidden') {

        hiddencheckBoxes.forEach(function(item) {
            item.style.display = 'block';
        })
        // showMoreOptions.remove();
        showMoreOptions.innerText = 'Скрыть дополнительные опции';
        showMoreOptions.dataset.options = 'visible';

    } 
    // если блоки были показаны, значит скрываем 
    else if (showMoreOptions.dataset.options == 'visible') {

    hiddencheckBoxes.forEach(function(item) {
        item.style.display = 'none';
    })
    showMoreOptions.innerText = 'Показать еще';
    showMoreOptions.dataset.options = 'hidden';
    }
}