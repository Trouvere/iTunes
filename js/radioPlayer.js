export const radioPlayerInit = () => {
  const radio = document.querySelector(".radio"),
    radioCoverImg = document.querySelector(".radio-cover__img"),
    radioNavigation = document.querySelector(".radio-navigation"),
    radioHeaderBig = document.querySelector(".radio-header__big"),
    radioItem = document.querySelectorAll(".radio-item"),
    radioStop = document.querySelector(".radio-stop"),
    radioVolume = document.querySelector(".radio-volume"),
    radioMute = document.querySelector(".radio-mute");

  let prevVolume = 1;
  //
  // videoTimeTotal = document.querySelector(".video-time__total"),

  // videoFullscreen = document.querySelector(".video-fullscreen");

  const audio = new Audio();
  audio.type = "audio/acc";
  radioStop.disabled = true;
  const changeIcinPlay = () => {
    if (audio.paused) {
      radio.classList.remove("play");
      radioStop.classList.remove("fa-stop");
      radioStop.classList.add("fa-play");
    } else {
      radio.classList.add("play");
      radioStop.classList.remove("fa-play");
      radioStop.classList.add("fa-stop");
    }
  };

  const selectItem = (elem) => {
    radioItem.forEach((item) => item.classList.remove("select"));
    elem.classList.add("select");
  };

  radioNavigation.addEventListener("change", (event) => {
    const target = event.target;
    const parrent = target.closest(".radio-item");

    selectItem(parrent);
    const title = parrent.querySelector(".radio-name").textContent;
    radioHeaderBig.textContent = title;
    const urlImg = parrent.querySelector(".radio-img").src;
    radioCoverImg.src = urlImg;

    radioStop.disabled = false;
    audio.src = target.dataset.radioStantion;
    audio.play();
    changeIcinPlay();
  });
  radioStop.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
    changeIcinPlay();
  });

  radioVolume.addEventListener("input", () => {
    audio.volume = radioVolume.value / 100;
  });

  radioMute.addEventListener("click", () => {
    if (audio.volume) {
      prevVolume = audio.volume;
      audio.volume = 0;
    } else {
      audio.volume = prevVolume;
    }
  });
};
