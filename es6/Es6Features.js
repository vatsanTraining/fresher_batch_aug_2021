//,rest,spread,destructuring

const usingLet = function(){

    for(var i=0;i<=5;i++){
        console.log(i);
    }
    console.log("Value of I At end of Loop"+ i)

    for(let j=0;j<=5;j++){
        console.log(j);
    }
   // console.log("Value of I At end of Loop"+ j)

}

const usingDefaArg = function(currency=200){

    return currency * 100;
}

const usingArrow = function(){

    const handleRequest = (args) => args.length; 

    console.log(handleRequest('Arrow Function'));
}

const usingRestParam = function(...marks){
 
     let total =0;
     marks.forEach( (eachValue,idx)=>{
         
        total = total+eachValue;
     });
    console.log(total);
}
usingRestParam(60,80,90);
//usingLet();

// console.log("Converter"+ usingDefaArg(30));

// console.log("Converter"+ usingDefaArg());

//usingArrow();