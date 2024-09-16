//   working correctly


const form = document.querySelector('form');
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const fruitToAdd = document.getElementById('fruit-to-add');

  // Create the li
  const newLi = document.createElement('li');
 
  newLi.innerHTML = fruitToAdd.value+ `<button class="delete-btn">X</button><button class="edit-btn">Edit</button>`;

  // Add the new li as the last element of the unordered list
  fruits.appendChild(newLi);

  // Clear the input field after adding the fruit
  document.getElementById('fruit-to-add').value = '';
});

fruits.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const fruitToDelete = event.target.parentElement;
    fruits.removeChild(fruitToDelete);
  }
});




