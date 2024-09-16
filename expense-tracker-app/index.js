// this code is not working gautaum code is working

// // document.querySelector('form');


function handleFormSubmit(e){
    e.preventDefault();


    const amount = document.getElementById('amount');
    const descrp = document.getElementById('descrp');
    const sel = document.getElementById('sel');

   
    const details={
    amount: amount.value,
    descrp: descrp.value,
     sel: sel.value

    }

    localStorage.setItem(details.amount, JSON.stringify(details));
    showOnScreen(details);

    // console.log(amount.value);
    // console.log(details.amount);


    document.querySelector('ul').addEventListener("click", function(e){
        if(e.target.classList.contains('del')){
            console.log(amount.value);
            console.log(details.amount);
           
            const delEle = e.target.parentElement;
            console.log(e.target.parentElement);
            localStorage.removeItem(delEle.id);
            delEle.remove();
        }else if(e.target.classList.contains('edit')){
            const editele = e.target.parentElement;
            const details = JSON.parse(localStorage.getItem(editele.id));
      
        
            // populate
            document.getElementById('amount').value = details.amount;
            // console.log(amount.value);
            // console.log(details.amount);
            // amount.value = details.amount;

            document.getElementById('descrp').value = details.descrp;
            document.getElementById('sel').value = details.sel;
        
        localStorage.removeItem(editele.id);
        editele.remove();
        }
    });
    
    
}

function showOnScreen(details){
   const parentEle= document.querySelector('ul');
   const childEle= document.createElement('li');


   childEle.innerHTML=`${details.amount} - ${details.descrp} - ${details.sel} <button class="del">delet</button> <button class="edit">edit</button>`

   parentEle.appendChild(childEle);
   childEle.id="details.amount";



}

// delete

// document.querySelector('ul').addEventListener("click", function(e){
//     if(e.target.classList.contains('del')){

//         console.log('hjk')
//         const delEle = e.target.parentElement;
//         localStorage.removeItem(delEle.id);
//         delEle.remove();
//     }else if(e.target.classList.contains('edit')){
//         const editele = e.target.parentElement;
//         const local = JSON.parse(localStorage.getItem(editele.id));
    
    
//         // populate
//         document.getElementById('amount').value = local.amount;
//         document.getElementById('descrp').value = local.descrp;
//         document.getElementById('sel').value = local.sel;
    
//     localStorage.removeItem(editele.id);
//     editele.remove();
//     }
// });






// by gautaum



// const form=document.querySelector("form");
// //console.log(form);
// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     //console.log(event.target.category.value)
//     //const newLi=document.createElement('li');
//     const ul=document.querySelector("ul");
//     //ul.innerHTML=ul.innerHTML+<li></li>;
//     const newLi=document.createElement('li');
//     newLi.innerHTML=event.target.amount.value +"-"+event.target.category.value+"-"+event.target.description.value;
//     ul.append(newLi);
//     const deleteButton=document.createElement('button');
//     deleteButton.innerHTML="Delete Expense";
//     const editButton=document.createElement('button');
//     editButton.innerHTML="Edit Expense";
//     newLi.append(deleteButton);
//     newLi.append(editButton);

//     const myObj = {
//         amount: event.target.amount.value,
//         category: event.target.category.value,
//         description: event.target.description.value,
//       };
      
//       localStorage.setItem(event.target.description.value, JSON.stringify(myObj));
//       deleteButton.addEventListener("click", function (event) {
//         //console.log(event.target.parentElement)
//         //const email1 = document.getElementById("email");
//         event.target.parentElement.remove();
//         localStorage.removeItem(myObj.description);
        
//       });
//       editButton.addEventListener("click", function (event) {
//         //console.log(event.target.parentElement)
//         const amount1 = document.getElementById("amount");
//         const category1 = document.getElementById("category");
//         const description1 = document.getElementById("description");
//         event.target.parentElement.remove();
//         localStorage.removeItem(myObj.description);
//         //email="afdaf";
//         //console.log(email);
//         amount1.value = myObj.amount;
//         category1.value = myObj.category;
//         description1.value = myObj.description;
//       });
//     //console.log(li);
// })


