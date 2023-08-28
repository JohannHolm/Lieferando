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
    name: 'Mettwurst',
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
                    <span>${pizza.name}</span>
                    <span class="fw-light">${pizza.description}</span>
                    <span>${pizza.price}€</span>
                </div>
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
                    <span>${salad.name}</span>
                    <span class="fw-light">${salad.description}</span>
                    <span>${salad.price}€</span>
                </div>
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
                    <span>${burger.name}</span>
                    <span class="fw-light">${burger.description}</span>
                    <span>${burger.price}€</span>
                </div>
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
                    <span>${chick.name}</span>
                    <span class="fw-light">${chick.description}</span>
                    <span>${chick.price}€</span>
                </div>
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
                    <span>${meat.name}</span>
                    <span class="fw-light">${meat.description}</span>
                    <span>${meat.price}€</span>
                </div>
            </div>
  `;
  }
}
