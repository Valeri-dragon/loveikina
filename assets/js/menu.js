document.addEventListener("DOMContentLoaded", () => {
  const menuLink = document.querySelectorAll(".menu-list__link");
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
