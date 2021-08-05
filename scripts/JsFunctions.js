//IIFE

(function(){
    console.log("inside IIFE")

 var understandArgs = function(name){
      if(name==null){
          console.log('hello guest');
      } else {
          console.log('hello'+name);
      }
  }  

  var funTakeFunArgs = function(salutation,funcRef){

        console.log(funcRef);

        var value = funcRef();

        console.log(salutation+ value);
  }
//   understandArgs("ramesh");
//   understandArgs();
 
 funTakeFunArgs('Dr.',function(){return 'Ramesh'});
  
})();



