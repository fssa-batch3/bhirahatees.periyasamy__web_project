let imagePath = [];
let elements = [];
let image_input = document.querySelector("#number");
let path = "";

// image_input.addEventListener("change",function(){
//     console.log(image_input)
// })
document.getElementById("add").onclick = function () {
  let link = window.prompt("Please Upload a link");
  let cost = window.prompt("Add a Cost");
  let ItemName = window.prompt("Add a name");
  addItems(link, cost, ItemName);
  // dialogBox()
  // console.log(image_input.value)
};
function addItems(path, itemPrice, name) {
  let row = document.createElement("div");
  row.classList.add("items");
  let element = document.getElementById("inventory");
  element.appendChild(row);
  let itemOfTheImage = image(path, name);
  row.appendChild(itemOfTheImage);
  let nameOfItem = itemName(name);
  row.appendChild(nameOfItem);
  let custom_price = price(itemPrice);
  row.appendChild(custom_price);
  let stockElement = stock();
  row.appendChild(stockElement);
  elements.push(row);
}

function dialogBox() {
  let dialog = document.createElement("div");
  dialog.classList.add("dialog");
  let inputbox = document.createElement("input");
  inputbox.setAttribute("type", "file");
  inputbox.setAttribute("accept", "image/png image/jpg");
  inputbox.setAttribute("id", "add-image");
  dialog.appendChild(inputbox);
  // let pricInput = document.createElement()
  let el = document.getElementById("main-container");
  el.appendChild(dialog);
}

function price(priceItem) {
  let price = document.createElement("div");
  price.classList.add("price");
  let priceInput = document.createElement("p");
  priceInput.classList.add("demo_price");
  let demoprice = document.createTextNode("Price");
  priceInput.appendChild(demoprice);
  price.appendChild(priceInput);
  let inr = document.createElement("p");
  inr.classList.add("inr");
  let priceOfItem = document.createTextNode(priceItem);
  price.appendChild(priceOfItem);
  return price;
}

function itemName(str) {
  let nameEl = document.createElement("p");
  nameEl.classList.add("item-name");
  let name = document.createTextNode(str);
  nameEl.appendChild(name);
  return nameEl;
}

function stock() {
  let stockEl = document.createElement("div");
  stockEl.classList.add("stock");
  let instock = document.createElement("p");
  instock.classList.add("instock");
  let stockText = document.createTextNode("In Stock");
  instock.appendChild(stockText);
  stockEl.appendChild(instock);
  return stockEl;
}

function image(path, alt) {
  let image = document.createElement("img");
  image.classList.add("image-item");
  image.setAttribute("src", path);
  image.setAttribute("src", alt);
  return image;
}
function priceAndquantity() {
  let price = document.createElement("span");
  let priceInput = document.createElement("input");
  priceInput.setAttribute("type", "number");
  price.appendChild(priceInput);
  return price;
}
function excuter() {
  for (let i = 0; i < 20; i++) {
    addItems(
      "https://image.api.playstation.com/cdn/EP0001/CUSA09303_00/tzKcptCCUkiigpacybO8xWmvxPS7vIzk.png",
      "₹1999"
    );
  }
}
