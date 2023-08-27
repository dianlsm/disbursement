// filter

    
const filterKeyword = document.getElementById("filter-keyword");
const selectedKeyword = document.getElementById("selectedKeyword");
const optionsKeyword = document.getElementsByClassName("options-keyword");
const arrowKeyword = document.getElementById("arrowIcon3");
const listTrans = document.getElementById("list-keyword");

filterKeyword.onclick = function(){
    listTrans.classList.toggle("hide-keyword");
    arrowKeyword.classList.toggle("rotate-keyword");
  }
  
  for(trans of optionsKeyword ){
      trans.onclick = function(){
      selectedKeyword.innerHTML = this.textContent;
      listTrans.classList.toggle("hide-keyword");
      arrowKeyword.classList.toggle("rotate-keyword");
    }
  }
  


// // keyword
// const valueBank = document.getElementById("value-bank");
// const selectBank = document.getElementById("selected-bank");
// const optionsBank = document.getElementsByClassName("options-bank");
// const arrowBank = document.getElementById("arrowBank");
// const listBank = document.getElementById("list-bank");


// valueBank.onclick = function(){
//     listBank.classList.toggle("hide-statement-bank");
//     arrowBank.classList.toggle("rotate-statement-bank");
//   }
  
// for(Bank of optionsBank ){
//       Bank.onclick = function(){
//       selectBank.innerHTML = this.textContent;
//       listBank.classList.toggle("hide-statement-bank");
//       arrowBank.classList.toggle("rotate-statement-bank");
      
//     }
//   }
  

// // Page
// const selectPage = document.getElementById("select-page");
// const selectedPage = document.getElementById("selectedPage");
// const pagesOptions = document.getElementsByClassName("pages-options");
// const arrowPage = document.getElementById("arrowPage");
// const listPage = document.getElementById("list-page");


// selectPage.onclick = function(){
//     listPage.classList.toggle("hide-statement-page");
//     arrowPage.classList.toggle("rotate-statement-page");
//   }
  
// for(pages of pagesOptions ){
//       pages.onclick = function(){
//       selectedPage.innerHTML = this.textContent;
//       listPage.classList.toggle("hide-statement-page");
//       arrowPage.classList.toggle("rotate-statement-page");
      
//     }
//   }
