import SwimBubble from './game';

document.addEventListener("DOMContentLoaded", function () {
  let canvas = document.getElementById('game');
  new SwimBubble(canvas);
});