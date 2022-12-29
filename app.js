window.onload = () => {
  console.log("hello");
  const ratings = document.querySelectorAll(".rating span");
  const btnSubmit = document.querySelector(".btn-submit");

  btnSubmit.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("active");
  });

  Array.from(ratings).map((r, index) =>
    r.addEventListener("mouseover", () => ratingHover(event, index))
  );

  Array.from(ratings).map((r, index) =>
    r.addEventListener("mouseout", () => ratingOut(event, index))
  );

  function ratingOut() {
    Array.from(ratings).map((r, index) => r.classList.remove("active"));
  }

  function ratingHover(event, index) {
    renderRating(index);
  }

  function renderRating(index) {
    Array.from(ratings).map((r, index) => r.classList.remove("active"));

    console.log(index);
    for (let i = 0; i < index; i++) {
      ratings[i].classList.add("active");
    }
  }
};
