var boxNumber = 0;
var getGridNumber = prompt("How big do you want your board?");
var updateGameState = function(getGridNumber) {
  if (getGridNumber !== NaN) {
    boxNumber = getGridNumber * getGridNumber;
      for (var i = 1; i <= boxNumber; i++) {
        var output = document.querySelector(".container")
        var newCell = container.createElement('div')
        newCell.classList.add('grid')
        container.appendChild(newCell)
}
}
};


var colorPicker = document.querySelector('.paint-container')
var currentColor = "#fff"
colorPicker.addEventListener('click', function () {
  var property = window.getComputedStyle(event.target)
  var color = property.getPropertyValue("background-color")
  console.log(color)
  currentColor=color
})

var gridContainer = document.querySelector(".container")

gridContainer.addEventListener('click', function () {
  if (event.target.classList.contains("grid")){
  event.target.style.backgroundColor = currentColor
}})
