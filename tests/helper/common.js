import _ from 'lodash';

const randomChars = (length) => {
  return _.sampleSize('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-=!@#$%^&*()_+`~[]{};:"\',./<>?|\\', length).join('');
};

export default {
  randomChars,
};
