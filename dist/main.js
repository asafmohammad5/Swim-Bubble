!function(t){var s={};function e(i){if(s[i])return s[i].exports;var h=s[i]={i:i,l:!1,exports:{}};return t[i].call(h.exports,h,h.exports,e),h.l=!0,h.exports}e.m=t,e.c=s,e.d=function(t,s,i){e.o(t,s)||Object.defineProperty(t,s,{enumerable:!0,get:i})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,s){if(1&s&&(t=e(t)),8&s)return t;if(4&s&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&s&&"string"!=typeof t)for(var h in t)e.d(i,h,function(s){return t[s]}.bind(null,h));return i},e.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(s,"a",s),s},e.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},e.p="",e(e.s=0)}([function(t,s,e){"use strict";e.r(s);const i={BUBBLE_SPEED:[-1,-1.3,-1.5,-1.8,-2,-2.1],BUBBLE_DISTANCE:280,BUBBLE_WIDTH:28};class h{constructor(t){this.dimensions=t,this.score=0,this.coral=new Image,this.coral.src="./assets/images/coral.png",this.bubbles=[{x:4*i.BUBBLE_DISTANCE,y:this.bubblePosition()},{x:5*i.BUBBLE_DISTANCE,y:this.bubblePosition()},{x:6*i.BUBBLE_DISTANCE,y:this.bubblePosition()}],this.smallBubbles=[{x:this.bubblePositionX(),y:this.dimensions.height+this.bubblePositionY()},{x:this.bubblePositionX(),y:this.dimensions.height+this.bubblePositionY()},{x:this.bubblePositionX(),y:this.dimensions.height+this.bubblePositionY()},{x:this.bubblePositionX(),y:this.dimensions.height+this.bubblePositionY()},{x:this.bubblePositionX(),y:this.dimensions.height+this.bubblePositionY()}],this.sound()}gotBubble(t){let s=this.bubbles[0];if(s.x>=t.tLeft[0]-25&&s.x<=t.bRight[0]+25&&s.y>=t.tLeft[1]-25&&s.y<=t.bRight[1]+25)this.removeBubble(),this.scoreBubble.play(),this.score+=25;else{if(s.x+this.dimensions.width/4+28<t.tLeft[0])return!1;if(t.bRight[1]<=48||t.bRight[1]>=740)return-1}}removeBubble(){let t=this.bubbles.shift();t.x=this.bubbles[1].x+1.8*i.BUBBLE_DISTANCE,t.y=this.bubblePosition(),this.bubbles.push(t)}drawBackground(t){const s=t.createLinearGradient(30,700,-30,-230);s.addColorStop(0,"blue"),s.addColorStop(1,"white"),t.fillStyle=s,t.fillRect(0,0,this.dimensions.width,this.dimensions.height),t.drawImage(this.coral,0,700,100,100),t.drawImage(this.coral,100,700,100,100),t.drawImage(this.coral,200,700,100,100),t.drawImage(this.coral,300,700,100,100),t.drawImage(this.coral,400,700,100,100),t.drawImage(this.coral,500,700,100,100),t.drawImage(this.coral,600,700,100,100),t.drawImage(this.coral,700,700,100,100),t.drawImage(this.coral,800,700,100,100),t.drawImage(this.coral,900,700,100,100)}frame(t){this.moveBubble(),this.moveBubbles(),this.drawBackground(t),t.fillStyle="white",t.font="bold 22px Arial",t.fillText(`Score: ${this.score}`,this.dimensions.width/1.15,this.dimensions.height/20),this.drawBubble(t),this.drawSmallBubble(t)}moveBubble(){for(let t=0;t<this.bubbles.length;t++){const s=this.bubbles[t];if(s.x<0-i.BUBBLE_WIDTH){let t=this.bubbles.shift();t.x=this.bubbles[1].x+1.8*i.BUBBLE_DISTANCE,t.y=this.bubblePosition(),this.bubbles.push(t)}this.score<=125?s.x+=i.BUBBLE_SPEED[0]:this.score<=250?s.x+=i.BUBBLE_SPEED[1]:this.score<=475?s.x+=i.BUBBLE_SPEED[2]:this.score<=800?s.x+=i.BUBBLE_SPEED[3]:this.score<=1200?s.x+=i.BUBBLE_SPEED[4]:s.x+=i.BUBBLE_SPEED[5]}}moveBubbles(){for(let t=0;t<this.smallBubbles.length;t++){const s=this.smallBubbles[t];if(s.y<-8){let t=this.smallBubbles.shift();t.y=this.dimensions.height+this.bubblePositionY(),t.x=this.bubblePositionX(),this.smallBubbles.push(t)}s.y+=2.5*i.BUBBLE_SPEED[0]}}drawBubble(t){for(let s=0;s<this.bubbles.length;s++){const e=this.bubbles[s];e.x<this.dimensions.width&&(t.beginPath(),t.arc(e.x,e.y,i.BUBBLE_WIDTH,0,2*Math.PI),t.fillStyle="rgba(0, 0, 0, 0)",t.fill(),t.strokeStyle="#FFFFFF",t.stroke())}}drawSmallBubble(t){for(let s=0;s<this.smallBubbles.length;s++){const e=this.smallBubbles[s];e.y<this.dimensions.height&&(t.beginPath(),t.arc(e.x,e.y,8,0,2*Math.PI),t.fillStyle="rgba(0, 0, 0, 0)",t.fill(),t.strokeStyle="#FFFFFF",t.stroke())}}sound(){this.scoreBubble=new Audio("./assets/sounds/got-bubble.wav")}bubblePosition(){let t=Math.floor(800*Math.random());for(;t<100||t>687;)t=Math.floor(800*Math.random());return t}bubblePositionX(){let t=Math.floor(1e3*Math.random());for(;t<25||t>975;)t=Math.floor(1e3*Math.random());return t}bubblePositionY(){let t=Math.floor(200*Math.random());for(;t<25||t>180;)t=Math.floor(200*Math.random());return t}}const a={PULL:.016,SWIMMER_HEIGHT:60,SWIMMER_WIDTH:60,SWIM_SPEED:-1.7};class n{constructor(t){this.speed=a.PULL,this.dimensions=t,this.y=this.dimensions.height/2.2,this.x=this.dimensions.width/4,this.swimmer=new Image,this.swimmer.src="./assets/images/dolphin.png"}swimmerBoundaries(){return{tLeft:[this.x,this.y],bRight:[this.x+a.SWIMMER_WIDTH,this.y+a.SWIMMER_HEIGHT]}}drawSwimmer(t){t.clearRect(0,0,0,0),t.drawImage(this.swimmer,this.x,this.y,80,80)}frame(t){this.move(),this.drawSwimmer(t)}move(){this.y+=this.speed,this.speed+=a.PULL}swim(){this.speed=a.SWIM_SPEED}}const o=[100,250,475,800,1200,1600,2e3];class l{constructor(t){this.playing=!1,this.ctx=t.getContext("2d"),this.dimensions={width:t.width,height:t.height},this.lives=3,t.addEventListener("click",this.click.bind(this)),this.start=this.start.bind(this),this.begin=this.begin.bind(this),this.muteToggle=this.muteToggle.bind(this),this.pauseToggle=this.pauseToggle.bind(this),this.gameAbout=document.getElementById("game-about"),this.gameRestart=document.getElementById("game-restart");const s=document.getElementById("game-button"),e=document.getElementById("game-button-1");this.pauseDiv=document.getElementById("pause-div"),this.musicButton=document.getElementById("mute-button"),this.pauseButton=document.getElementById("pause-button"),s.addEventListener("click",t=>{this.select.play(),this.begin(),this.start(),this.gameAbout.className="hidden",this.pauseDiv.className=""}),e.addEventListener("click",t=>{this.select.play(),this.begin(),this.start(),this.gameRestart.className="hidden",this.pauseDiv.className=""}),this.musicButton.addEventListener("click",t=>{this.select.play(),this.muteToggle()}),this.pauseButton.addEventListener("click",t=>{this.select.play(),this.pauseToggle()}),this.begin(),this.frame(),this.mutedMusic=!1,this.paused=!1,this.createSounds()}begin(){this.level=new h(this.dimensions),this.swimmer=new n(this.dimensions)}addLife(){this.lives+=1}frame(){this.level.frame(this.ctx),this.ctx.fillStyle="white",this.ctx.font="bold 23px Arial",this.ctx.fillText(`Breathe: ${this.lives}`,this.dimensions.width/33,this.dimensions.height/20),this.swimmer.frame(this.ctx),o.includes(this.level.score)&&(o.shift(),this.addLife()),-1===this.level.gotBubble(this.swimmer.swimmerBoundaries())?(this.playing=!1,this.gameMusic.pause(),this.gameOver.play(),this.pauseDiv.className="hidden",this.gameRestart.className="game-restart",this.lives=3):0===this.lives?(this.playing=!1,this.gameMusic.pause(),this.gameOver.play(),this.pauseDiv.className="hidden",this.gameRestart.className="game-restart",this.lives=3):!1===this.level.gotBubble(this.swimmer.swimmerBoundaries())&&(this.lives=this.lives-1),this.playing&&(this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(this.frame.bind(this)))}start(){this.playing=!0,this.mutedMusic||(this.gameMusic.volume=.3,this.gameMusic.play()),this.frame()}click(){this.playing&&(this.swimmer.swim(),this.swim.play())}createSounds(){this.gameMusic=new Audio("./assets/sounds/game-music.wav"),this.select=new Audio("./assets/sounds/select.wav"),this.swim=new Audio("./assets/sounds/swim.wav"),this.gameOver=new Audio("./assets/sounds/game-over.wav"),this.gameMusic.loop=!0}muteToggle(t){return this.mutedMusic?(this.musicButton.className="music-button",this.mutedMusic=!1,this.playing&&(this.gameMusic.volume=.3,this.gameMusic.play())):(this.musicButton.className="muted",this.mutedMusic=!0,this.gameMusic.pause()),this.mutedMusic}pauseToggle(t){return this.paused?(this.pauseButton.className="paused",this.paused=!1,this.start()):(this.pauseButton.className="pause-button",this.paused=!0,this.gameMusic.pause(),this.playing=!1),this.playing}}document.addEventListener("DOMContentLoaded",(function(){let t=document.getElementById("game");new l(t)}))}]);