function Func(arr1,arr2) {
    let result =[]
    for(let i =0; i < arr1.length; i++){
        for(let j = 0; j < arr2.length;j++){
            if(arr1[i] == arr2[j]){
                 result.push(arr1[i])
            }
        }
    }
    return result
  
}
console.log(Func([2,4,5],[2,4,6]))

//palindrome1
function palindrome (string){
    const myArray = string.split("")
    var reverseArray =myArray.reverse()
    var joinArray = reverseArray.join("");
    if(string == joinArray){
        console.log("palindrome")
    }else{
        console.log('no')
    }
}
console.log(palindrome('ata'))

//palindrome2
function palindromeFunc(str){
    for( let i = 0; i < str.length; i++){
        if(str[i] != str[str.length - i - 1]){
            return false
        }
    }
    return true
}
console.log(palindromeFunc("ana"))

//prime
function primeFunc(a){
    if(a == 1) return false

    if(a / 2 != 0){
    return false
  }
  return true
}
console.log(primeFunc(68))

function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    var x =2; 2 < 5; 2++
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(37));


