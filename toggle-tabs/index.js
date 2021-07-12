// default state of tab must be available
document.querySelectorAll(".tab")[0].classList.add("active-tab");

const buttons = document.querySelectorAll(".btn");
const tabs = document.querySelectorAll(".tab");

// display diu with click on one button on wrapper buttons
buttons.forEach((btn, i) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    tabs[i].classList.add("active-tab");
    buttons[i].classList.add("active-btn");

    buttons.forEach((tab, index) => {
      if (index !== i) {
        tab.classList.remove("active-btn");
      }
    });

    tabs.forEach((elem, index) => {
      if (index !== i) {
        elem.classList.remove("active-tab");
      }
    });
  });
});
