const play = document.getElementById("play");
const pause = document.getElementById("pause");
const retroceder = document.getElementById("retroceder");
const avanzar = document.getElementById("avanzar");
const video = document.getElementById("video");
const progress_bar = document.getElementById("progress-bar");
const progress = document.getElementById("contain-progress");
const container = document.getElementById("container");
const controls = document.getElementById("controls");
const tittle = document.getElementById("tittle");

play.addEventListener("click", () => {
  video.play();
  play.style.display = "none";
  pause.style.display = "inline";
});

pause.addEventListener("click", () => {
  video.pause();
  play.style.display = "inline";
  pause.style.display = "none";
});

avanzar.addEventListener("click", () => {
  let position_now = video.currentTime;
  console.log(position_now);
  video.currentTime += 10;
});

retroceder.addEventListener("click", () => {
  let position_now = video.currentTime;
  console.log(position_now);
  video.currentTime -= 10;
});

video.addEventListener("loadedmetadata", () => {
  let duration = video.duration;
  progress_bar.setAttribute("max", duration);
});

video.addEventListener("timeupdate", () => {
  let time = video.currentTime;
  progress_bar.value = time;
});

progress_bar.addEventListener("input", () => {
  video.currentTime = progress_bar.value;
});

const item =[progress,controls,tittle];
item.map((v)=> console.log(v));


container.addEventListener("mouseover", () => {

  item.map((items)=>{
    items.style.opacity = "1";
    items.style.transition = ".5s opacity";
  })

  /* progress.style.opacity = "1";
  controls.style.opacity = "1";
  progress.style.transition = ".5s opacity";
  controls.style.transition = ".5s opacity"; */
});

container.addEventListener("mouseleave", () => {

   item.map((items) => {
     items.style.opacity = "0";
     items.style.transition = ".5s opacity";
   });

  /* progress.style.opacity = "0";
  controls.style.opacity = "0";
  controls.style.transition = ".5s opacity";
  progress.style.transition = ".5s opacity"; */
});
