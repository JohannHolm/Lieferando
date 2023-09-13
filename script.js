let pizzas = [
  {
    name: 'Pizza Salami',
    price: '8',
    description: 'Feinste Salami aus bestem Weiderind...',
  },
  {
    name: 'Pizza Funghi',
    price: '9',
    description: 'Beste Pilze aus regionalem Anbau...',
  },
  {
    name: 'Pizza Tonno',
    price: '10',
    description: 'Nachhaltiger Thunfisch aus Japan...',
  },
  {
    name: 'Pizza Margherita',
    price: '6',
    description: 'Mit bestem Käse aus Holland...',
  },
  {
    name: 'Pizza Döner',
    price: '10',
    description: 'Der Klassiker...',
  },
  {
    name: 'Pizza Ocean',
    price: '14',
    description: 'Mit ausgewählten Meeresfrüchten...',
  },
  {
    name: 'Pizza Paprika',
    price: '9',
    description: 'Paprika aus heimischem Anbau...',
  },
  {
    name: 'Pizza Diavolo',
    price: '10',
    description:
      'Mit echter Salami aus Italien mit dem Gewissen etwas...',
  },
];
let salads = [
  {
    name: 'Salat Cesare',
    price: '12',
    description: 'Bester Salat mit Dressing-Joghurt hausgemacht...',
  },
  {
    name: 'Salat Salmone',
    price: '14',
    description: 'Salat mit echten Lachs aus Norwegen...',
  },
  {
    name: 'Salat Ocean',
    price: '12',
    description: 'Ein echter Meeressalat...',
  },
  {
    name: 'Salat Basic',
    price: '9',
    description: 'Unser Standard der Hauses...',
  },
  {
    name: 'Salat Schafsbock',
    price: '12',
    description: 'Mit echtem Feta aus Kreta...',
  },
  {
    name: 'Salat Oily',
    price: '12',
    description: 'Der Signature Salat mit Olivenöl aus Malta...',
  },
  {
    name: 'Salat Farmer',
    price: '10',
    description: 'Der klassische Bauernsalat...',
  },
  {
    name: 'Salat Scampi',
    price: '16',
    description: 'Für echte liebhaber...',
  },
];
let burgers = [
  {
    name: 'Cheeseburger',
    price: '6',
    description: 'Klassisch und schnell mit Käse...',
  },
  {
    name: 'Double Cheeseburger',
    price: '9',
    description: 'Der doppelte Klassiker - herrlich...',
  },
  {
    name: 'Chickenburger',
    price: '8',
    description: 'Die Fitness Alternative...',
  },
  {
    name: 'Vegan-Mist Burger',
    price: '16',
    description: 'Bitte bestelle Fleisch...',
  },
  {
    name: 'Triple-Cheeseburger',
    price: '12',
    description: 'Unser King Triple Cheeseburger - ein Traum...',
  },
  {
    name: 'BBQ Burger',
    price: '11',
    description: 'Wie vom Grill...',
  },
  {
    name: 'Steak Burger',
    price: '12',
    description: 'Für echte Genießer und Großverdiener...',
  },
  {
    name: 'Super Vegan Burger',
    price: '16',
    description: 'Ernsthaft?...',
  },
];
let chicken = [
  {
    name: 'Hahn',
    price: '6',
    description: 'Ein ganzer Gockel - kross gebraten...',
  },
  {
    name: 'Halber Hahn',
    price: '9',
    description: 'Ein halber Gockel - auch der ist kross gebraten...',
  },
  {
    name: 'Hähnchen',
    price: '8',
    description: 'Ein ganzes Huhn...',
  },
  {
    name: 'Chicken-Wings',
    price: '16',
    description: '12 Chicken Wings mit BBQ Gewürz...',
  },
  {
    name: 'Nuggets',
    price: '12',
    description: 'Die kleinen klassiker gold braun frittiert...',
  },
  {
    name: 'Chicken-Filet',
    price: '11',
    description: 'Für unsere Genießer...',
  },
  {
    name: 'Chicken Tenders',
    price: '12',
    description: 'Feinstes Filet mit krosser Panade...',
  },
  {
    name: 'Pulled Chicken',
    price: '16',
    description: 'Fein gegartes Chicken Filet - weich wie Watte...',
  },
];
let beef = [
  {
    name: 'Filet Steak',
    price: '12',
    description: 'Das beste Stück Fleisch vom deutschen Weidering...',
  },
  {
    name: 'Rumpsteak',
    price: '9',
    description: 'Ein ordentliches Stück Angus Beef...',
  },
  {
    name: 'Ribeye Steak',
    price: '8',
    description:
      'Mit dem legendären Fettauge für besten Geschmack...',
  },
  {
    name: 'Tomahawk Steak',
    price: '16',
    description: 'Das Steak für echte Männer und keine Veganer...',
  },
  {
    name: 'Schweine Steak',
    price: '6',
    description:
      'Feinste Medaillons - butterweich in Sauce Bernaisse...',
  },
  {
    name: 'Flanksteak',
    price: '11',
    description: 'Ein gutes Stück Flankensteak - 900g...',
  },
  {
    name: 'Pulled Steak',
    price: '12',
    description:
      'Bestes Fleisch gegart bis es butterweich ist und zerfällt...',
  },
  {
    name: 'Mettwurst asdasdasdbahsdasehaweha',
    price: '99',
    description: 'Mett mit Zwiebeln und Pfeffer...',
  },
];

