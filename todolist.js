var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    amount = document.getElementById('amount');

//This variable is for my second "To Do List"
var todo2 = document.getElementById('todolist2'),
    form2 = document.getElementById('myform2'),
    field2 = document.getElementById('newitem2'),
    time = document.getElementById('time');

//These functions makes it so that when you click on one of the "Change Color" buttons the text will change color
function randomColor() {
  document.getElementById('todolist2').style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
}
function randomColor2() {
  document.getElementById('todolist').style.color = '#' + Math.floor(Math.random()*16777215).toString(16);
}



form.addEventListener('submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div class="inline">' + text + '</div>';
  evt.preventDefault();
}, false);

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  tar.parentNode.removeChild(tar);
  evt.preventDefault();
}, false);



//This is also for my second "To Do List"
form2.addEventListener('submit', function(evt) {
  var text = field2.value;
  todo2.innerHTML += '<div>' + text + '</div>';
  evt.preventDefault();
}, false);

todo2.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  tar.parentNode.removeChild(tar);
  evt.preventDefault();
}, false);