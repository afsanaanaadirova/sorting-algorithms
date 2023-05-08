String.prototype.insertClass = function(){
    return this.slice(0, Math.floor(this.length / 2)) + " + " + this.slice(Math.floor((this.length / 2)))
  }
  
  var str ="salam"
  
  console.log(str.insertClass())
  
  Number.prototype.double = function(){
      return this * 2
  }
  
  var num = 3
  
  console.log(num.double())
  
  // Array.prototype.push = function(n){
  //     for (let i = 0; i > this.length; i ++){
  //         i 
  //     }
  //     return
  // }
  
  // var array =[2,5,6]
  
  // console.log(array.push(4))
  
  Array.prototype.push = function(n){
      return [...this, n]
      // return this[this.length] = n
  }
  var array =[2,5,6]
  
  console.log(array.push(4))