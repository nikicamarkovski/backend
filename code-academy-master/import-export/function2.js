var req = require('./function1');



var isPalindrome = function (one , two) {

    var getLargest = req.LargestNumber([1 , 10 , 15, 1221 , 1231, 123123, 421412])
    console.log("the Largest Number is = " + getLargest);
    var palindrome =   getLargest.toString().split("");

 
  
    for ( var i = 0 ; i < palindrome.length / 2; i ++) {
      
      if (palindrome[i] !== palindrome[palindrome.length - i - 1]) {
          return two
      }
      }
      return one
    } 


 module.exports = {
  isPalindrome
 }