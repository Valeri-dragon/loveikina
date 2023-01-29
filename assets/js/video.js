document.addEventListener("DOMContentLoaded", () => {
  const btnOpenPlayer = document.querySelectorAll(".open-player");

  btnOpenPlayer.forEach((el) => {
    el.addEventListener("click", (event) => {
       
     
       const ID = event.target.parentElement.getAttribute("href").substr(1);
       
      
           
      let videoModal = document.getElementById(ID);
      const modalPlayer = videoModal.querySelector(".modal-player");
      const videoSrc = videoModal.querySelector(".video__videofeedbackslider");
      const textFeedback = videoModal.querySelector(".text_feedback");
      const btnCloseModal = videoModal.querySelector(".modal__close");
      if (ID) {
        if (videoSrc) {
          videoModal.classList.remove("hidden");
          modalPlayer.classList.remove("hidden");
          videoSrc.classList.remove("hidden");
        }
        if (textFeedback){
          videoModal.classList.remove("hidden");
          modalPlayer.classList.remove("hidden");
          textFeedback.classList.remove("hidden");
        }
          videoModal.addEventListener("click", (event) => {
            if (event.target == videoModal || event.target == btnCloseModal) {
              if (videoSrc && !videoSrc.paused ) {
                videoSrc.autoplay = false;
                videoSrc.pause();
                videoSrc.currentTime = 0;
                videoSrc.load();
              }
              if (textFeedback) {
                videoModal.classList.add("hidden");
                modalPlayer.classList.add("hidden");
                textFeedback.classList.add("hidden");
              }else{ videoModal.classList.add("hidden");
              modalPlayer.classList.add("hidden");
              videoSrc.classList.add("hidden");}
             
            }
          });
      }
    });
  });
});
