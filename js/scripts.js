// Adding a new item to the list of items:
let todoList = (function newItem() {

   let li = $('<li></li>');   // stores each li element as a variable

   let inputValue = $('#input').val(); // stores the value as a variable, # is for the ID

   li.append(inputValue);  // appends this value into li element

   if (inputValue === '') {
     alert('You must write something!');
   } else {
     let list = $('#list'); // # is for the ID
     list.append(li);
   }

 // Crossing out an item from the list of items:

function crossOut() {
    li.toggleClass('strike');
  }
  li.on('dblclick',crossOut); // on is the event listener

 // Adding the delete button "X":

   let crossOutButton = $('<crossOutButton><crossOutButton>'); // stores as a variable

  crossOutButton.append(document.createTextNode("X")); //

  li.append(crossOutButton); // appends the crossOutButton to li element

  crossOutButton.on("click", deleteListItem); // on is the event listener

//Adding CLASS DELETE (DISPLAY: NONE) from the css:
   
function deleteListItem(){
  
    li.addClass('delete');
  }

 // Reordering the items: 
   
   $('#list').sortable();

})();