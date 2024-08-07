import { renderPosts } from './pictures.js';

const picturesContainer = document.querySelector('.pictures');
const bigPicture = document.querySelector('.big-picture');
const commentCount = bigPicture.querySelector('.social__comment-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentElement = document.querySelector('#comment').content.querySelector('.social__comment');
const commentsLoader = bigPicture.querySelector('.social__comments-loader');
const body = document.querySelector('body');
const buttonClose = bigPicture.querySelector('.big-picture__cancel');


function createComment ({avatar, name, message}) {
  const clonedComment = commentElement.cloneNode(true);

  clonedComment.querySelector('.social__picture').src = avatar;
  clonedComment.querySelector('.social__picture').alt = name;
  clonedComment.querySelector('.social__text').textContent = message;

  return clonedComment;
}

const renderComments = (comments) => {
  commentsList.innerHTML = '';

  const fragment = document.createDocumentFragment();
  comments.forEach((item) => {
    const clonedComment = createComment(item);
    fragment.append(clonedComment);
  });
  commentsList.append(fragment);
};

function removeBigPicture () {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

function onDocumentKeydown(evt) {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    removeBigPicture ();
  }
}

function onButtonCloseClick () {
  removeBigPicture ();
}

const renderPictureDetails = ({url, likes, description}) => {
  bigPicture.querySelector('.big-picture__img img').alt = description;
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const showBigPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsLoader.classList.add('hidden');
  commentCount.classList.add('hidden');
  document.addEventListener('keydown', onDocumentKeydown);

  renderPictureDetails(data);
  renderComments(data.comments);
};

buttonClose.addEventListener('click', onButtonCloseClick);
export {showBigPicture};

//Перенести функцию в другой модуль
function randerGallery(pictures) {
  picturesContainer.addEventListener('click', (evt) => {
    const clonedPicture = evt.target.closest('.picture');
    console.log(clonedPicture);
    if (!clonedPicture) {
      return;
    }

   // evt.preventDefault();
    const picture = pictures.find(
      (item) => item.id === +clonedPicture.dataset.pictureId
    );
    if (picture) {
    showBigPicture(picture);
    }
  });

  renderPosts(pictures, picturesContainer);
}

export {randerGallery};

