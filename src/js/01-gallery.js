// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryListEl = document.querySelector('.gallery');

function createMarkupGalleryItems(Items) {
  const markup = Items.map(({ preview, original, description }) => {
    return `  <li class="gallery__item">
          <a href="${original}"><img src="${preview}" alt="" title="${description}"/></a>
      </li>`;
  });
  markup.join('');
  galleryListEl.insertAdjacentHTML('beforeend', markup);
}
createMarkupGalleryItems(galleryItems);

galleryListEl.addEventListener('click', handlerClick);

function handlerClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('gallery')) {
    return;
  }
  const lightbox = new SimpleLightbox('.gallery a');
}
