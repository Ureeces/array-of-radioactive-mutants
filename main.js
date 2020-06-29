/******************
 * YOUR CODE HERE *
 ******************/
function addMeToEnd(arr) {
  arr.push("Colin");
}

function addMeToStart(arr) {
  arr.unshift("Colin");
}

function changeLast(arr, change) {
  arr.splice(arr.length - 1, 1, change);
}

function changeAllValuesTo(arr, change) {
  for(let i = 0; i < arr.length; i++) {
    arr[i] = change;
  }
}

function oddOrEven(arr) {
  for(let i = 0; i <arr.length; i++) {
    let isOdd = arr[i] % 2 !== 0 ? true : false;
    if(isOdd) {
      arr[i] = "odd";
    }

    else {
      arr[i] = "even";
    }
  }
}

function changeNextThreeToValue(startIndex, arr, newValue) {
  for(let i = startIndex; i < startIndex + 3; i++) {
    arr[i] = newValue;
  }
}


/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof addMeToEnd === 'undefined') {
  addMeToEnd = undefined;
}

if (typeof addMeToStart === 'undefined') {
  addMeToStart = undefined;
}

if (typeof changeLast === 'undefined') {
  changeLast = undefined;
}

if (typeof changeAllValuesTo === 'undefined') {
  changeAllValuesTo = undefined;
}

if (typeof oddOrEven === 'undefined') {
  oddOrEven = undefined;
}

if (typeof changeNextThreeToValue === 'undefined') {
  changeNextThreeToValue = undefined;
}


module.exports = {
  addMeToEnd,
  addMeToStart,
  changeLast,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}
