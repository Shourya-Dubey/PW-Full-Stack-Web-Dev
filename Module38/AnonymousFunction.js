let x = function(){
    console.log("Hi there");
}
x();


//IIFE
(function name(){
    console.log("name");
})();

(()=>{
    console.log("hello");
})();

(function(x){
    console.log(x*x);
    
})(5)