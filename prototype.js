
//1
function Add(a){
    let total = 0;

    return function Func(){
    return total +=a
}
}
const test = Add(5)
console.log(test())
console.log(test())
console.log(test())


//2
function Rectangle(width , height) {
    this.width = width;
    this.height = height;
  }

Rectangle.prototype.getArea = function(){
    return this.width * this.height
}

const newRect = new Rectangle(4,5)

console.log(newRect.getArea())

/////evde
//1
function Person(name , age) {
    this.name = name;
    this.age = age;
}

Person.prototype.introduce = function(){
    return 'ad'+":"+this.name +" " + 'yash' + ":" +this.age
}
const person = new Person("Hasan",5)

console.log(person.introduce())

//2
function Animal(name) {
    this.name = name;
}
Animal.prototype.eat = function(){
    return this.name +" "+ "is eating"
}
const animal = new Animal("Cat")

console.log(animal.eat())

//3
Array.prototype.last = function(){
    return this.length ? this[this.length - 1] :-1
}
var arr =[2,5,6]
var arrEmpty =[]

console.log(arr.last())
console.log(arrEmpty.last())