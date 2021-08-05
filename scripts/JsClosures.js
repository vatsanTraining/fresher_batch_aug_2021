
var counter = (function(){
   // private int clap=1;
    var clap = 1;
    // private void change(val)
    function change(val){
        clap=clap+val;
    }
        return{
           // public void increment(); 
           increment:function(){
            console.log("inside INCREMENT:"+clap);
            change(1);
           },
           // public int getValue()
           value:function(){
               return clap;
           }

        }

})();

//console.log(clap);
console.log(counter);
console.log(counter.increment())
console.log(counter.increment())
//console.log("change"+counter.change);
console.log(counter.value());

