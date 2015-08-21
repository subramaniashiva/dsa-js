'use strict';
(function(){
  var chatBox = document.getElementById('chat'),
      status = document.getElementById('status');

  

  chatBox.addEventListener('keyup', function(){
    if(chatBox.value) {
      status.innerHTML = 'User is typing';
    }
    else {
      status.innerHTML = 'User has stopped typing';
    }
  });
})();