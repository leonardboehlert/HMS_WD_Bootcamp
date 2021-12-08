console.log("Hello World");

const text = document.querySelector(".hidden");
const button = document.querySelector(".more");
const lsskill2 = document.querySelector(".lsskill2");
const lsskill3 = document.querySelector(".lsskill3");
const lsskill4 = document.querySelector(".lsskill4");
const lsskill5 = document.querySelector(".lsskill5");
const lsskill6 = document.querySelector(".lsskill6");
const webdev = document.querySelector(".webdev");
const cms = document.querySelector(".cms");
const analytics = document.querySelector(".analytics");
const seo = document.querySelector(".seo");
const amazon = document.querySelector(".amazon");

button.addEventListener("click", () => text.classList.toggle("hidden"));
lsskill2.addEventListener("click", () => webdev.classList.toggle("webdev"));
lsskill3.addEventListener("click", () => cms.classList.toggle("cms"));
lsskill4.addEventListener("click", () =>
  analytics.classList.toggle("analytics")
);
lsskill5.addEventListener("click", () => seo.classList.toggle("seo"));
lsskill6.addEventListener("click", () => amazon.classList.toggle("amazon"));
