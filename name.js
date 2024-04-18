document.getElementById('submit').addEventListener('click', function() {
  var name = document.getElementById('name').value;
  localStorage.setItem('name',name)
  window.location.href = "start.html";
});



