/**
 * Requirement
 * 1. Add items
 * - Enter input -> Hit enter btn or plus btn -> show on UI
 * 2. remove items
 * - click bin icon -> remove <li>
 */

// DOM elements
const form = document.querySelector('#form');
const usertext = document.querySelector('.usertext');
const items = document.querySelector('.items');

function addItem() {}
function removeItem() {}

// Event handling
// 1. Add items
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addItem();
});
// 2. remove Items
// get delete-btn which created dynamically
