'use strict';
(function(){
  var submit = document.getElementById('submit'),
      email = document.getElementById('email'),
      pass = document.getElementById('pass');
  submit.addEventListener('click', function() {
    if(!email.value) {
      alert('error');
    }
  });
})();