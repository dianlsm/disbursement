const passwordInput = document.getElementById("txtPassword");
const toggleImage = document.getElementById("toggleImage");
// const icon = document.getElementById("eyeIcon");

toggleImage.addEventListener("click", function() {
  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleImage.src = "assets/img/eye-hidden.png"; // Ganti dengan path gambar mata tertutup
  } else {
      passwordInput.type = "password";
      toggleImage.src = "assets/img/eye-visible.png"; // Ganti dengan path gambar mata terbuka
  }
});

// const formControl = document.querySelector(".form-control");

// formControl.addEventListener("click", function() {
//   formControl.style.borf
// }