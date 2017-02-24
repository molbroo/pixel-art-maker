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
