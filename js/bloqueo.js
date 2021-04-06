window.onload = function() {
    var myInput = document.getElementById('passwordConfirm');
    myInput.onpaste = function(e) {
      e.preventDefault();
      alert("Esta acción está prohibida");
    }
    
    myInput.oncopy = function(e) {
      e.preventDefault();
      alert("Esta acción está prohibida");
    }
  }