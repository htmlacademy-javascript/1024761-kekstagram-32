/*
const PHOTO_DESCRIPTION = [
  'Я на море',
  'Я в горах',
  'Я в самолете',
]
  */

//Функция получения целого числа из диапазона
function getRandomInteger (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
}
//Генератор случаных чисел
function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const PHOTO_ID = createRandomIdFromRangeGenerator(1, 25);
const PHOTO_URL = createRandomIdFromRangeGenerator(1, 25);
const PHOTO_LIKES = createRandomIdFromRangeGenerator(15, 200);
const PHOTO_COMMENTS = createRandomIdFromRangeGenerator(0, 30);
const AVATAR_COMMMENTS = createRandomIdFromRangeGenerator(1, 6);
const ID_COMMMENTS = createRandomIdFromRangeGenerator(1, 999);
/*
const MESSAGE_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NICKNAME_COMMENTS = [
  'Ира',
  'Света',
  'Вася',
  'Петя',
  'Саша',
  'Оля'
];

*/

console.log(PHOTO_ID());
console.log(PHOTO_URL());
console.log(PHOTO_LIKES());
console.log(PHOTO_COMMENTS());
console.log(AVATAR_COMMMENTS());
console.log(ID_COMMMENTS());

/*

//Cоздает функцию для объекта
const DescribePhoto = () => {

  return {
  id: 0, //число от 1 до 25
  url: '', //строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
  description: '', //строка — описание фотографии.
  likes: 0, //число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  comments //массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии — случайное число от 0 до 30.
*/