/* ===========================
   VERSION 2.0 - PART 3A
=========================== */

// Loading Screen

window.addEventListener("load",()=>{

setTimeout(()=>{

const loading=document.getElementById("loading");

if(loading){

loading.style.opacity="0";

setTimeout(()=>{

loading.style.display="none";

},1000);

}

},2500);

});

// =====================
// Popup
// =====================

const popup=document.getElementById("popup");

const popupTitle=document.getElementById("popupTitle");

const popupText=document.getElementById("popupText");

function openPopup(title,text){

popupTitle.innerHTML=title;

popupText.innerHTML=text;

popup.style.display="flex";

}

function closePopup(){

popup.style.display="none";

}

// =====================
// Secret Letter
// =====================

function secretLetter(){

openPopup(

"💌 Secret Letter",

`Dear Sanehi,

Congratulations
/* ===========================
   VERSION 2.0 - PART 3B
   FIREWORKS + CONFETTI
=========================== */

// 🎆 Fireworks

function fireworksShow(){

for(let i=0;i<80;i++){

let fire=document.createElement("div");

fire.innerHTML="✨";

fire.style.position="fixed";

fire.style.left="50vw";

fire.style.top="50vh";

fire.style.fontSize=(10+Math.random()*25)+"px";

fire.style.pointerEvents="none";

fire.style.zIndex="9999";

let angle=Math.random()*360;

let distance=80+Math.random()*
/* ===========================
   VERSION 2.0 - PART 3C
   HEARTS + FLOWERS + BALLOONS
=========================== */

// ❤️ Heart Rain

function heartRain(){

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

}

// 🌸 Flower Rain

function flowerRain(){

const flowers=["🌸","🌺","🌼","🌷","💮"];

for(let i=0;i<35;i++){

let flower=document.createElement("div");

flower.className="flower";

flower.innerHTML=flowers[Math.floor(Math.random()*flowers.length)];

flower.style.left=Math.random()*100+"vw";

flower.style.animationDuration=(5+Math.random()*4)+"s";

flower.style.fontSize=(20+Math.random()*20)+"px";

document.body.appendChild(flower);

setTimeout(()=>{

flower.remove();

},10000);

}

}

// 🎈 Balloon Show

function balloonShow(){

const colors=[

"#ff1744",

"#2979ff",

"#00e676",

"#ff9100",

"#d500f9",

"#ff4081",

"#FFD700"

];

for(let i=0;i<25;i++){

let balloon=document.createElement("div");

balloon.className="balloon";

balloon.style.left=Math.random()*100+"vw";

balloon.style.background=colors[Math.floor(Math.random()*colors.length)];

balloon.style.animationDuration=(7+Math.random()*5)+"
/* ===========================
   VERSION 2.0 - PART 3D
   TROPHY + POPUP + GRAND MODE
=========================== */

// 🏆 Trophy Animation

function trophyAnimation(){

const trophy=document.querySelector(".trophy");

if(!trophy) return;

trophy.animate([

{transform:"scale(1) rotate(0deg)"},

{transform:"scale(1.25) rotate(15deg)"},

{transform:"scale(1) rotate(0deg)"}

],{

duration:1500,

iterations:1

});

}

// 💌 Secret Letter

function
/* ===========================
   VERSION 2.0 - PART 3E
   MUSIC + LIVE CLOCK + THEME
=========================== */

// 🎵 Music Controller

const bgMusic = document.getElementById("bgmusic");

function playMusic(){

if(bgMusic){

bgMusic.play().catch(()=>{});

}

}

function pauseMusic(){

if(bgMusic){

bgMusic.pause();

}

}

// ▶️ First Click Music

document.addEventListener("click",()=>{

playMusic();

},{once:true});

// 🌙 Theme Switcher

let darkMode=true;

function toggleTheme(){

if(darkMode){

document.body.style.background=
"linear-gradient(135deg,#ffffff,#e3f2fd,#f5f5f5)";

document.body.style.color="#222";

darkMode=false;

}

else{

document.body.style.background=
"linear-gradient(135deg,#1a0033,#4b0082,#7b1fa2,#311b92)";

document.body.style.color="white";

darkMode=true;

}

}

// 🕒 Live Clock

function updateClock(){

let clock=document.getElementById("clock");

if(!clock) return;

let d=new Date();

clock.innerHTML=d.toLocaleTimeString();

}

setInterval(updateClock,1000);

// ⭐ Random Title Glow

setInterval(()=>{

const title=document.querySelector(".glow");

if(title){

title.style.textShadow=

`0 0 ${10+Math.random()*35}px gold`;

}

},700);

// 🎊 Floating Celebration Emojis

const emojis=["🎉","🏆","✨","❤️","🌸","🎈"];

setInterval(()=>{

let e=document.createElement("div");

e.innerHTML=emojis[Math.floor(Math.random()*emojis.length)];

e.style.position="fixed";

e.style.left=Math.random()*100+"vw";

e.style.top="100vh";

e.style.fontSize=(20+Math.random()*25)+"px";

e.style.transition="6s linear";

e.style.pointerEvents="none";

e.style.zIndex="999";

document.body.appendChild(e);

setTimeout(()=>{

e.style.top="-20vh";

},30);

setTimeout(()=>{

e.remove();

},6500);

},700);

// 🎆 Auto Celebration Every 
/* ===========================
   VERSION 2.0 - PART 3F
   FINAL VERSION
=========================== */

// 🚀 Grand Launch

window.addEventListener("load",()=>{

setTimeout(()=>{

fireworksShow();

confettiBlast();

heartRain();

flowerRain();

balloonShow();

},3000);

});

// 🎉 Secret Triple Click

let clickCount=0;

document.addEventListener("click",()=>{

clickCount++;

if(clickCount==3){

megaCelebration();

clickCount=0;

}

setTimeout(()=>{

clickCount=0;

},1200);

});

// 🏆 Achievement Badge

function showAchievement(){

openPopup(

"🏆 Achievement Unlocked",

"🌟 Bihar Topper Celebration Completed Successfully! 🎉"

);

}

// ⌨ Secret Shortcut

document.addEventListener("keydown",(e)=>{

if(e.ctrl
