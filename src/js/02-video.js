import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onCurrantTime, 1000));
function onCurrantTime(data) {
  const currantTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currantTime);
  console.log(currantTime);
}
const getCurrantTimeValue = localStorage.getItem('videoplayer-current-time');
if (getCurrantTimeValue) {
  player.setCurrentTime(getCurrantTimeValue);
}