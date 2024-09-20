/*
  #FDDCEA
  #F7ABCC
  #EF84B3
  #E45C98
  #D63C80
*/

const btnMenu = document.querySelector(".area_btn");
const btnIcon = document.querySelector("#imgMenuBtn");
const mnuLateral = document.querySelector("#mnuLateral");

btnMenu.addEventListener("click", (e) => {
  e.preventDefault();
  

  const isBtnEsquerdo = btnIcon.classList.contains("animacao_seta_esq");

  btnIcon.classList.remove(isBtnEsquerdo ? "animacao_seta_esq" : "animacao_seta_dir");

  btnIcon.classList.add(isBtnEsquerdo ? "animacao_seta_dir" : "animacao_seta_esq");

  mnuLateral.classList.remove(isBtnEsquerdo ? "animacao_menu_aumenta" : "animacao_menu_encolhe");

  mnuLateral.classList.add(isBtnEsquerdo ? "animacao_menu_encolhe" : "animacao_menu_aumenta");
  
});