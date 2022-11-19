import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const localStorageKey = 'videoplayer-current-time';

function onTimeUpDate(evt) {
  localStorage.setItem(localStorageKey, evt.seconds);
}
const saveTime = localStorage.getItem(localStorageKey);
console.log(saveTime);
if (saveTime) {
  player.setCurrentTime(saveTime);
}
player.on('timeupdate', throttle(onTimeUpDate, 1000));