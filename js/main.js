const PHOTO_ID = createRandomIdFromRangeGenerator(1, 25);
const PHOTO_URL = createRandomIdFromRangeGenerator(1, 25);
const PHOTO_LIKES = createRandomIdFromRangeGenerator(15, 200);
const PHOTO_COMMENTS = createRandomIdFromRangeGenerator(0, 30);
const AVATAR_COMMENTS = createRandomIdFromRangeGenerator(1, 6);
const ID_COMMMENTS = createRandomIdFromRangeGenerator(1, 999);

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
console.log(AVATAR_COMMENTS());
console.log(ID_COMMMENTS());


//Cоздает функцию для объекта
const DescribePhoto = () => {
  const RandomId = PHOTO_ID();
  const RandomUrl = `photos/${PHOTO_URL()}.jpg`;
  const RandomLikes = PHOTO_LIKES();
  return {
    id: RandomId,
    url: RandomUrl,
    likes: RandomLikes,
    comments: []
  };
};

DescribePhoto();
console.log(DescribePhoto());
