
let setNum = [];
let bookings = [];

function handleFormSubmit(event) {
  event.preventDefault();
  const userDetails = {
    username: event.target.username.value,
    setNo: event.target.setNo.value,
  };

  // Check if the set number already exists
  const existingSet = bookings.find((booking) => booking.setNo === userDetails.setNo);
  if (existingSet) {
    alert("This set number is already booked!");
    return;
  }

async function fetchedData(){
  try{
    let response = await fetch('https://crudcrud.com/api/145c160339a94cb5ac87fb9d8dadc433", userDetails')
    let data = await response.json();
    console.log(data);
  }catch(err){
    console.log(err);
  }
}
fetchedData();
  axios
    .post("https://crudcrud.com/api/145c160339a94cb5ac87fb9d8dadc433/movieSetBook", userDetails)
    .then((response) => {
      bookings.push(response.data);
      displayUserOnScreen(response.data);
      updateTotalBooked();
      toggleNothingPresent();
    })
    .catch((error) => console.log(error));

  // Clearing the input fields
  document.getElementById("username").value = "";
  document.getElementById("setNo").value = "";
}

function displayUserOnScreen(userDetails) {
  const userItem = document.createElement("li");
  userItem.textContent = `${userDetails.username} - ${userDetails.setNo}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  userItem.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  userItem.appendChild(editBtn);

  const userList = document.getElementById("user-list");
  userList.appendChild(userItem);

  deleteBtn.addEventListener("click", function (event) {
    axios
      .delete(`https://crudcrud.com/api/145c160339a94cb5ac87fb9d8dadc433/movieSetBook/${userDetails._id}`)
      .then((response) => {
        userList.removeChild(userItem);
        bookings = bookings.filter((booking) => booking._id !== userDetails._id);
        updateTotalBooked();
        toggleNothingPresent();
      })
      .catch((error) => console.log(error));
  });

  editBtn.addEventListener("click", function (event) {
    axios
      .delete(`https://crudcrud.com/api/145c160339a94cb5ac87fb9d8dadc433/movieSetBook/${userDetails._id}`)
    
      .then(() => {
        userList.removeChild(userItem);
        setNum = setNum.filter((set) => set._id !== userDetails._id);
        updateTotalBooked();
        toggleNothingPresent();
      })
      .catch((error) => console.log(error));

    // populate
    document.getElementById("username").value = userDetails.username;
    document.getElementById("setNo").value = userDetails.setNo;
  });

  updateTotalBooked();
  toggleNothingPresent();
}

function updateTotalBooked() {
  const userList = document.getElementById("user-list");
  const totalSetBooked = userList.getElementsByTagName("li").length;
  document.getElementById("total-value").textContent = `Total Booked: ${totalSetBooked}`;
}

function handleSearch(event) {
  const searchTerm = event.target.value;
  const filteredSet = bookings.filter((booking) =>
    booking.setNo.includes(searchTerm)
  );
  if (searchTerm) {
    document.getElementById("total-value").style.display = "none";
  } else {
    document.getElementById("total-value").style.display = "block";
  }
  displayFilteredSet(filteredSet);
}

function displayFilteredSet(filteredSet) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";
  if (filteredSet.length > 0) {
    filteredSet.forEach((booking) => {
      const userItem = document.createElement("li");
      userItem.textContent = `${booking.username} - ${booking.setNo}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      userItem.appendChild(deleteBtn);

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      userItem.appendChild(editBtn);

      userList.appendChild(userItem);

      deleteBtn.addEventListener("click", function (event) {
        axios
          .delete(`https://crudcrud.com/api/145c160339a94cb5ac87fb9d8dadc433/movieSetBook/${booking._id}`)
          .then((response) => {
            userList.removeChild(userItem);
            bookings = bookings.filter((bk) => bk._id !== booking._id);
            updateTotalBooked();
            toggleNothingPresent();
          })
          .catch((error) => console.log(error));
      });

      editBtn.addEventListener("click", function (event) {
        axios
          .delete(`https://crudcrud.com/api/145c160339a94cb5ac87fb9d8dadc433/${booking._id}`)
          .then(() => {
            userList.removeChild(userItem);
            setNum = setNum.filter((set) => set._id !== booking._id);
            updateTotalBooked();
            toggleNothingPresent();
          })
          .catch((error) => console.log(error));

        // populate
        document.getElementById("username").value = booking.username;
        document.getElementById("setNo").value = booking.setNo;
      });
    });
  } else {
    toggleNothingPresent();
  }
}

function toggleNothingPresent() {
  const userList = document.getElementById("user-list");
  const noSets = document.getElementById("no-sets");
  if (userList.getElementsByTagName("li").length === 0) {
    noSets.style.display = "block";
  } else {
    noSets.style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  axios
    .get("https://crudcrud.com/api/145c160339a94cb5ac87fb9d8dadc433/movieSetBook")
    .then((response) => {
      bookings = response.data;
      bookings.forEach((booking) => displayUserOnScreen(booking));
      updateTotalBooked();
      toggleNothingPresent();
    })
    .catch((error) => console.log(error));
});





