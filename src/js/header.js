const popUpLiButton = document.querySelectorAll('.popUpLi'),
  popUpLi = document.querySelectorAll('.header__select_li'),
  arrow = document.querySelectorAll('.arrow'),
  inputWrapper = document.querySelector('.header__filter_search'),
  input = document.querySelector('[placeholder="Arizzo"]');

let trigger = '';

popUpLiButton.forEach((item, i) => {
  const button1 = document.createElement('button');
  const button2 = document.createElement('button');

  button1.innerHTML = 'Применить';
  button2.innerHTML = 'Удалить';

  function showCategoryLi(e) {
    popUpLi.forEach((el) => (el.style.display = 'none'));
    arrow.forEach((el) => (el.style.transform = 'rotate(0deg)'));

    if (trigger !== e.currentTarget && e.currentTarget === popUpLiButton[i]) {
      trigger = popUpLiButton[i];
      popUpLi[i].style.display = 'block';
      arrow[i].style.transform = 'rotate(-180deg)';

      popUpLi[i].append(button1);
      popUpLi[i].append(button2);
    } else {
      // popUpLi.forEach((el) => (el.style.display = 'none'));
      // arrow.forEach((el) => (el.style.transform = 'rotate(0deg)'));

      trigger = '';
    }
  }

  item.addEventListener('click', showCategoryLi);
});
