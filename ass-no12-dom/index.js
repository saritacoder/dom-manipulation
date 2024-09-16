// this is also working but tesst case not passing


// const form =document.querySelector('form');

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
  
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const phone = document.getElementById('phone').value;
  
//     localStorage.setItem('Username', username);
//     localStorage.setItem('Email', email);
//     localStorage.setItem('Phone', phone);
  
   
//   });
  

  // Write your code below:


const form =document.querySelector('form');

function handleFormSubmit(event) {
    event.preventDefault();
  
 const username = event.target.username.value;
  const email = event.target.email.value;
   const phone = event.target.phone.value;
  
    localStorage.setItem('Username', username);
    localStorage.setItem('Email', email);
    localStorage.setItem('Phone', phone);
  
   
  };

  form.addEventListener('submit',handleFormSubmit);

  alert('form submited');
  module.exports = handleFormSubmit;