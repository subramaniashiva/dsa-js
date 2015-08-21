'use strict';
(function(){
  var chatBox = document.getElementById('chat'),
      status = document.getElementById('status');

  var interval;

  chatBox.addEventListener('keyup', function(){
    if(chatBox.value) {
      status.innerHTML = 'User is typing';
      clearTimeout(interval);
      interval = setTimeout(function(){
        console.log('called');
        status.innerHTML = 'User has stopped typing';
      }, 2000);
    }
    else {
      status.innerHTML = 'User has stopped typing';
    }
  });
})();