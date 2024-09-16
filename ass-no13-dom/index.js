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
  showUserOnScreen(userDetail); //calling this for showing details of user on page
}

function showUserOnScreen(userDetail){
  const parentEle = document.getElementById('listElements');
  const childEle = document.createElement('li'); // creating type of element of child
  childEle.textContent = userDetail.username +' - '+ userDetail.email +' - '+ userDetail.tel;
  parentEle.appendChild(childEle);

              }


