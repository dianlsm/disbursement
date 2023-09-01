// filter account
const filterKeyword = document.getElementById("filter-keyword");
const selectedText = document.getElementById("selectText");
const optionsKeyword = document.getElementsByClassName("options-keyword");
const arrowIcon = document.getElementById("arrowIcon");
const listKeyword = document.getElementById("list-keyword");

filterKeyword.onclick = function(){
    listKeyword.classList.toggle("hide-keyword");
    arrowIcon.classList.toggle("rotate-keyword");
  }
  
  for(opskeyword of optionsKeyword ){
      opskeyword.onclick = function(){
      selectedText.innerHTML = this.textContent;
      listKeyword.classList.toggle("hide-keyword");
      arrowIcon.classList.toggle("rotate-keyword");
    }
  }
  
// Page
const selectPageAccount = document.getElementById("select-page-account");
const selectedPageAccount = document.getElementById("selectedPageAccount");
const pagesOptions = document.getElementsByClassName("pages-options-account");
const arrowPageAccount = document.getElementById("arrowPageAccount");
const listPageAccount = document.getElementById("list-page-account");


selectPageAccount.onclick = function(){
    listPageAccount.classList.toggle("hide-account-page");
    arrowPageAccount.classList.toggle("rotate-account-page");
  }
  
for(pages of pagesOptions ){
      pages.onclick = function(){
      selectedPageAccount.innerHTML = this.textContent;
      listPageAccount.classList.toggle("hide-account-page");
      arrowPageAccount.classList.toggle("rotate-account-page");
      
    }
  }

