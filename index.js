//variables
var a=10;
let b=20;
const c=30;
//warning
console.warn("This is the warning message...");
//error
console.error("This is the error message...");
//input
prompt("Enter your name","DHANU");
//group
console.group("Language");
console.log("english");
console.log("tamil");
console.log("hindi");
console.groupEnd();
//typeof
console.log(typeof(b));
//function
function one() {
    alert("Alert message");
}
one()
//call back function
function ask(ans,yes,no) {
    if(ans==10){
        yes()
    }
    else{
        no()
    }
}
function ok(){
    alert("your ans is crt...")
}
function cancel() {
    alert("your ans is wrong")
}
var ans = prompt("what is the ans of 5+5?",0)
console.log(ans);
ask(ans,ok,cancel)
//terminal
let on=1;
let off =2;
const final= on>off?"on is bigger":"off is bigger"
console.log(final);
//object datatype
let ob1 = {
    name:"dhanu",
    age:20,
    fun:function(){
        console.log("helloooooo");
    }
}
console.log(ob1.fun());
//object
function man(){
    this.name="dhanu";
    this.age=20;
}
let obj1= new man();
let obj2= new man();
let obj3=obj2;
obj2.age=19;
console.log(obj1.age);
console.log(obj2.age);
console.log(obj3.age);
//destruction
const {age}=obj1;
console.log(age)
//array
let arr=[[1,2,3],[4,5,6]]
console.log(arr[1][1]);
arr[1][1]="five"
console.log(arr[1][1]);
//indexof
let arr1=[2,5,8,9]
let arr2=[...arr1]
console.log(arr2);
console.log(arr2.indexOf(8));
//map
let old=[2,3,4,5,6]
let neww = old.map((element)=>{
    return element+2;
})
console.log(neww);
//reduce
var array=[2,5,3,6,0]
let sumfun= array.reduce((accumalator,currentvalue)=>{
    return accumalator + currentvalue;
},0)
console.log(sumfun);
//class
class grandpa{
    constructor(){
        this.favhero="rajini",
        console.log(this.favhero);
    }
}
class parent{
    constructor (){
        this.favhero="kamal",
        console.log(this.favhero);
    }
}
class child extends parent{
    constructor (){
        this.favhero="virosh",
        console.log(this.favhero);
    }
}
let cg = new parent();