function generatePizzas() {
  let html = document.getElementById('meal-content');
  html.innerHTML = '';
  for (let i = 0; i < pizzas.length; i++) {
    let pizza = pizzas[i];
    html.innerHTML += /*html*/ `
    <div class="card">
                <div class="card-body">
                    <span class="fs-4">${pizza.name}</span>
                    <span class="fw-lighter">${pizza.description}</span>
                    <span class="fw-light fst-italic">Wahl aus: Standard, Ø 26cm, Maxi, Ø 32cm oder Wumbo, Ø 38cm.</span>
                    <span class="fs-5">${pizza.price}€</span>
                </div>
                <button onclick="addToBasket('${pizza.name}', ${pizza.price})" class="btn">+</button>
            </div>
  `;
  }
}

function generateSalads() {
  let html = document.getElementById('meal-content');
  html.innerHTML = '';
  for (let i = 0; i < salads.length; i++) {
    let salad = salads[i];
    html.innerHTML += /*html*/ `
    <div class="card">
                <div class="card-body">
                    <span class="fs-4">${salad.name}</span>
                    <span class="fw-lighter">${salad.description}</span>
                    <span class="fw-light fst-italic">Wahl aus: Standard, groß.</span>
                    <span class="fs-5">${salad.price}€</span>
                </div>
                <button onclick="addToBasket('${salad.name}', ${salad.price})" class="btn">+</button>
            </div>
  `;
  }
}

function generateBurger() {
  let html = document.getElementById('meal-content');
  html.innerHTML = '';
  for (let i = 0; i < burgers.length; i++) {
    let burger = burgers[i];
    html.innerHTML += /*html*/ `
    <div class="card">
                <div class="card-body">
                    <span class="fs-4">${burger.name}</span>
                    <span class="fw-lighter">${burger.description}</span>
                    <span class="fw-light fst-italic">Wahl aus: Menü oder einzeln</span>
                    <span class="fs-5">${burger.price}€</span>
                </div>
                <button onclick="addToBasket('${burger.name}', ${burger.price})" class="btn">+</button>
            </div>
  `;
  }
}

function generateChicken() {
  let html = document.getElementById('meal-content');
  html.innerHTML = '';
  for (let i = 0; i < chicken.length; i++) {
    let chick = chicken[i];
    html.innerHTML += /*html*/ `
    <div class="card">
                <div class="card-body">
                    <span class="fs-4">${chick.name}</span>
                    <span class="fw-lighter">${chick.description}</span>
                    <span class="fw-light fst-italic">Wahl aus: Hähnchengewürz oder Salz und Pfeffer.</span>
                    <span class="fs-5">${chick.price}€</span>
                </div>
                <button onclick="addToBasket('${chick.name}', ${chick.price})" class="btn">+</button>
            </div>
  `;
  }
}

function generateBeef() {
  let html = document.getElementById('meal-content');
  html.innerHTML = '';
  for (let i = 0; i < beef.length; i++) {
    let meat = beef[i];
    html.innerHTML += /*html*/ `
    <div class="card">
                <div class="card-body">
                    <span class="fs-4">${meat.name}</span>
                    <span class="fw-lighter">${meat.description}</span>
                    <span class="fw-light fst-italic">Wahl aus: rare, medium-rare, medium</span>
                    <span class="fs-5">${meat.price}€</span>
                </div>
                <button onclick="addToBasket('${meat.name}', ${meat.price})" class="btn">+</button>
            </div>
  `;
  }
}

let shoppingBasketName = [];
let shoppingBasketAmount = [];
let shoppingBasketPrice = [];
let sum = [];

function addToBasket(name, price) {
  let checkNameIndex = checkMenuExists(name);
  if (checkNameIndex == -1) {
    shoppingBasketName.push(name);
    shoppingBasketPrice.push(price);
    shoppingBasketAmount.push(1);
  } else {
    shoppingBasketAmount[checkNameIndex] += 1;
  }
  updateShoppingBasket();
}

function checkMenuExists(name) {
  return shoppingBasketName.indexOf(name);
}

function updateShoppingBasket() {
  clearShoppingBasket();
  for (let i = 0; i < shoppingBasketName.length; i++) {
    document.getElementById('shoppingBasket').innerHTML += /*html*/ `
    <div class="card">
                  <div class="card-body sidebar-card">
                      <span id="amount${i}">${
      shoppingBasketAmount[i]
    }x</span>
                      <span>${shoppingBasketName[i]}</span>
                      <span id="posPrice${i}">${calculateAmountAndPrice(
      i
    )}€</span>
                  </div>
              </div>
    `;
  }
}

function calculateAmountAndPrice(index) {
  let amount = shoppingBasketAmount[index];
  let price = shoppingBasketPrice[index];
  let positionPrice = amount * price;
  generateTotalSum(index);
  return positionPrice;
}

function clearShoppingBasket() {
  document.getElementById('shoppingBasket').innerHTML = /*html*/ ``;
}

function clearSumBasket() {
  document.getElementById('sumBasketPrices').innerHTML = /*html*/ ``;
}

function generateTotalSum() {
  let sum = [];
  clearSumBasket();
  for (let i = 0; i < shoppingBasketName.length; i++) {
    sum.push(shoppingBasketPrice[i] * shoppingBasketAmount[i]);
  }
  let summe = sum.reduce((pv, cv) => pv + cv);
  document.getElementById('sumBasketPrices').innerHTML += `
  <div class="card">Summe: ${summe}</div>
  `;
}
