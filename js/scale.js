const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

const modalElement = document.querySelector('.img-upload');
const smallerButtonElement = document.querySelector('.scale__control--smaller');
const biggerButtonElement = document.querySelector('.scale__control--bigger');
const scaleInputElement = document.querySelector('.scale__control--value');
const imageElement = document.querySelector('.img-uploadimg-upload__preview img');

const scaleImage = (value) => {
  imageElement.style.transform = `scale(${value / 100})`;
  scaleInputElement.value = `${value}%`;
}