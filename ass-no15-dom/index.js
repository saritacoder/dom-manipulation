

document.addEventListener('DOMContentLoaded', () => {
    // Form submission handler
    function handleFormSubmit(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const tel = document.getElementById('phone').value;
  
      const userDetail = {
        username: username,
        email: email,
        tel: tel
      };
  
      localStorage.setItem(userDetail.email, JSON.stringify(userDetail));
      showUserOnScreen(userDetail); // calling this for showing details of user on page
    }
  
    // Function to display user details on screen
    function showUserOnScreen(userDetail) {
      const parentEle = document.getElementById('listElements');
      const childEle = document.createElement('li'); // creating type of element of child
      childEle.innerHTML = `${userDetail.username} - ${userDetail.email} - ${userDetail.tel} <button class="btn">Delete</button>`;
      parentEle.appendChild(childEle);
      childEle.id = userDetail.email; // Set id to email for easy removal from localStorage
    }
  
    // Event listener for form submission
    document.querySelector('form').addEventListener('submit', handleFormSubmit);
  
    // Event delegation for delete button
    document.getElementById('listElements').addEventListener('click', function(event) {
      if (event.target.classList.contains('btn')) {
        const detailDel = event.target.parentElement;
        console.log(detailDel);
        localStorage.removeItem(detailDel.id); // Remove from localStorage using id
        detailDel.remove(); // Remove from the screen
      }
    });
  });
  
  