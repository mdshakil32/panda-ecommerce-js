// h1 tags color 
const h1Tags = document.getElementsByTagName("h1");
      for(const h1 of h1Tags){
        h1.style.color='DeepPink';
      }

 // backpack background color  
 const backpack = document.getElementById('backpack-section');
 backpack.style.backgroundColor='LightCyan';

 //   border radius 20px of all card
const cards = document.getElementsByClassName('card');
for(const card of cards){
  card.style.cssText="border-radius: 20px; border:none;";
}

// buy now button remove 
const btns = document.getElementsByClassName('buy-now-btn')
      for(const btn of btns){
        btn.addEventListener('click',function(event){
          console.log('this button removed');
          event.target.style.display='none';
        })
      }

//   send button disable and enable 
document.getElementById('input-field').addEventListener('keyup',function(event){    
    const inputField = event.target.value;

      if(inputField.length > 0){
      document.getElementById('button-addon2').removeAttribute('disabled');            
      }
      else{
      document.getElementById('button-addon2').setAttribute('disabled','');            
      }
    });

  document.getElementById('button-addon2').addEventListener('click',function(){
    console.log('button clicked');
  });


// cards image change using onmouseover onmouseout 
function setNewImage(cardId,imageSrc){
  document.getElementById(cardId).src=imageSrc;
}
function setOldImage(cardId,imageSrc){
  document.getElementById(cardId).src=imageSrc;
}


// double click background color change 
const contactColor = document.getElementById('contact');

    // double click to change different background color 
      contactColor.ondblclick = function(){
        contactColor.style.backgroundColor='PowderBlue';
      }
    // single click to get previous background color 
      contactColor.onclick = function(){
        contactColor.style.backgroundColor='#FEEAE9';
      }
      
