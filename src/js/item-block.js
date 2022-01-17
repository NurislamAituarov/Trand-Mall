const itemBlock = document.querySelectorAll('.main__content_item');
// lazy image=================================

const options = {
  root: null,
  threshold: 0.1,
};

function handleImg(myImg, observer) {
  myImg.forEach((myImgSingle) => {
    console.log(myImgSingle.intersectionRatio);

    if (myImgSingle.intersectionRatio > 0) {
      loadImage(myImgSingle.target);
    }
  });
}

function loadImage(image) {
  // image.src = image.getAttribute('data');
}

const observer = new IntersectionObserver(handleImg, options);

itemBlock.forEach((el) => {
  const img = el.children[0];

  observer.observe(img);
});

// ===============================================

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
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.50008 18.3334C7.96032 18.3334 8.33341 17.9603 8.33341 17.5001C8.33341 17.0398 7.96032 16.6667 7.50008 16.6667C7.03984 16.6667 6.66675 17.0398 6.66675 17.5001C6.66675 17.9603 7.03984 18.3334 7.50008 18.3334Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16.6666 18.3334C17.1268 18.3334 17.4999 17.9603 17.4999 17.5001C17.4999 17.0398 17.1268 16.6667 16.6666 16.6667C16.2063 16.6667 15.8333 17.0398 15.8333 17.5001C15.8333 17.9603 16.2063 18.3334 16.6666 18.3334Z" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M0.833252 0.833252H4.16658L6.39992 11.9916C6.47612 12.3752 6.68484 12.7199 6.98954 12.9652C7.29424 13.2104 7.6755 13.3407 8.06658 13.3333H16.1666C16.5577 13.3407 16.9389 13.2104 17.2436 12.9652C17.5483 12.7199 17.757 12.3752 17.8333 11.9916L19.1666 4.99992H4.99992" stroke="white" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    </div>`;

  item.addEventListener('mouseenter', () => {
    item.children[0].style.height = `${sizeMin}px`;
    item.append(div);
  });
  item.addEventListener('mouseleave', () => {
    item.children[0].style.height = `${sizeMax}px`;
    div.remove();
  });
  item.addEventListener('keydown', (e) => {
    item.children[0].style.height = `${sizeMax}px`;
    div.remove();
    if (e.code === 'Space') {
      e.preventDefault();
      item.children[0].style.height = `${sizeMin}px`;
      item.append(div);
    }
  });
});

// main block item===================================

itemBlock.forEach((item, i) => {
  const div = document.createElement('div');
  div.classList.add('item-like');
  div.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M17.3666 3.84172C16.941 3.41589 16.4356 3.0781 15.8794 2.84763C15.3232 2.61716 14.727 2.49854 14.1249 2.49854C13.5229 2.49854 12.9267 2.61716 12.3705 2.84763C11.8143 3.0781 11.3089 3.41589 10.8833 3.84172L9.99994 4.72506L9.1166 3.84172C8.25686 2.98198 7.0908 2.49898 5.87494 2.49898C4.65908 2.49898 3.49301 2.98198 2.63327 3.84172C1.77353 4.70147 1.29053 5.86753 1.29053 7.08339C1.29053 8.29925 1.77353 9.46531 2.63327 10.3251L3.5166 11.2084L9.99994 17.6917L16.4833 11.2084L17.3666 10.3251C17.7924 9.89943 18.1302 9.39407 18.3607 8.83785C18.5912 8.28164 18.7098 7.68546 18.7098 7.08339C18.7098 6.48132 18.5912 5.88514 18.3607 5.32893C18.1302 4.77271 17.7924 4.26735 17.3666 3.84172V3.84172Z" stroke="rgb(190, 190, 190)" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `;
  item.append(div);
  let trigger = '';

  item.children[0].addEventListener('click', (e) => {
    const likeBlock = document.querySelectorAll('.item-like');
    likeBlock.forEach((el, index) => {
      if (index === i) {
        if (trigger !== index) {
          el.children[0].style.fill = 'black';
          // el.children[0].style.stroke = 'black';
          trigger = index;
        } else {
          el.children[0].style.fill = 'none';
          trigger = '';
        }
      }
    });
  });
});
