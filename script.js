const modal = document.getElementById("sellFormModal");
const closeBtn = document.querySelector(".close-btn");
const sellBtns = document.querySelectorAll(".cta-btn");

sellBtns.forEach(btn => {
    btn.addEventListener("click", function(event) {
    event.preventDefault();
    modal.style.display = "flex";
    });
});

closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});