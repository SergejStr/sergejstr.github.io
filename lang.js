var en = {
    'home': 'Home',
    'store': 'Store',
    'contact': 'Contact Us',
    'namestore': 'SuperMega iStore',
    'corporateadress': 'Corporate Address',
    'maps': 'Maps',
    'socnetwork': 'Social Network'
  };
  var ru = {
    'home': 'Главная',
    'store': 'Магазин',
    'contact': 'Контакты',
    'namestore': 'СуперМега iМагазин',
    'corporateadress': 'Адрес Корпорации',
    'maps': 'Карты',
    'socnetwork': 'Социальные сети'
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
  }