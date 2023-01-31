document.addEventListener("DOMContentLoaded", () => {
  const btnOpenPopup = document.querySelectorAll(".popup-open");
  const popupForm = document.querySelector(".box__poup-consult");
  const popupCloseBtn = popupForm.querySelector(".close__poup-consult");

  const openPopup = () => {
    popupForm.style.display = "flex";
  };

  const closePopup = () => {
    popupForm.style.display = "";
  };
  btnOpenPopup.forEach((itemBtn) => {
    if (itemBtn) {
      itemBtn.addEventListener("click", openPopup);
    }
  });

  popupForm.addEventListener("click", (event) => {
    event.target == popupForm ||
    event.target == popupCloseBtn ||
    event.target == popupCloseBtn.querySelector(".close__poup-consult svg") ||
    event.target == popupCloseBtn.querySelector(".close__poup-consult path")
      ? closePopup()
      : event.stopPropagation();
  });
});
