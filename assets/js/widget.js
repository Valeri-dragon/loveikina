document.addEventListener("DOMContentLoaded", () => {
  const categoryList = document.querySelector(".category-list");
  const btnMoreWidget = document.querySelector(".more_category");
  const itemWidget = document.querySelectorAll(".category-item");
  const coverWidget = document.querySelector(".cover-widget");
  console.log(window.screen.height);
 btnMoreWidget.addEventListener("click", () => {
    itemWidget.forEach((item) => {
      if (window.screen.height<1000){
 if (
   item.hasAttribute("data-role", "hidden") &&
   !item.classList.contains("active_item_widget")
 ) {
   coverWidget.classList.add("active_category_widget");
   item.classList.add("active_item_widget");
   coverWidget.append(item);
 } else {
   coverWidget.classList.remove("active_category_widget");
   item.classList.remove("active_item_widget");
   categoryList.append(item);
 }
      }else{
         coverWidget.classList.remove("active_category_widget");
         item.classList.remove("active_item_widget");
         categoryList.append(item);
      }
       
    });
  });
    
});
