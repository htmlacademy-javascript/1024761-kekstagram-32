import {createArrayPhoto} from './data.js';

const PICTURES = document.querySelector('.pictures');
const PICTURE_TEMPLATE = document.querySelector('#picture').content.querySelector('picture');
const arrayPicture = createArrayPhoto();

arrayPicture.forEach((PICTURE) => {
  const CLONED_PICTURE = PICTURE_TEMPLATE.cloneNode(true);
  CLONED_PICTURE.querySelector('.picture__img').src = PICTURE.url;
  CLONED_PICTURE.querySelector('.picture__img').alt = PICTURE.description;
  CLONED_PICTURE.querySelector('.picture__likes').textContent = PICTURE.likes;
  CLONED_PICTURE.querySelector('.picture__comments').textContent = PICTURE.comments.length;
  PICTURES.appendChild(CLONED_PICTURE);
});

