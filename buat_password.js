const passwordInput1 = document.getElementById("txtPassword");
const passwordInput2 = document.getElementById("txtKonfirmasiPassword");
const togglePassword = document.getElementById("togglePassword");
const toggleKonfirmasiPassword = document.getElementById("toggleKonfirmasiPassword");


togglePassword.addEventListener("click", function() {
  if (passwordInput1.type === "password") {
      passwordInput1.type = "text";
      togglePassword.src = "assets/img/eye-hidden.png"; // Ganti dengan path gambar mata tertutup
  } else {
      passwordInput1.type = "password";
      togglePassword.src = "assets/img/eye-visible.png"; // Ganti dengan path gambar mata terbuka
  }
});

toggleKonfirmasiPassword.addEventListener("click", function() {
    if (passwordInput2.type === "password") {
        passwordInput2.type = "text";
        toggleKonfirmasiPassword.src = "assets/img/eye-hidden.png"; // Ganti dengan path gambar mata tertutup
    } else {
        passwordInput2.type = "password";
        toggleKonfirmasiPassword.src = "assets/img/eye-visible.png"; // Ganti dengan path gambar mata terbuka
    }
  });