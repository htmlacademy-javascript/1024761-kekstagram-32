const PICTURES = document.querySelector('.pictures');
const PICTURE_TEMPLATE = document.querySelector('#picture').content.querySelector('picture');
const PICTURE = CLONED_PICTURE;

const CLONED_PICTURE = PICTURE_TEMPLATE.cloneNode(true);
CLONED_PICTURE.querySelector('.picture_img').src = PICTURE.url;
CLONED_PICTURE.querySelector('.picture_img').alt = PICTURE.description;
CLONED_PICTURE.querySelector('.picture_likes') = PICTURE.likes;
CLONED_PICTURE.querySelector('.picture__comments') = PICTURE.comments.length;


