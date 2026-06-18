/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function createFreelancer() {
  const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
  const randomOccupation =
    OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
  const randomRate =
    Math.floor(
      Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)
    ) + PRICE_RANGE.min;
  return { name: randomName, occupation: randomOccupation, rate: randomRate };
}

let freelancers = [];
for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(createFreelancer());
}
// console.log(freelancers);

function getAverageRate(freelancersArray) {
    if (!freelancersArray || freelancersArray.length === 0) {
        return 0;
    }
    let total = 0;
    for (let i = 0; i < freelancersArray.length; i++) {
        total += freelancersArray[i].rate;
    }
    return total / freelancersArray.length;
}

let averageRate = getAverageRate(freelancers);
// console.log(`Average rate: $${averageRate.toFixed(2)}`);

function Freelancer(freelancer) {
    return `
        <div class="freelancer-card">
            <div class="freelancer__name">${freelancer.name}</div>
            <div class="freelancer__occupation">${freelancer.occupation}</div>
            <div class="freelancer__rate">${freelancer.rate}</div>
        </div>
    `;
}

function Freelancers(freelancersList) {
    const itemsHTML = freelancersList.map(Freelancer).join('');
    return `
        <div class="freelancers">
            ${itemsHTML}
        </div>
    `;
}

function AverageRate(rate) {
    return `
        <div class="average-rate">
            <h3>Average Rate</h3>
            <p class="average-rate__value">$${rate.toFixed(2)}</p>
        </div>
    `;
}

function render() {
    const app = document.getElementById('app');
    if (!app) {
        console.error('Could not find element with id "app"');
        return;
    }

    app.innerHTML = `
        <div class="app-container">
            <h1>Freelancer Forum</h1>

            ${AverageRate(averageRate)}

            <h2>Available Freelancers <span class="count">(${freelancers.length})</span></h2>

            ${Freelancers(freelancers)}
        </div>
    `;
}
//Mount the application onto the document
render();
