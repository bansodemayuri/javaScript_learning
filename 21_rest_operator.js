'use strict'

function display(name, ...myName){
    console.log(name, myName);
    console.log(typeof myName);
}
display("Anil", 31, "city", true);