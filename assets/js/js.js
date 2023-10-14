const cardsContainer = document.getElementsByClassName("inner")[0];
const cards = document.getElementsByClassName("card");
let size = cards.length ;
let index =0;
const message=document.getElementsByClassName("netfaction")
message.style.display='none';
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
