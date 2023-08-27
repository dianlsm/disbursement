// filter
const selectFilter = document.getElementById("select-filter");
const selectedFilter = document.getElementById("selectedFilter");
const optionsFilter = document.getElementsByClassName("options-filter");
const arrowIcon2 = document.getElementById("arrowIcon2");
const listFilter = document.getElementById("list-filter");

selectFilter.onclick = function(){
    listFilter.classList.toggle("hide-statement");
    arrowIcon2.classList.toggle("rotate-statement");
  }
  
  for(optionStatement of optionsFilter ){
      optionStatement.onclick = function(){
      selectedFilter.innerHTML = this.textContent;
      listFilter.classList.toggle("hide-statement");
      arrowIcon2.classList.toggle("rotate-statement");
    }
  }


// bank
const valueBank = document.getElementById("value-bank");
const selectBank = document.getElementById("selected-bank");
const optionsBank = document.getElementsByClassName("options-bank");
const arrowBank = document.getElementById("arrowBank");
const listBank = document.getElementById("list-bank");


valueBank.onclick = function(){
    listBank.classList.toggle("hide-statement-bank");
    arrowBank.classList.toggle("rotate-statement-bank");
  }
  
for(Bank of optionsBank ){
      Bank.onclick = function(){
      selectBank.innerHTML = this.textContent;
      listBank.classList.toggle("hide-statement-bank");
      arrowBank.classList.toggle("rotate-statement-bank");
      
    }
  }
  

// Page
const selectPage = document.getElementById("select-page");
const selectedPage = document.getElementById("selectedPage");
const pagesOptions = document.getElementsByClassName("pages-options");
const arrowPage = document.getElementById("arrowPage");
const listPage = document.getElementById("list-page");


selectPage.onclick = function(){
    listPage.classList.toggle("hide-statement-page");
    arrowPage.classList.toggle("rotate-statement-page");
  }
  
for(pages of pagesOptions ){
      pages.onclick = function(){
      selectedPage.innerHTML = this.textContent;
      listPage.classList.toggle("hide-statement-page");
      arrowPage.classList.toggle("rotate-statement-page");
      
    }
  }

// Add User
document.getElementById("btn-topup").addEventListener("click", function () {
document.getElementById("modalToptup").style.display = "block";
document.getElementById("modalToptup").style.right = "0";
document.getElementById("modalToptup").style.height = "100vh";
document.querySelector("col").style.display = "block";
document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
});

document.querySelector(".close").addEventListener("click", function () {
document.getElementById("modalToptup").style.display = "none";
document.body.style.overflow = "auto"; // Allow scrolling again
});

window.addEventListener("click", function (event) {
  if (event.target == document.getElementById("modalToptup")) {
    document.getElementById("modalToptup").style.display = "none";
    document.body.style.overflow = "auto";
  }
});
