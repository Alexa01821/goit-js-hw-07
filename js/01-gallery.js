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
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
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

galleryListElement.addEventListener(
  "click",
  onClickGallery
);
function onClickGallery(event) {
  event.preventDefault();
  if (event.target.tagName !== "IMG") {
    return;
  }
  const imageOrg = event.target.dataset.source;
  const instance = basicLightbox.create(`
  <img src="${imageOrg}" width="800" height="600">
`);
  instance.show();

  galleryListElement.addEventListener(
    "keydown",
    onCloseModal
  );
  function onCloseModal(evt) {
    if (evt.code !== "Escape") {
      return;
    }
    instance.close();
  }
}
