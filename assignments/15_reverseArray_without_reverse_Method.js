function reverse(array) {
    var newArr = [];
    for (var index = array.length-1; index >=0; index--) {
      newArr.push(array[index]);
    }
    return newArr;
  }
  console.log(reverse([20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]));
  