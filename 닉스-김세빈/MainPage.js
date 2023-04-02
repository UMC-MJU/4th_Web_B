const input = document.querySelector(".input_form input");
const Btn = document.querySelector(".input_form button");
function onBtnClick() {
  console.log(input.value);
  console.log("click");
  alert(input.value);
}
Btn.addEventListener("click", onBtnClick);

const best = document.querySelector(".best_part");
function onClickBest() {
  alert("베스트 상품이 없습니다");
}
best.addEventListener("click", onClickBest);

const Newproduct = document.querySelector(".Newproduct_part");
function onClickNewproduct() {
  alert("신상품이 없습니다.");
}
Newproduct.addEventListener("click", onClickNewproduct);

const Goodproduct = document.querySelector(".Goodproduct_part");
function onClickGoodproduct() {
  alert("알뜰상품이 없습니다.");
}
Goodproduct.addEventListener("click", onClickGoodproduct);

const Topprice = document.querySelector(".Topprice_part");
function onClickTopprice() {
  alert("특가/혜택 상품이 없습니다.");
}
Topprice.addEventListener("click", onClickTopprice);

function showPopup() {
  var popupImage =
    "https://img-cf.kurly.com/shop/data/goods/1637645210373l0.jpg";
  var popup = document.getElementById("popup");
  popup.innerHTML = "<img src='" + popupImage + "'>";
}

function ImageChange() {
  window.open("ImagePage.html");
  var popupImage =
    "https://img-cf.kurly.com/shop/data/goods/1637645210373l0.jpg";
  var popup = document.getElementById("popup");
  popup.innerHTML = "<img src='" + popupImage + "'>";
}
