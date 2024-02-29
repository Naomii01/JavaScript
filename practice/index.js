// 1. what is the difference bewteen dot notation and bracket notation when accessing properties
/* Brakcet notation it is used to access dynamically and dot notation can not be used to access dynamically the properties or special characters
dot notation Syntax: object.property and is used when the property name is a valid identifier. while bracket notation: object['property']
Used when the property name is not a valid identifier, or when the property name is dynamic and stored in a variable.
*/

//2 create an object thats called student with  age name and grade and the property will be he is a boy

let Studentobj = {
    name: 'Naomi',
    age:22,
    grade:5,
    'is a boy': true, 
};
console.log (" i am " + Studentobj.name + " and am " + Studentobj.age +" years old ");


// create a consturctor fucntion with properties name,age
function person (){
 this.name = "name";
 this.age = " 22";
}
var personinst = new person();
console.log(personinst.name);
console.log(personinst.age);




// using studentobj using for in loop through the keys

for (let property in Studentobj) {
    console.log(property + ": " + Studentobj[property]);
}
// return arrays of the keys

let keysArray = Object.keys(Studentobj);
console.log(keysArray);