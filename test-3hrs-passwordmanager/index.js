
let passwords = [];

function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
    email: event.target.email.value,
    password: event.target.password.value,
  };

  axios
    .post("https://crudcrud.com/api/df2e9de79474461494d073dc567e5828/passwordkeeper", userDetails)
    .then((response) => {
      passwords.push(response.data);
      displayUserOnScreen(response.data);
      updatePasswordCount();
    })
    .catch((error) => console.log(error));

  // Clearing the input fields
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
}

function displayUserOnScreen(userDetails) {
  const userItem = document.createElement("li");
  userItem.textContent = `${userDetails.email} - ${userDetails.password}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  userItem.appendChild(editBtn);

  const userList = document.getElementById("password-list");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    axios
      .delete(`https://crudcrud.com/api/df2e9de79474461494d073dc567e5828/passwordkeeper/${userDetails._id}`)
      .then((response) => {
        userList.removeChild(userItem);
        passwords = passwords.filter((password) => password._id !== userDetails._id);
        updatePasswordCount();
      })
      .catch((error) => console.log(error));
  });

  editBtn.addEventListener("click", function (event) {
    axios
      .delete(`https://crudcrud.com/api/df2e9de79474461494d073dc567e5828/passwordkeeper/${userDetails._id}`)
      .then(() => {
        userList.removeChild(userItem);
        passwords = passwords.filter((password) => password._id !== userDetails._id);
        updatePasswordCount();
      })
      .catch((error) => console.log(error));

      // populate
    document.getElementById("email").value = userDetails.email;
    document.getElementById("password").value = userDetails.password;
  });

  updatePasswordCount();
}

function updatePasswordCount() {
  const userList = document.getElementById("password-list");
  const totalPasswords = userList.getElementsByTagName("li").length;
  document.getElementById("totalpassword").textContent = `Total Password: ${totalPasswords}`;
}

function handleSearch(event) {
  const searchTerm = event.target.value.toLowerCase();
  const filteredPasswords = passwords.filter((password) =>
    password.email.toLowerCase().includes(searchTerm)
  );
  if (searchTerm) {
    document.getElementById("totalpassword").style.display = "none";
  } else {
    document.getElementById("totalpassword").style.display = "block";
  }
  displayFilteredPasswords(filteredPasswords);
}

function displayFilteredPasswords(filteredPasswords) {
  const userList = document.getElementById("password-list");
  userList.innerHTML = "";
  if (filteredPasswords.length > 0) {
    filteredPasswords.forEach((password) => {
      const userItem = document.createElement("li");
      userItem.textContent = `${password.password}`;
      userList.appendChild(userItem);
    });
  }
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/df2e9de79474461494d073dc567e5828/passwordkeeper")
    .then((response) => {
      passwords = response.data;
      passwords.forEach((password) => displayUserOnScreen(password));
      updatePasswordCount();
    })
    .catch((error) => console.log(error));
});


