// Select Periode
const selectField = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const options = document.getElementsByClassName("options");
const arrowIcon = document.getElementById("arrowIcon");
const list = document.getElementById("list");



selectField.onclick = function(){
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
}

for(option of options ){
  option.onclick = function(){
  selectText.innerHTML = this.textContent;
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
  }
}



// Select Rekening

const selectRek = document.getElementById("selectField-rekening");
const selectTextRek = document.getElementById("selectText-rekening");
const optionsRek = document.getElementsByClassName("options-rekening");
const arrowRek = document.getElementById("arrowRek");
const listRek = document.getElementById("list-rekening");


selectRek.onclick = function(){
  listRek.classList.toggle("hide-rekening");
  arrowRek.classList.toggle("rotate-rekening");
}

for(rekening of optionsRek ){
  rekening.onclick = function(){
    selectTextRek.innerHTML = this.textContent;
    listRek.classList.toggle("hide-rekening");
    arrowRek.classList.toggle("rotate-rekening")
  }
}


