/**
 * Requirement
 * 1. Add items
 * - Enter input -> Hit enter btn or plus btn -> show on UI
 * 2. remove items
 * - click bin icon -> remove <li>
 */

// DOM elements
const form = document.querySelector('form[data-form="add-item"]');
const usertext = document.querySelector('.usertext');
const items = document.querySelector('ul[data-role="item-list"]');

function createItem(text) {
  let uuid = self.crypto.randomUUID();

  const li = document.createElement('li');
  li.setAttribute('class', 'item-row');
  li.setAttribute('data-id', `${uuid}`);

  li.innerHTML = `
    <span class="text">${text}</span>
    <button class="delete-btn">
      <i class="fa-solid fa-trash-can" data-id="${uuid}"></i>
    </button>
  `;

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

function onDelete(target) {
  if (!target.matches('i[data-id]')) return;

  const id = target.dataset.id;
  const deletedItem = document.querySelector(`.item-row[data-id="${id}"]`);

  deletedItem.remove();
}

// Event handling
form.addEventListener('submit', (e) => {
  e.preventDefault();

  onAdd();
});

items.addEventListener('click', (e) => {
  onDelete(e.target);
});
