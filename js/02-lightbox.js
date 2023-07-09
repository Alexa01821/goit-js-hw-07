import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListElement =
  document.querySelector(".gallery");

const createGalleryArray = galleryItems
  .map(({ preview, original, description }) => {
    const createItem = `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
</li>
    `;
    return createItem;
  })
  .join("");

galleryListElement.insertAdjacentHTML(
  "beforeend",
  createGalleryArray
);

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
 });