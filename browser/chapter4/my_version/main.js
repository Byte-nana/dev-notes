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

function createItem(text) {
  const li = document.createElement('li');
  li.setAttribute('class', 'item-row');

  const span = document.createElement('span');
  span.setAttribute('class', 'text');
  span.textContent = `${text}`;

  const button = document.createElement('button');
  button.setAttribute('class', 'delete-btn');
  button.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
  button.addEventListener('click', () => {
    items.removeChild(li);
  });

  li.append(span);
  li.append(button);

  return li;
}

function onAdd() {
  const text = usertext.value;
  if (text.trim().length === 0) {
    usertext.value = '';
    usertext.focus();
    return;
  }

  const item = createItem(text);
  items.append(item);
  item.scrollIntoView();

  usertext.value = '';
  usertext.focus();
}

// Event handling
form.addEventListener('submit', (e) => {
  e.preventDefault();

  onAdd();
});
