var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

var selectPlanButtons = document.querySelectorAll('.plan button');

for (var i=0; i<selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    backdrop.style.display = 'block';
    modal.classList.add('open');
    setTimeout(function() {
      backdrop.classList.add('open');
    }, 10);
  });
}

if (document.querySelector(".modal__action--negative")) {
  document.querySelector(".modal__action--negative").addEventListener("click", closeModal);
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  closeModal();
});

function closeModal() {
  backdrop.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  setTimeout(function() {
    backdrop.classList.remove("open");
  }, 10);
}

var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

toggleButton.addEventListener("click", function () {
  mobileNav.style.display = "block";
  setTimeout(function () {
    mobileNav.classList.add("open");
  }, 10)
  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
})