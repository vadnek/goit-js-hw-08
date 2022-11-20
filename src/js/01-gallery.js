// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const createGalleryListMarkup = gallery =>
  gallery
    .map(
      ({ description, original, preview }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');

const galleryItemsList = createGalleryListMarkup(galleryItems);
galleryEl.insertAdjacentHTML('beforeend', galleryItemsList);

galleryEl.addEventListener('click', handlerClickInage);

let instance = null;

function handlerClickInage(event) {
  event.preventDefault();

  const targetEl = event.target;
  const targetValue = targetEl.dataset.source;

  if (!targetValue) {
    return;
  }
  instance = new SimpleLightbox('.gallery a');

//   instance = basicLightbox.create(` <img src="${targetValue}" width="800" height="600">`, {
//     onShow: () => window.addEventListener('keydown', closebyEscape),
//     onClose: () => window.removeEventListener('keydown', closebyEscape),
//   });
  instance.show();
}

function closebyEscape(event) {
  if (event.code === 'Escape') {
    instance.close();
  }
}
