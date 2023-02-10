document.addEventListener("DOMContentLoaded", () => {
  const categoryList = document.querySelector(".category-list");
  const btnMoreWidget = document.querySelector(".more_category");
  const itemWidget = document.querySelectorAll(".category-item");
  const coverWidget = document.querySelector(".cover-widget");
  const spanLink = btnMoreWidget.querySelector("span");
  const page = document.querySelector('.page')
  console.log(window.screen.width)
  const deleteBlock = ()=>{
     itemWidget.forEach((item) => {
        if (
         item.hasAttribute("data-role", "hidden") &&
         item.classList.contains("active_item_widget")
       ) {
         coverWidget.classList.remove("active_category_widget");
         item.classList.remove("active_item_widget");
         categoryList.append(item);
       }
     });
  }
categoryList.addEventListener("click", (event) => {
  
  if (event.target == btnMoreWidget || event.target == spanLink) {
    itemWidget.forEach((item) => {
     if (window.screen.width > 415 && window.screen.width <=1000) {
       if (
         item.hasAttribute("data-role", "hidden") &&
         !item.classList.contains("active_item_widget")
       ) {
         coverWidget.classList.add("active_category_widget");
         item.classList.add("active_item_widget");
         coverWidget.append(item);
       } else if (
         item.hasAttribute("data-role", "hidden") &&
         item.classList.contains("active_item_widget")
       ) {
         coverWidget.classList.remove("active_category_widget");
         item.classList.remove("active_item_widget");
         categoryList.append(item);
       }
     } else if (window.screen.width < 415) {
       if (
         item.hasAttribute("data-mob", "mob") &&
         !item.classList.contains("active_item_widget")
       ) {
         coverWidget.classList.add("active_category_widget");
         item.classList.add("active_item_widget");
         coverWidget.append(item);
       } else if (
         item.hasAttribute("data-mob", "mob") &&
         item.classList.contains("active_item_widget")
       ) {
         coverWidget.classList.remove("active_category_widget");
         item.classList.remove("active_item_widget");
         categoryList.append(item);
       }
     }
    });
  }
});
  page.addEventListener("click", (event)=>{
if(event.target !==btnMoreWidget &&  event.target !== spanLink){
  deleteBlock()
}
  }
  
  )
});
