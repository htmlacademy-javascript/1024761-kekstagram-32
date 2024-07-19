import {createArrayPhoto} from './data.js';

const pictures = document.querySelector('.pictures');
const picturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
const arrayPicture = createArrayPhoto();
const fragment = document.createDocumentFragment();

arrayPicture.forEach((picture) => {
  const clonedPicture = picturesTemplate.cloneNode(true);
  clonedPicture.querySelector('.picture__img').src = picture.url;
  clonedPicture.querySelector('.picture__img').alt = picture.description;
  clonedPicture.querySelector('.picture__likes').textContent = picture.likes;
  clonedPicture.querySelector('.picture__comments').textContent = picture.comments.length;
  fragment.appendChild(clonedPicture);
});

pictures.appendChild(fragment);
