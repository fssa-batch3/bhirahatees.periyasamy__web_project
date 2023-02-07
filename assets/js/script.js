let imagePath = [];
let elements = [];
let json = [];
let image_input = document.querySelector("#number");
let selectedItem = [];
let path = "";
let local;

// image_input.addEvent 3Listener("change",function(){
//     console.log(image_input)
// })

// calling all funtion and creating a object

function createCard() {
  let ItemName = window.prompt("Add a name");
  let link = window.prompt("Please Upload a link");
  let quantity = window.prompt("How Many Items Do You Want To add ?");
  let cost = window.prompt("Add a Cost");
  if (ItemName !== "" && link !== "" && quantity !== NaN && cost !== NaN) {
    let object = new Object();
    object["name"] = ItemName;
    object["quantity"] = parseInt(quantity);
    object["cost"] = parseInt(cost);
    object["image"] = link;
    object["alt"] = ItemName;
    json.push(object);
    addItems(link, cost, ItemName, quantity);
    elements.push(ItemName, quantity, cost);
  }
  console.log(json);
  //  3 dialogBox();
  // console.log(image_input.value);
  i = 0;
  window.localStorage.setItem("items", JSON.stringify(json));
}
//creating the container

let i = 0;

function addItems(path, itemPrice, name, quantity) {
  let row = document.createElement("div");
  row.classList.add("items");
  let element = document.getElementById("inventory");
  element.appendChild(row);
  let itemOfTheImage = image(path, name);
  row.appendChild(itemOfTheImage);
  let nameOfItem = itemName(name);
  row.appendChild(nameOfItem);
  let custom_price = price(`₹${itemPrice}`);
  row.appendChild(custom_price);
  let stockElement = stock(quantity);
  row.appendChild(stockElement);
  elements.push(row);
  //eventlistner to find the which element we click
  row.addEventListener("click", (e) => {
    e.preventDefault();
    let storageObj = new Object();
    storageObj["name"] = name;
    storageObj["quantity"] = i;
    storageObj["price"] = itemPrice;
    selectedItem.push(storageObj);
    window.localStorage.setItem("select", JSON.stringify(stringData));
  });
}

//creating dialog box (still progress)

function dialogBox() {
  let dialog = document.createElement("dialog");
  dialog.classList.add("dialog");
  // let inputbox = document.createElement("input");
  // inputbox.setAttribute("type", "file");
  // inputbox.setAttribute("accept", "image/png image/jpg");
  // inputbox.setAttribute("id", "add-image");
  // dialog.appendChild(inputbox);
  // // let pricInput = document.createElement()
  let el = document.getElementById("main-container");
  dialog.show();
  el.appendChild(dialog);
}

//adding price

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

//adding name

function itemName(str) {
  let nameEl = document.createElement("p");
  nameEl.classList.add("item-name");
  let name = document.createTextNode(str);
  nameEl.appendChild(name);
  return nameEl;
}

//adding stock (want some changes)

function stock(quantity) {
  let stockEl = document.createElement("div");
  stockEl.classList.add("stock");
  let instock = document.createElement("p");
  if (quantity <= 0) {
    instock.classList.add("outofstock");
    let stockText = document.createTextNode("Out Of Stock");
    instock.appendChild(stockText);
  } else {
    instock.classList.add("instock");
    let stockText = document.createTextNode(`Stock left  ${quantity}`);
    instock.appendChild(stockText);
  }
  stockEl.appendChild(instock);
  return stockEl;
}

//adding image

function image(path, alt) {
  let image = document.createElement("img");
  image.classList.add("image-item");
  image.setAttribute("src", path);
  image.setAttribute("alt", alt);
  return image;
}

//adding price and quantity

function priceAndquantity() {
  let price = document.createElement("span");
  let priceInput = document.createElement("input");
  priceInput.setAttribute("type", "number");
  price.appendChild(priceInput);
  return price;
}

//excuting for customer page

function excuter(object) {
  for (let i = 0; i < 10; i++) {
    addItems(
      object[i]["url"],
      object[i]["price"],
      object[i]["name"],
      object[i]["quantity"]
    );
  }
}
