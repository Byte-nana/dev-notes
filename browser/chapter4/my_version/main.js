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

function addItem(text) {
  const li = document.createElement('li');
  li.setAttribute('class', 'item-row');

  const span = document.createElement('span');
  span.setAttribute('class', 'text');
  span.textContent = `${text}`;

  const button = document.createElement('button');
  button.setAttribute('class', 'delete-btn');
  button.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

  li.append(span);
  li.append(button);

  items.append(li);
  li.scrollIntoView();
}
function removeItem() {}

// Event handling
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const text = usertext.value;
  if (text.trim().length === 0) {
    usertext.value = '';
    usertext.focus();
    return;
  }

  addItem(text);

  usertext.value = '';
  usertext.focus();
});
// 2. remove Items
// get delete-btn which created dynamically
