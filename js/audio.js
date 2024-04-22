

// let prog = document.getElementById("prog");
// let song = document.getElementById("song");
// let controlIcon = document.getElementById("controlIcon");

// song.onloadedmetadata = function () {
//   prog.max = song.duration;
//   prog.value = song.currentTime;
// };

// function playPause() {
//   if (controlIcon.classList.contains("fa-pause")) {
//     song.pause();
//     controlIcon.classList.remove("fa-pause");
//     controlIcon.classList.add("fa-play");
//   } else {
//     song.play();
//     controlIcon.classList.add("fa-pause");
//     controlIcon.classList.remove("fa-play");
//   }
// }

// prog.onchange = function () {
//   song.currentTime = prog.value;
// };

// song.onplay = function () {
//   controlIcon.classList.add("fa-pause");
//   controlIcon.classList.remove("fa-play");
// };

// song.onpause = function () {
//   controlIcon.classList.remove("fa-pause");
//   controlIcon.classList.add("fa-play");
// };

// song.ontimeupdate = function () {
//   prog.value = song.currentTime;
// };


let prog = document.getElementById("prog");
let song = document.getElementById("song");
let controlIcon = document.getElementById("controlIcon");
let currentTimeDisplay = document.getElementById("currentTime");

song.onloadedmetadata = function () {
  prog.max = song.duration;
  prog.value = song.currentTime;
};

function playPause() {
  if (controlIcon.classList.contains("fa-pause")) {
    song.pause();
    controlIcon.classList.remove("fa-pause");
    controlIcon.classList.add("fa-play");
  } else {
    song.play();
    controlIcon.classList.add("fa-pause");
    controlIcon.classList.remove("fa-play");
  }
}

prog.oninput = function () {
  song.currentTime = prog.value;
};

song.onplay = function () {
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
};

song.onpause = function () {
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
};

song.ontimeupdate = function () {
  prog.value = song.currentTime;
  currentTimeDisplay.innerText = formatTime(song.currentTime);
};

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return minutes + ":" + seconds;
}