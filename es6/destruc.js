
const destruc1 = function(){

    [firstName,lastName] = ["Ramesh","Reddy"];

    console.log(firstName);
    console.log(lastName);
}

const destruc2 = function(){
   
    let name = "ramesh"; 
    
    [name,setName] = [name,(str) => "Hi"+str];
    
    console.log(name);
    console.log(setName(name));
}

const destruc3= function(){
         var user = {name:'ramesh',location:'chennai',email:'ram@abc.com'};

        let  {name:userName,...others} = user;

          console.log(userName);
          console.log(others);

        }
//destruc1();
//destruc2();
destruc3();