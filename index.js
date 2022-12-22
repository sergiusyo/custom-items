const element = document.querySelector('.js-choice');

const choices = new Choices(element, {
  searchEnabled: false,
  allowHTML: true,
  itemSelectText: "",
  placeholderValue: 'Материал'
});


/*yandex-map*/

// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("myMap", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [48.872185, 2.354224],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 9,
  });

  // Создание геообъекта с типом точка (метка).
  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point", // тип геометрии - точка
      coordinates: [48.872185, 2.354224] // координаты точки
    }
  });


  var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/Subtract.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -42],
  });


  // Размещение геообъекта на карте.

  myMap.geoObjects.add(myPlacemark);
}



/*validation, Inputmask*/
let selector = document.querySelector("#tel");
let im = new Inputmask("+7(999)-999-99-99");

im.mask(selector);


let validation = new JustValidate('#form', {
  errorLabelStyle: {
    color: '#FF5C00'
  }
})

validation.addField("#name", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели имя'
  },

  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Минимум 2 символа'
  },

  {
    rule: 'maxLength',
    value: 20,
    errorMessage: 'Максимум 20 символов'
  },
])

  .addField("#email", [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели e-mail',
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный e-mail',
    },
  ])

  .addField("#tel", [
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length > 0)
      },
      errorMessage: 'Вы не ввели телефон'
    },
    {
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Boolean(Number(phone) && phone.length === 10)
      },
      errorMessage: 'Введите не более 10 символов'
    },
  ])


/*tooltip*/
tippy('#ToolTip', {
  content: "Глава 2, страница 176"
});
