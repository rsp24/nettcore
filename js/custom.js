function showRead(button){
    var card = button.closest('.card');
    var shortText = card.querySelector('.short-text');
    var longText = card.querySelector('.long-text');
    if(longText.classList.contains("hide")){
        longText.classList.remove("hide");
        shortText.classList.add("hide");
    } else{
        longText.classList.add("hide");
        shortText.classList.remove("hide");
    }
}
  