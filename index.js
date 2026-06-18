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