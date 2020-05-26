//Add function
function add() {
  var x = document.forms['my-form'];
  var text = '';
  var i;
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value + '<br>';
  }

  //To remove the message under My notes
  document.getElementById('msg').innerHTML = '';

  //To create list element
  list = document.createElement('li');
  list.id = 'myList';
  list.innerHTML = text;
  document.getElementById('myNotes').appendChild(list);

  //To create edit button
  edit = document.createElement('button');
  edit.id = 'edit';
  edit.className = 'button';
  edit.onclick = function () {
    myEdit();
  };
  edit.innerHTML = 'Edit';
  list.appendChild(edit);

  //To create delete button
  del = document.createElement('button');
  del.id = 'del';
  del.className = 'button';
  del.onclick = function () {
    myDel();
  };
  del.innerHTML = 'Delete';
  list.appendChild(del);
}

//Edit function
function myEdit() {
  var y = document.getElementById('myList');
  y.contentEditable = true;
  document.getElementById('edit').innerHTML = 'Save';
  var z = document.getElementById('edit');
  z.onclick = function () {
    mySave();
  };

  //Save function
  function mySave() {
    y.contentEditable = false;
    document.getElementById('edit').innerHTML = 'Edit';
    var u = document.getElementById('edit');
    u.onclick = function () {
      myEdit();
    };
  }
}

//Delete function
function myDel() {
  var x = document.getElementById('myList');
  x.remove();
}
