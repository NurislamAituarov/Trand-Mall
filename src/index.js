import './styles/index.scss';
import './js/header';
import './js/main';
import './js/hamburger';
import './js/popUp';
import './js/item-block';
import './styles/loader.css';

window.addEventListener('load', () => {
  document.querySelector('.lds-roller').style.display = 'none';
  console.log('DOMContentLoaded');
  document.querySelector('.container').style.display = '';

  //   import('./styles/index.scss');
  //   import('./js/header');
  //   import('./js/main');
  //   import('./js/hamburger');
  //   import('./js/popUp');
  //   import('./js/item-block');
});
// import $ from 'jquery';
// import 'bootstrap';

// const userStack = {
//   language: 'JavaScript',
//   framework: 'Angular',
// };
