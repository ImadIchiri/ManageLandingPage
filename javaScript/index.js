const mainMenu = document.getElementById("main_menu");
const hamburgerIcon = document.getElementById("hamburger_icon");
const closeIcon = document.getElementById("close_icon");
const overlay = document.getElementById("overlay");
const [...listItems] = document.querySelectorAll("#main_menu .list_item");

const addEvents = (elements, eventType, callBackFunction) => {
  elements.forEach((element) => {
    element.addEventListener(eventType, callBackFunction);
  });
};

/* ======================= Show The Menu By Adding 'hodden' Class ======================= */
addEvents([hamburgerIcon], "click", showMenu);
addEvents([closeIcon, overlay, ...listItems], "click", hideMenu);

function showMenu() {
  hamburgerIcon.classList.add("hidden");
  closeIcon.classList.remove("hidden");
  overlay.style.transform = "scaleY(1)";
  mainMenu.classList.remove("hidden");
}

/* ======================= Hide The Menu By Adding 'hodden' Class ======================= */
addEvents([window], "resize", hideMenu);

function hideMenu() {
  closeIcon.classList.add("hidden");
  hamburgerIcon.classList.remove("hidden");
  overlay.style.transform = "scaleY(0)";
  mainMenu.classList.add("hidden");
}

/* ======================= Start Testimonials Section ======================= */
const [...spans] = document.querySelectorAll("#span_list span");
const wrapper = document.querySelector("#wrapper");
const cardsContainer = document.querySelector("#cards_container");
const [...cards] = document.querySelectorAll("#cards_container .card");

spans.forEach((span) => {
  span.addEventListener("click", () => {
    spans.forEach((s) => {
      s.classList.remove("bg-BrightRed");
    });
    span.classList.add("bg-BrightRed");
    setCardsPosition(Number(span.dataset.number));
  });
});

function setCardsPosition(number) {
  const scrollValue = (380 + 16) * (number - 1);
  wrapper.scrollLeft = 0;
  console.log(scrollValue);
  wrapper.scrollLeft += scrollValue;
}

wrapper.addEventListener("scroll", () => {
  console.log(wrapper.scrollLeft);
  if (wrapper.scrollLeft < 80) {
    removeAtiveFromSpans(0);
  } else if (wrapper.scrollLeft < 490) {
    removeAtiveFromSpans(1);
  } else if (wrapper.scrollLeft < 860) {
    removeAtiveFromSpans(2);
  } else {
    removeAtiveFromSpans(3);
  }
});

function removeAtiveFromSpans(nth) {
  spans.forEach((s) => {
    s.classList.remove("bg-BrightRed");
  });
  spans[nth].classList.add("bg-BrightRed");
}
