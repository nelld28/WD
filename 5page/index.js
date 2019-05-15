var index =0;
automaticShow();
function automaticShow(){
  var getSlidesText = document.querySelectorAll(".slides");
// clearing out the slides by default at first
  for(var i = 0; i<getSlidesText.length; i++){
    getSlidesText[i].style.display = "none";
  }
  index++;
  if(index > getSlidesText.length )
      {index = 1;}
      // displaying the slides
getSlidesText[index -1].style.display = "block";
  setTimeout(automaticShow, 4000);
}