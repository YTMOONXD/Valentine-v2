
document.getElementById('no').addEventListener('click', function() {
    var awnser = "no"
    var name = localStorage.getItem('name');
    fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
        body: JSON.stringify({ awnser: awnser , name: name})   
    })
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
        
    }
        return response.json();
    })
    .then(data => {
        console.log('Data sent successfully:', data);
        localStorage.setItem('yon', 'NO');
        let a = localStorage.getItem('yon');
        console.log(typeof a);
        if(a == 'NO'){
            window.location.href = "no6.html";
        };
        })
    .catch(error => {
        alert('Womp Womp the server is closed ', error);
        console.log("the error that make that happen ", error)
    });
});  
  

  
  
  