var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    amount = document.getElementById('amount');

var todo2 = document.getElementById('todolist2'),
    form2 = document.getElementById('myform2'),
    field2 = document.getElementById('newitem2'),
    time = document.getElementById('time');



form.addEventListener('submit', function(evt) {
  var text = field.value;
  todo.innerHTML += '<div class="inline">' + text + '</div>';
  evt.preventDefault();
}, false);

form.addEventListener('submit', function(evt) {
    var text = amount.value;
    todo.innerHTML += '<div class="inline">' + text + '</div>';
    evt.preventDefault();
}, false);

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  tar.parentNode.removeChild(tar);
  evt.preventDefault();
}, false);



form2.addEventListener('submit', function(evt) {
  var text = field2.value;
  todo2.innerHTML += '<div>' + text + '</div>';
  evt.preventDefault();
}, false);

form2.addEventListener('submit', function(evt) {
  var text = time.value;
  todo2.innerHTML += '<div>' + text + '</div>';
  evt.preventDefault();
}, false);

todo2.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  tar.parentNode.removeChild(tar);
  evt.preventDefault();
}, false);
//Yay this has exactly fifty lines used up! YAY!