'use strict';
(function(){
  var chatBox = document.getElementById('chat'),
      status = document.getElementById('status');

  chatBox.addEventListener('keyup', function(){
    status.innerHTML = 'User is typing';
  });
})();