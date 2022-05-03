const submit = document.querySelector(".submit");
const cards = [...document.querySelectorAll(".card")];
let selected = 0;
const ratings = [...document.querySelectorAll(".card__rating button")];
const alert =  document.querySelector(".alert__container");
const close = alert.querySelector("button");
const reset = document.querySelector("a");

submit.addEventListener("click", ev => {
  ev.preventDefault();
  if(selected) {
    submits();
    reset.classList.remove("hidden");
  } else {
    alert.classList.remove("hidden");
  }
});

reset.addEventListener("click", function(ev) {
  ev.preventDefault();
  resetEverything();
  this.classList.add("hidden");
});

close.addEventListener("click", ev => {
  const target = ev.currentTarget.closest(".alert__container");
  target.classList.add("hidden");
})

ratings.map(rating => {
  rating.addEventListener("click", function(ev) {
    ev.preventDefault();
    selected = parseInt(this.dataset.rating);
    ratings.forEach(rating => {
      rating.classList.remove("active");
    })
    this.classList.add("active");
  })
})

function submits() {
  cards.map(card => {
    if(card.classList.contains("submitted")) {
      card.classList.remove("out");
      card.classList.remove("hidden");
      card.querySelector("span").textContent = `You have selected ${selected} out of 5`
    } else {
      card.classList.add("hidden");
    }
  })  
}

function resetEverything() {
  cards.map(card => {
    if(card.classList.contains("submitted")) {
      card.classList.add("out");
      setTimeout(() => {
        card.classList.add("hidden");
      }, 1000);
    } else {
      card.classList.remove("hidden");
    }
  })  
}