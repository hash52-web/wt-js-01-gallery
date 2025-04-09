import { galleryItems } from './gallery-items.js';

// Отримуємо ul.gallery
const galleryContainer = document.querySelector('.gallery');

// Генеруємо HTML-розмітку
function createGalleryMarkup(items) {
  return items
    .map(({ description, preview, original }) => {
      return `
        <li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              alt="${description}"
            />
          </a>
        </li>
      `;
    })
    .join('');
}

// Додаємо розмітку в DOM
galleryContainer.insertAdjacentHTML('beforeend', createGalleryMarkup(galleryItems));

// Ініціалізуємо SimpleLightbox з параметрами
new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

console.log(galleryItems);
