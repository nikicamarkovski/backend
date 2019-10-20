var LargestNumber = function (arr) {
    var currentNumber = arr[0];
    for (var i = 0 ; i < arr.length ; i ++) {
        if (arr[i] > currentNumber ) {
            currentNumber = arr[i];
        }
    }
  return currentNumber ; 
}


module.exports = {
    LargestNumber
}