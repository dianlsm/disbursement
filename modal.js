document.getElementById("openModalBtn").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("myModal").style.right = "0";
    document.getElementById("myModal").style.height = "100vh"; // Set modal height to 100% of viewport height
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  });
  
  document.querySelector(".close").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
    document.body.style.overflow = "auto"; // Allow scrolling again
  });
  
  window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
  