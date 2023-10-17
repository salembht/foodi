const cardsContainer = document.getElementsByClassName("inner")[0];
const cards = document.getElementsByClassName("card");
let size = cards.length ;
let index =0;
const navbutton=document.getElementById('collapesbtn')
navbutton.addEventListener('click',(event)=>{
    const content = document.getElementById('nav')
    if (content.style.display === "block") {
      content.style.display = "none";
      navbutton.style.border='1px solid black';
    } else {
      content.style.display = "block";
      navbutton.style.border='1px solid black';
    }
})
function slidRight() {
    if(index > -(size-2)*(100/size)){
        index-=100/size;
        cardsContainer.style.transform=`translateX(${index}%)`;
    }
  }
function slidLeft() { 
    if( index<0){
        index+=100/size;
        cardsContainer.style.transform=`translateX(${index}%)`;
    }
}
