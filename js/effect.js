const effect = {
  DEFAULT: 'none',
  CHROME: 'chrome',
  SEPIA: 'sepia',
  MARVIN: 'marvin',
  PHOBOS: 'phobos',
  HEAT: 'heat'
};

const effectToFilter = {
  [effect.CHROME]: {
    style: 'grayscale',
    unit: '',
  },
  [effect.SEPIA]: {
    style: 'sepia',
    unit: '',
  },
  [effect.MARVIN]: {
    style: 'invert',
    unit: '%',
  },
  [effect.PHOBOS]: {
    style: 'blur',
    unit: 'px',
  },
  [effect.HEAT]: {
    style: 'brightness',
    unit: '',
  },
};

const effectToSliderOptions = {
  [effect.DEFAULT]: {
    min: 0,
    max: 100,
    step: 1
  },
  [effect.CHROME]: {
    min: 0,
    max: 1,
    step: 0.1
  },
  [effect.SEPIA]: {
    min: 0,
    max: 1,
    step: 0.1
  },
  [effect.MARVIN]: {
    min: 0,
    max: 100,
    step: 1
  },
  [effect.PHOBOS]: {
    min: 0,
    max: 3,
    step: 0.1
  },
  [effect.HEAT]: {
    min: 1,
    max: 3,
    step: 0.1
  },
}