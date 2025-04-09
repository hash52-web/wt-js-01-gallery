import { galleryItems } from './gallery-items.js';

console.log("Галерея підключена");

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join('');

galleryContainer.innerHTML = galleryMarkup;

// Обробник кліку
galleryContainer.addEventListener('click', event => {
  event.preventDefault();

  const isImage = event.target.classList.contains('gallery__image');
  if (!isImage) return;

  const imageSource = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${imageSource}" width="800" height="600">
  `);

  instance.show();

  // Закриття по Escape
  const onEscKey = e => {
    if (e.key === 'Escape') {
      instance.close();
      window.removeEventListener('keydown', onEscKey);
    }
  };

  window.addEventListener('keydown', onEscKey);
});
