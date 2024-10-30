import data from "./data.js";

const btnShowAll = document.getElementById("show-all");
const btnDiscount = document.getElementById("discount");
const btnSum = document.getElementById("sum");
const btnFilter = document.getElementById('filter');

//For each para mostrar tudo;
const showAll = () => {
  clearList();
  data.forEach((product) => createCard(product));
};

btnShowAll.addEventListener("click", showAll);

//Map para mapear desconto
const discount = () => {
  clearList();
  data.map((product) => {
    let discount = 0.1 * product.price;
    product.price -= discount;
    createCard(product);
  });
};

//reduce para somar todo catalago
const sumAll = () => {
  clearList();
  const sum = data.reduce((acc, currentValues) => {
    return (acc += currentValues.price);
  }, 0);

  const list = document.getElementById("list");
  const item = document.createElement("li");
  item.className = "item";
  list.appendChild(item);

  const info = document.createElement("spam");
  info.className = "item-name";
  info.innerHTML = `A soma de todos os itens do menu é: <br> R$ ${sum.toFixed(2).replace('.',',')}`;
  item.appendChild(info);
};


//filtrar veganos
const veganFilter = () => {
    clearList();
    data.filter(product => {
        product.vegan ? createCard(product): null;
    });
}

btnFilter.addEventListener("click", veganFilter)


btnSum.addEventListener("click", sumAll);

btnDiscount.addEventListener("click", discount);

//Função para criar card de produtos
const createCard = (product) => {
  const list = document.getElementById("list");
  const item = document.createElement("li");
  item.className = "item";
  list.appendChild(item);

  const itemImage = document.createElement("img");
  itemImage.src = product.src;
  itemImage.className = "item-image";
  item.appendChild(itemImage);

  const itemName = document.createElement("p");
  itemName.className = "item-name";
  itemName.innerHTML = product.name;
  item.appendChild(itemName);

  const itemPrice = document.createElement("p");
  itemPrice.className = "item-price";
  itemPrice.innerHTML = Number.isInteger(product.price)
    ? `R$ ${product.price}.00`
    : `R$ ${product.price.toFixed(2).replace(".", ",")}`;
  item.appendChild(itemPrice);
};


//funcao limpar lista

function clearList(){
  const list = document.getElementById("list");
  list.replaceChildren();
}



