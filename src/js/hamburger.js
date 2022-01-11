import '../styles/hamburger.scss';
import left from '../images/Group.png';

const wrapper = document.querySelector('.entry__block2'),
  filter = document.querySelector('.header__category_mobile'),
  title = document.querySelector('.header__selected_title');

const container = document.createElement('div');
const img = document.createElement('img');
img.setAttribute('src', left);
container.classList.add('hamburger__container');
container.innerHTML = `
<input type="checkbox" id="checkbox1" class="checkbox1 visuallyHidden">
<label for="checkbox1">
    <div class="hamburger hamburger1">
        <span class="bar bar1"></span>
        <span class="bar bar2"></span>
        <span class="bar bar3"></span>
        <span class="bar bar4"></span>
    </div>
</label>
`;

if (document.body.clientWidth > 500) {
  container && container.remove();
  filter.classList.remove('show');
  img.remove();
} else {
  wrapper.prepend(container);
  filter.classList.add('show');
  title.append(img);
}

window.addEventListener('resize', (e) => {
  if (document.body.clientWidth < 500) {
    wrapper.prepend(container);
    filter.classList.add('show');
    title.append(img);
  } else {
    container.remove();
    filter.classList.remove('show');
    img.remove();
  }
});
