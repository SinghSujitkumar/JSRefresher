
'use strict';



let hasDriverLicense = false;
const passtest = true;
if(passtest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive");

function logger(){
    console.log("My name us Jonas");
}
logger();

// const appleOrangeJuice = fruitProcessor(2,)

// Section 2 Functions
function calcAge1(birthYear){
    return 2022-birthYear    
}
const age1 = calcAge1()
console.log(calcAge1(1999.5))


// Anonymous functions
const calcAge2 = function(birthYear){
    return 2022-birthYear
}
const age2 = calcAge2(1991)

const calcAge3 =birthYear=> 2037-birthYear;

const age4 =calcAge3(1991);
console.log(age4);




// this method

const jonas ={
    firstName :"jonas",
    lastName :"sdf",
    birthYeah:"1932",
    friends:['Micha',"ram"],
    hasDriverLicense :true,

    calcAge: function(){
        console.log(this);
        return 2021-this.birthYeah;
    }
    
};



console.log(jonas.calcAge(2000))
console.log(432);