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
  

// rekening
const valueRek = document.getElementById("value-rekening");
const selectRek = document.getElementById("selected-rekening");
const optionsRek = document.getElementsByClassName("optionsRekening");
const arrowRek = document.getElementById("arrowRek");
const listRek = document.getElementById("listRekening");


valueRek.onclick = function(){
    listRek.classList.toggle("hide-statement-rekening");
    arrowRek.classList.toggle("rotate-statement-rekening");
  }
  
for(Rekening of optionsRek ){
      Rekening.onclick = function(){
      selectRek.innerHTML = this.textContent;
      listRek.classList.toggle("hide-statement-rekening");
      arrowRek.classList.toggle("rotate-statement-rekening");
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



// Page
const selectPage = document.getElementById("value-page");
const selectedPage = document.getElementById("selectedPage");
const pagesOptions = document.getElementsByClassName("pages-options");
const arrowPage = document.getElementById("arrowPage");
const listPage = document.getElementById("list-page");


selectPage.onclick = function(){
    listPage.classList.toggle("hide-statement-page");
    arrowPage.classList.toggle("rotate-statement-page");
  }
  
  for (let pages of pagesOptions) {
    pages.onclick = function() {
      selectedPage.textContent = this.textContent;
      listPage.classList.toggle("hide-statement-page");
      arrowPage.classList.toggle("rotate-statement-page");
    };
  }