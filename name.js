document.getElementById('submit').addEventListener('click', function() {
  var name = document.getElementById('name').value.trim();
  
  console.log(typeof name);
  console.log(name);
  
  if(name === ""){
    let h3 = document.getElementById('h3');
    h3.textContent = "nuh uh you can't skip this ENTER YOUR NAME";
    h3.style.color = 'red';
  }
  else{
    localStorage.setItem('name', name);
    localStorage.setItem('yon', '');
    window.location.href = "start.html";
  }
});
