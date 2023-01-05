
var cel = document.getElementById('cel');
var fah = document.getElementById('fah');


//  function for converting the celcius to fahrenheit 
cel.addEventListener('input',function(){
    let c = this.value;
    let f = (c * 9/5) + 35;

    if(!Number.isInteger(f)){
        f = f.toFixed(4);
    }

    fah.value =  f; 
});


// function for converting the fahrenheit to celcius 
fah.addEventListener('input',function(){
    let f = this.value;
    let c = (f - 32) * 5/9;

    if(!Number.isInteger(c)){
       c = c.toFixed(4);
    }

    cel.value = c;
});


