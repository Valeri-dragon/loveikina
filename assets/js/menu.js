document.addEventListener("DOMContentLoaded", () => {
  const menuLink = document.querySelectorAll(".menu-list__link");
  const btnMobMenu = document.querySelector(".btn__mob-menu");
  const btnMenuM = document.querySelector(".btn__m-menu");
  const menuList = document.querySelector(".links");
  const cover = document.querySelector(".menuCover");

  const toggleIcon = () => {
    if (btnMenuM.classList.contains("btn__m-menu")) {
      btnMenuM.classList.remove("btn__m-menu");
      btnMenuM.classList.add("btn__m-menu-active");
      menuList.classList.add("is-open__mob-menu");
      cover.classList.add("cover");
    } else {
      menuList.classList.remove("is-open__mob-menu");
      btnMenuM.classList.remove("btn__m-menu-active");
      cover.classList.remove("cover");
      btnMenuM.classList.add("btn__m-menu");
    }
  };
  btnMobMenu.addEventListener("click", toggleIcon);
  cover.addEventListener("click", (event) => {
    if (event.target == btnMenuM || event.target == cover) {
      toggleIcon();
    }
  });

  menuLink.forEach((el, index) => {
    el.addEventListener("click", (event) => {
      const target = event.target;
      const subMenu = target.nextElementSibling;
      const submenuItem = document.querySelectorAll(".links__item");
      if (subMenu) {
        target.classList.toggle("open_sub-menu");
        subMenu.classList.toggle("open_sub-menu");
        submenuItem.forEach((ele) => {
          ele.classList.toggle("open_sub-menu");
        });
      }
    });
  });
});
