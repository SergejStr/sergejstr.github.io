let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click', function () {
  offset = offset + 750;
  if (offset > 2250) {
    offset = 0;
  }
  sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function () {
  offset = offset - 750;
  if (offset < 0) {
    offset = 2250;
  }
  sliderLine.style.left = -offset + 'px';
});

var en = {
  'home': 'Home',
  'store': 'Store',
  'contact': 'Contact Us'
};
var ru = {
  'home': 'Главная',
  'store': 'Магазин',
  'contact': 'Контакты'
};

function changeLang(lan) {
  lengthObj = Object.getOwnPropertyNames(lan).length;
  for (var i = 0; i <= lengthObj - 1; i++) {
    objKey = Object.getOwnPropertyNames(lan)[i];
    document.getElementById(objKey).innerText = func(objKey);
  }

  function func(a) {
    for (key in lan) {
      if (key == a) {
        return (lan[key]);
      }
    }
  }
};
function openMenu() {
  document.getElementById("sidebar").classList.toggle('active');
}
