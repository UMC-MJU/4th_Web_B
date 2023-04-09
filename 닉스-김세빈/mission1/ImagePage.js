const image = document.querySelector(".popup");
var imageGetitem = localStorage.getItem("image");
console.log(imageGetitem);
var popup = document.querySelector(".popup");
popup.innerHTML = "<img src='" + imageGetitem + "'>";
var imagein = popup.innerHTML;
