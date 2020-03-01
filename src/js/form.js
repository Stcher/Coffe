let modalBtn = document.getElementById("modal-btn","mdal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
  modal.style.display = "block"
  overflow = "hidden";
}
closeBtn.onclick = function(){
  modal.style.display = "none"
}
window.onclick = function(e){
  if(e.target == modal){
    modal.style.display = "none"
  }
}
$('.button').click(function(event){
  $('body').toggleClass('lock')
})
$('.close-btn').click(function(event){
  $('body').toggleClass('lock')
  $('.headnav').toggleClass('lock')
})
