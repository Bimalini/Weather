var input=document.querySelector('.input_text');
var city=document.querySelector('#name');
var ctemp=document.querySelector('.temp');
var cdesc=document.querySelector('.desc');
var button=document.querySelector('.submit');


button.addEventListener('click',function(name){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=50a7aa80fa492fa92e874d23ad061374')
    .then(response => response.json())
    .then(data => { 
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];

        city.innerHTML = nameValue;
        cdesc.innerHTML = descValue;
        ctemp.innerHTML = tempValue+"° C";
        input.value ="";  
    })
   
.catch(err => alert("Wrong city name!"));
})
