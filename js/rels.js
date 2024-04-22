// document.addEventListener('DOMContentLoaded', () => {
//     const player = new Plyr('#player', {
//         controls: [
//             'play-large',
//             'restart',
//             'play',
//             'progress',
//             'current-time',
//             'mute',
//             'volume',
//             'captions',
//             'settings',
//             'pip',
//             'airplay',
//             'fullscreen',
//         ],
//         youtube: {
//             noCookie: true,
//             rel: 0,
//             showinfo: 0,
//             iv_load_policy: 3
//         }
//     })
//     window.player = player;
//     player.on('ready', event => {
//         player.on('play', event => console.log('play'));
//         player.on('pause', event => console.log('puss'));
//     })
// });



// document.addEventListener("DOMContentLoaded", () => {
//   const player = new Plyr("#player", {
//     controls: [
//       "play-large",
//     //   "restart",
//     //   "play",
//       "progress",
//     //   "current-time",
//       "mute",
//     //   "volume",
//     //   "captions",
//     //   "settings",
//     //   "pip",
//     //   "airplay",
//           //   "fullscreen",
      
//     ],
//     youtube: {
//       noCookie: true,
//       rel: 0,
//       showinfo: 0,
//       iv_load_policy: 3,
//     },
//   });
//   window.player = player;
//   player.on("ready", (event) => {
//     player.on("play", (event) => console.log("play"));
//     player.on("pause", (event) => console.log("puss"));
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  const player = new Plyr("#player", {
    controls: ["play-large", "progress", "mute"],
    youtube: {
      noCookie: true,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
    },
  });

  // قم بتعيين ارتفاع الفيديو إلى 100% باستخدام CSS
  const playerContainer = document.getElementById("player");
  playerContainer.style.height = "100%";

  window.player = player;

  player.on("ready", (event) => {
    player.on("play", (event) => console.log("play"));
    player.on("pause", (event) => console.log("puss"));
  });
});



