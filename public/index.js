const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {
  // first check if the menu element is hidden (when on medium or larger screen)
  // by simply check if the its class list contains 'hidden'
  if (menu.classList.contains("hidden")) {
    // show menu by removing the 'hidden' class
    menu.classList.remove("hidden");
  } else {
    // hide menu by adding the 'hidden' class
    menu.classList.add("hidden");
  }
});
