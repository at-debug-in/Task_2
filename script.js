let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

next.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").appendChild(items[0]);
});

prev.addEventListener("click", function () {
  let items = document.querySelectorAll(".item");
  document.querySelector(".slide").prepend(items[items.length - 1]);
});

const stars = document.querySelectorAll(".stars div");
let rating = 0;
stars.forEach((star, index) => {
  star.addEventListener("mouseover", () => {
    resetStars();
    highlightStars(index);
  });
  star.addEventListener("mouseout", () => {
    resetStars();
    highlightStars(rating - 1);
  });
  star.addEventListener("click", () => {
    rating = index + 1;
  });
});
function highlightStars(index) {
  for (let i = 0; i <= index; i++) {
    stars[i].classList.add("hover");
  }
}
function resetStars() {
  stars.forEach((star) => star.classList.remove("hover"));
}
