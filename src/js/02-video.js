import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const localStorageKey = localStorage.getItem('videoplayer-current-time');

player.on(
  'timeupdate',
  throttle(time => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time.seconds));
  }, 1000),
);

player
  .setCurrentTime(localStorageKey)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });