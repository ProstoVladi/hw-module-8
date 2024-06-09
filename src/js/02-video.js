import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const TIME_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(checkTimeVideo, 1000));

function checkTimeVideo({ seconds, duration }) {
  if (seconds === duration) {
    localStorage.removeItem(TIME_KEY);
  } else {
    localStorage.setItem(TIME_KEY, seconds);
  }
}

player.setCurrentTime(localStorage.getItem(TIME_KEY));
