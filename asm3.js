"use strict";

const btn = document.querySelector(".submit");
const personalInfo = document.querySelector("#personal-info");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const titlename = document.querySelectorAll(".titlename");
const viewMore = document.querySelectorAll(".view");
const detail = document.querySelectorAll(".detail");
const viewless = document.querySelectorAll(".viewless");
const icon = document.querySelectorAll(".icon-skill");

/*điền thông tin*/
btn.addEventListener("click", function () {
  personalInfo.classList.remove("hidden");
});
closeModal.addEventListener("click", function () {
  personalInfo.classList.add("hidden");
});
/*viewmore viewless*/
for (let i = 0; i < titlename.length; i++) {
  titlename[i].addEventListener("click", function () {
    viewMore[i].classList.remove("hidden");
  });

  viewMore[i].addEventListener("click", function () {
    detail[i].classList.remove("hidden");
    viewMore[i].classList.add("hidden");
    viewless[i].classList.remove("hidden");
  });
}
for (let i = 0; i < viewless.length; i++) {
  viewless[i].addEventListener("click", function () {
    detail[i].classList.add("hidden");
    viewless[i].classList.add("hidden");
  });
}
