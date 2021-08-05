
var app = {};

var app = {};

app.attachEvents =function(){

    var btnElement =
        document.getElementById("submitButton");


   btnElement.addEventListener('click', function(){

        alert('submit button click')
   });     
  

    links = document.getElementsByTagName('a');

    
   for(var i=0;i<links.length;i++)
   {
    links[i].addEventListener('click',function(event){

        event.preventDefault();
         alert("I"+i);
          alert(this.getAttribute('href'));

    });
   }

}

app.attachEvents();

