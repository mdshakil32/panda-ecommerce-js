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
