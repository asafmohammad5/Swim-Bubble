import SwimBubble from './game';

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('game');
  new SwimBubble(canvas);

});