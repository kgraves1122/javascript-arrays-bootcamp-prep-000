var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic',
  ]
  
var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
  ]
  
var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skitles'
  ]
  
function addElementToBeginningOfArray (array, element) {
  return [ element, ...array];
  }

function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift(element);
  return array;
  } 
  
  function addElementToEndOfArray (array, element) {
    return [...array, element];
  }
  
  function destructivelyAddElementToEndOfArray (array, element) {
    array.push(element);
    return array;
  }
  
  function accessElementInArray (ar, num) {
    return ar[num];
  }
  
  function destructivelyRemoveElementFromBeginningOfArray (array) {
    array.shift();
    return array;
  }
  
  function removeElementFromBeginningOfArray (arrry) {
    return arrry.slice(1);
  }

function destructivelyRemoveElementFromEndOfArray (array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray (only) {
  return only.slice(0, only.length - 1);
}
