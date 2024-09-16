


const descriptionInput = document.createElement('input');
descriptionInput.id = 'description';


const form = document.querySelector('form');
const button = form.querySelector('button');
form.insertBefore(descriptionInput, button);


//  form submission 
form.addEventListener('submit', function(event) {
    event.preventDefault();
    const fruitInput = document.getElementById('fruit-to-add');
    const descriptionInput = document.getElementById('description');
    
    if (fruitInput.value !== '' ) {
        const fruitList = document.querySelector('.fruits');
        const newFruitItem = document.createElement('li');
        newFruitItem.className = 'fruit';
        newFruitItem.style.fontStyle='italic';

        const descriptionPara = document.createElement('p');
        descriptionPara.className = 'fruit-description';
        descriptionPara.textContent = descriptionInput.value;
        // descriptionInput.style.fontStyle='italic';
        // fruitInput.style.fontStyle='italic';

        newFruitItem.innerHTML = fruitInput.value + `<button class="delete-btn">x</button>`;
        newFruitItem.appendChild(descriptionPara);
        
        fruitList.appendChild(newFruitItem);

    }
});

//  filter 
const filter = document.getElementById('filter');

filter.addEventListener('keyup', function(e) {
    const textentered = e.target.value.toLowerCase();
    const fruitItems = document.getElementsByClassName('fruit');
   
    
    for (let i = 0; i < fruitItems.length; i++) {
        const currFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
        // const currDescText = fruitItems[i].querySelector('.fruit-description').textContent.toLowerCase();
        
        if (currFruitText.indexOf(textentered) === -1 ) {
            fruitItems[i].style.display = "none";
        } else {
            fruitItems[i].style.display = "flex";
           
        }
    }
});







// const descInp = document.createElement('input');
// descInp.id = 'desc';


// const form = document.querySelector('form');
// const btn = form.querySelector('button');
// form.insertBefore(descInp, btn);


// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const fruitInp = document.getElementById('fruit-to-add');
//     const descInp = document.getElementById('desc');
    
//     if (fruitInp.value !== '' && descInp.value !== '') {
//         const fruitList = document.querySelector('.fruits');
//         const newFruit = document.createElement('li');
//         newFruit.className = 'fruit';

//         const descPara = document.createElement('p');
//         descPara.className = 'fruit-desc';
//         descPara.textContent = descInp.value;

//         newFruit.innerHTML = `${fruitInp.value} <button class="del-btn">x</button>`;
//         newFruit.appendChild(descPara);
        
//         fruitList.appendChild(newFruit);

      
//     }
// });

// // Handle filter functionality to search fruits by name or description
// const filter = document.getElementById('filter');

// filter.addEventListener('keyup', function(e) {
//     const txt = e.target.value.toLowerCase();
//     const fruitItems = document.getElementsByClassName('fruit');
   
//     for (let i = 0; i < fruitItems.length; i++) {
//         const fruitTxt = fruitItems[i].firstChild.textContent.toLowerCase();
//         const descTxt = fruitItems[i].querySelector('.fruit-desc').textContent.toLowerCase();
        
//         if (fruitTxt.indexOf(txt) === -1 && descTxt.indexOf(txt) === -1) {
//             fruitItems[i].style.display = "none";
//         } else {
//             fruitItems[i].style.display = "flex";
//         }
//     }
// });



// const filter=document.getElementById('filter');

// filter.addEventListener('keyup',function(e){
//     const textentered = e.target.value.toLowerCase();

//     const fruitItems = document.getElementsByClassName('fruit');
//     for(var i=0; i<fruitItems.length; i++){
//         const cuttentFruitText = fruitItems[i].firstChild.textContent.toLowerCase();
//         if(cuttentFruitText.indexOf(textentered )=== -1){
//             fruitItems[i].style.display="none";
//         }else{
//             fruitItems[i].style.display="flex";
//         }
//     }
   
// })