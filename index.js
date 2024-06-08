
// 3rd assignment of dom
// Q. Change the main heading 'Fruit Shop' to 'Fruit World'

// 2. Change the font color of 'Fruit World' from black to orange

// 3. Change background color of div with id = "header" to green color

// 4. Add a bottom border of orange color to div with id = "header"

// 5. Change the font color of 'Fruits In Basket' from black to green

// 6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"

const header= document.getElementById("header");
header.style.backgroundColor="green";
header.style.borderBottom="3px solid orange";

const mainhead= document.getElementById("main-heading");
mainhead.textContent="Fruit World";
mainhead.style.color="orange";

const basketHeading = document.getElementById("basket-heading");
basketHeading.style.color="green";

const thanks = document.getElementById("thanks");
thanks.innerHTML='<p>Please visit us again</p>'


// 4th ass....
// Make the 3rd element in the list have yellow background color.

// 2. Make all the elements in the list have bold font.

const fruit = document.getElementsByClassName("fruit");

fruit[2].style.backgroundColor="yellow";

for(var i=0; i<fruit.length; i++){
    fruit[i].style.fontWeight="bold";


}


//5th ass

// 1. Change the color of 5th "li" tag (one with "Mango" written inside it) to blue.

// 2. Make all the "li" tags italic.


const li=document.getElementsByTagName("li");
li[4].style.color="blue";

for(var i=0; i<li.length; i++){
  li[i].style.fontStyle="italic";
}