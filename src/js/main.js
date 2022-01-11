import btn from '../images/Vector (2).png';

const item = document.querySelectorAll('.sidebar__item');

let mainTrigger = '';

let div = document.createElement('div');
div.classList.add('fade');

const img = document.createElement('img');
img.setAttribute('src', btn);
img.classList.add('btn');

const array = { Джегинсы: 1814, 'Джинсы МОМ': 1856, 'Прямы джинсы': 1256, Бойфренды: 1235 };

for (let key in array) {
  div.innerHTML += `<div class="sidebar__item subitem flex subitem__li">
    <span>${key}</span>
    <p>${array[key]}</p>
  </div>`;
}

item.forEach((el) => {
  el.addEventListener('click', (e) => {
    const target = e.currentTarget;
    item.forEach((element) => {
      element.style.backgroundColor = '';
      element.children[0].style.color = 'black';
    });
    if (mainTrigger === target) {
      div && div.remove();
      target.children[2] && target.children[2].remove();
      mainTrigger = '';
    } else {
      target.style.backgroundColor = 'rgba(44, 44, 49, 1)';
      target.children[0].style.color = 'white';
      target.appendChild(img);
      target.after(div);
      mainTrigger = target;
    }
  });
});
