const menu = document.querySelector('.menu__mobile'),
  menuList = document.querySelector('.header__filter_name'),
  filter = document.querySelector('.header__filter'),
  menuBtn = document.querySelector('.hamburger__container'),
  header = document.querySelector('.header__entry'),
  checkbox = document.querySelector('#checkbox1');
let trigger = 'show';

function showMenu(e) {
  if (e.target === checkbox) {
    switch (trigger) {
      case 'show':
        menuList.style.display = 'block';
        header.append(menuList);
        trigger = 'hidden';
        break;
      case 'hidden':
        menuList.style.display = 'none';
        menuList.remove();
        trigger = 'show';
        break;
    }
  }
}

window.addEventListener('resize', () => {
  if (document.body.clientWidth < 400) {
    const menu = document.querySelector('.menu__mobile'),
      menuList = document.querySelector('.header__filter_name'),
      menuBtn = document.querySelector('.hamburger__container'),
      header = document.querySelector('.header__entry'),
      checkbox = document.querySelector('#checkbox1');

    menuBtn.addEventListener('click', (e) => {
      if (e.target === checkbox) {
        // console.log(e.target);
        switch (trigger) {
          case 'show':
            menuList.style.display = 'block';
            header.append(menuList);
            trigger = 'hidden';
            break;
          case 'hidden':
            menuList.style.display = 'none';
            menuList.remove();
            trigger = 'show';
            break;
        }
      }
    });
  }
});

menuBtn && menuBtn.addEventListener('click', showMenu);

// popUp======================================================================

const entry = document.querySelector('#entry__block2_entry'),
  entryBlock = document.querySelector('.entry__block2_entry'),
  popUp = document.querySelector('.popUpContainer'),
  btn = document.querySelector('[type="submit"]'),
  form = document.querySelector('form'),
  input = document.querySelectorAll('.input__text'),
  inpEmail = document.querySelector('#email'),
  inpPassword = document.querySelector('#password'),
  inpCheckbox = document.querySelector('#checkboxIdentifier'),
  close = document.querySelector('.close'),
  triggerPassword = document.querySelector('#passwordTrigger');

// ////////////////////////=========================================================
function hidden() {
  popUp.style.display = 'none';
  document.querySelector('html').style.overflow = '';
}

////validation===================================

input.forEach((el) => {
  el.addEventListener('input', (e) => {
    if (e.target === inpPassword) {
      e.target.value = e.target.value.toLowerCase();
    } else {
      e.target.value = e.target.value[0].toUpperCase() + e.target.value.substring(1);
    }

    // if (e.target.value.match(/\d/g)) {
    //   e.target.style.border = '1px solid red';
    // } else {
    //   e.target.style.border = '';
    // }
  });
});

let password = false;
triggerPassword.addEventListener('click', (e) => {
  if (!password) {
    inpPassword.setAttribute('type', 'text');
    password = true;
  } else {
    inpPassword.setAttribute('type', 'password');
    password = false;
  }

  if (inpPassword.getAttribute('type') === 'text') {
    triggerPassword.style.fill = 'green';
  } else {
    triggerPassword.style.fill = '';
  }
});

///////////////////timer popUp================================================
const timer = setTimeout(() => {
  popUp.style.display = 'block';
  document.querySelector('html').style.overflow = 'hidden';
}, 5000);

entry.addEventListener('click', () => {
  clearTimeout(timer);
  popUp.style.display = 'block';
  document.querySelector('html').style.overflow = 'hidden';
});

///////////////////////SUBMIT=========================================

const p = document.createElement('p');
p.innerHTML = 'Выйти';
p.style.marginLeft = '10px';

let date = new Date(Date.now() + 86400e3);
date = date.toUTCString();

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (inpEmail.value !== '' && inpPassword.value !== '') {
    const newForm = new FormData(form);
    const object = {};
    newForm.forEach((item, i) => (object[i] = item));
    object['remember'] = inpCheckbox.checked;
    console.log(object);

    if (object.remember === true) {
      document.cookie = `email=${object.email}; expires=${date}`;
      document.cookie = `password=${object.password}; expires=${date}`;
      document.cookie = `remember=${object.remember}; expires=${date}`;
    } else {
      console.log('false');
      document.cookie = `email=${object.email}`;
      document.cookie = `password=${object.password}`;
      document.cookie = `remember=${object.remember}`;
    }

    entry.innerHTML = `${cookieEmail.toUpperCase()}`;
    clearTimeout(timer);
    entryBlock.append(p);

    triggerPassword.style.fill = '';
    inpPassword.setAttribute('type', 'password');
    input.forEach((el) => (el.value = ''));
    inpCheckbox.checked = false;
    document.querySelector('.error') &&
      document.querySelectorAll('.error').forEach((el) => el.remove());
    hidden();
  } else {
    input.forEach((el) => {
      const div = document.createElement('div');
      div.innerHTML = 'Обязательное поля';
      div.classList.add('error');

      if (el.value === '' && ![...el.parentElement.children][2]) {
        el.parentElement.append(div);
      }
      if (el.value !== '') {
        [...el.parentElement.children][2] && [...el.parentElement.children][2].remove();
      }
    });
  }
});

close.addEventListener('click', () => {
  hidden();
});
popUp.addEventListener('click', (e) => {
  if (e.target === popUp) {
    hidden();
  }
});

// COOKIE==========================================================================
function getCookie(name) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length == 2) return parts.pop().split(';').shift();
}
const cookieRemember = getCookie('remember');
const cookieEmail = getCookie('email');

if (cookieRemember === 'true') {
  entry.innerHTML = `${cookieEmail.toUpperCase()}`;
  clearTimeout(timer);
  entryBlock.append(p);
} else {
  p.remove();
}

p.addEventListener('click', () => {
  document.cookie = 'remember=;  expires=-1';
  p.remove();
});

function deleteCookie(name) {
  setCookie(name, '', {
    'max-age': -1,
  });
}
