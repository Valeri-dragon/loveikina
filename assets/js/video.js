document.addEventListener("DOMContentLoaded", () => {
  const btnOpenPlayer = document.querySelectorAll(".open-player");

  btnOpenPlayer.forEach((el) => {
    el.addEventListener("click", (event) => {
      const ID = event.target.parentElement.getAttribute("href").substr(1);
      let videoModal = document.getElementById(ID);
      const modalPlayer = videoModal.querySelector(".modal-player");
      const videoSrc = videoModal.querySelector(".video__videofeedbackslider");
      const btnCloseModal = videoModal.querySelector(".modal__close");
      if (ID) {
        videoModal.classList.remove("hidden");
        modalPlayer.classList.remove("hidden");
        videoSrc.classList.remove("hidden");
        videoModal.addEventListener("click", (event) => {
          if (event.target == videoModal || event.target == btnCloseModal) {
            if (!videoSrc.paused) {
              videoSrc.autoplay = false;
              videoSrc.pause();
              videoSrc.currentTime = 0;
              videoSrc.load();
            }
            videoModal.classList.add("hidden");
            modalPlayer.classList.add("hidden");
            videoSrc.classList.add("hidden");
          }
        });
      }
    });
  });
});
