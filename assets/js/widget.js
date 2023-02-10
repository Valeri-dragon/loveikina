document.addEventListener("DOMContentLoaded", () => {
  const categoryList  = document.querySelector(".category-list");
  const btnMoreWidget = document.querySelector(".more_category");
  const itemWidget = document.querySelectorAll(".category-item");
  const coverWidget = document.querySelector(".cover-widget")

let clonElem=[]


  btnMoreWidget.addEventListener("click", ()=>{
    itemWidget.forEach((item)=>{
    if (
     (item.hasAttribute("data-role", "hidden")) &&
    (!item.classList.contains("active_item_widget")) 
   ) {    
     coverWidget.classList.add("active_category_widget");
     item.classList.add("active_item_widget");
         coverWidget.append(item);
   } else {
    coverWidget.classList.remove("active_category_widget");
     item.classList.remove("active_item_widget");
          categoryList.append(item)
   }

    })

  })
});
