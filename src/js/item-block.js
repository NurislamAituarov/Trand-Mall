const itemBlock = document.querySelectorAll('.main__content_item');
import cart from '../images/CartWhite.png';

function sizeWidth() {
  if (document.body.clientWidth < 400) {
    sizeMin = 230;
    sizeMax = 269;
  } else {
    sizeMin = 380;
    sizeMax = 427;
  }
}
let sizeMin = 380;
let sizeMax = 427;
window.addEventListener('resize', sizeWidth);
sizeWidth();

itemBlock.forEach((item) => {
  const div = document.createElement('div');
  div.classList.add('main__content_cart');
  div.classList.add('flex');
  div.classList.add('fade');
  div.innerHTML = ` <div class="item__size flex">
                    <span>XS</span>
                    <div></div>
                    <span>S</span>
                    <div></div>
                    <span>M</span>
                    <div></div>
                    <span>L</span>
                    </div>
                    <div class="item__cart flex">
                    <p>В корзину</p>
                    <img src=${cart} alt="cart">
                    </div>`;

  item.addEventListener('mouseenter', () => {
    item.children[0].style.height = `${sizeMin}px`;
    item.append(div);
  });
  item.addEventListener('mouseleave', () => {
    item.children[0].style.height = `${sizeMax}px`;
    div.remove();
  });
});
