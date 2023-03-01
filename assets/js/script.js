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

function listCard() {
  let uuid = Date.now();
  let ItemName = window.prompt("Add a name");
  let link = window.prompt("Please Upload a link");
  let quantity = window.prompt("How Many Items Do You Want To add ?");
  let cost = window.prompt("Add a Cost");
  if (ItemName !== "" && link !== "" && quantity !== NaN && cost !== NaN) {
    let object = new Object();
    object["itemId"] = uuid;
    object["name"] = ItemName;
    object["quantity"] = parseInt(quantity);
    object["cost"] = parseInt(cost);
    object["image"] = link;
    object["alt"] = ItemName;

    json.push(object);
    createCard(link, cost, ItemName, quantity, uuid);
    elements.push(ItemName, quantity, cost);
  }
  // console.log(json);
  dialogBox();
  // console.log(image_input.value);
  i = 0;
  window.localStorage.setItem("items", JSON.stringify(json));
  return uuid;
}
//creating the container

let i = 0;

function createCard(path, itemPrice, name, quantity, uid) {
  let row = document.createElement("div");
  row.classList.add("items");
  let element = document.getElementById("inventory");
  element.appendChild(row);
  let itemOfTheImage = image(path, name);
  row.appendChild(itemOfTheImage);
  let nameOfItem = itemName(name);
  row.appendChild(nameOfItem);
  let div = document.createElement("div");
  div.classList.add("price-container");
  let custom_price = price(`₹${itemPrice}`);
  div.appendChild(custom_price);
  let stockElement = stock(quantity);
  div.appendChild(stockElement);
  let uuid = document.createElement("p");
  uuid.classList.add("uuid");
  uuid.innerText = uid;
  div.appendChild(uuid);
  row.appendChild(div);
  elements.push(row);
  //eventlistner to find the which element we click
  row.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      window.prompt(
        "Do You Want to edit the cost and quantity ? (Type Yes)"
      ) === "YES"
    ) {
      let itemData = JSON.parse(window.localStorage.getItem("items"));
      let quantity = window.prompt("How Many Items Do You Want To add ?");
      let cost = window.prompt("Add a Cost");
      let custom_price = price(`₹${cost}`);
      document.querySelector(".price-container").remove();
      row.appendChild(custom_price);
      let stockElement = stock(quantity);
      row.appendChild(stockElement);
      let uuid = document.createElement("p");
      uuid.classList.add("uuid");
      uuid.innerText = uid;
      row.appendChild(uuid);
      let obj = itemData.find((data) => data["itemId"] === uid);
      let index = itemData.indexOf(obj);
      itemData.splice(index, 1);
      let object = new Object();
      object["itemId"] = uid;
      object["name"] = obj["name"];
      object["quantity"] = obj["quantity"];
      object["cost"] = obj["cost"];
      object["image"] = obj["link"];
      object["alt"] = obj["name"];
      itemData.push(object);
      window.localStorage.setItem("items", JSON.stringify(itemData));
    }
  });
}

//creating dialog box (still progress)

function dialogBox() {
  let dialog = document.createElement("dialog");
  dialog.classList.add("dialog");
  return dialog;
}
//

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

// deleting module
function deleteModule(arrofObj, statement) {}
