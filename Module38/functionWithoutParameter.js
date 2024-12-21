function message(){
    console.log("Hello Shourya Dubey");
}
message();

function sayMessage(){
    return "I am Happy";
}
let msg = sayMessage();
console.log(msg);

function textMessage(){
    return "Today is Wednesday";
}
let newMessage = msg + `${" "}` + textMessage();
console.log(newMessage);
