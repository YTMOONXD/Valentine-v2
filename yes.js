document.getElementById('yes').addEventListener('click', function() {
    var awnser = "yes"
    var name = localStorage.getItem('name');
    console.log(name);
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
        window.location.href = "no6.html";
    }
        return response.json();
    })
    .then(data => {
        console.log('Data sent successfully:', data);
        window.location.href = "no6.html";
        })
    .catch(error => {
        console.error('Error sending data:', error);
        window.location.href = "no6.html";
    });
});  
  
  