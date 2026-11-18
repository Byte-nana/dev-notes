const items = document.querySelector('.items');
const newForm = document.querySelector('.new__form');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

// 이벤트를 처리하는 함수는 보통 on을 붙여서 작명한다.
// 보통 주석은 왜를 작성해야 한다.
function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아온다.
  const text = input.value;
  if (text === '') {
    input.focus();
    return;
  }
  // 2. 새로운 아이템을 만듦(텍스트 + 삭제 버튼)
  const item = createItem(text);
  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다.
  items.appendChild(item);
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: 'center' });

  // 5. input을 초기화한다. + input focus
  input.value = '';
  input.focus();
}

let id = 0; //UUID를 사용하는 것이 좋다
function createItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);

  itemRow.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete">
            <i class="fa-solid fa-eraser" data-id =${id}></i>
        </button>
    </div>
    <div class="item__divider"></div>
  `;

  id++;
  return itemRow;
}
/** form으로 대체
addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keydown', (e) => {
  //keyup사용해도 같은 효과
  if (e.isComposing) {
    return;
  }
  if (e.key === 'Enter') {
    onAdd();
  }
});
 */
newForm.addEventListener('submit', (e) => {
  e.preventDefault();
  onAdd();
});
// event bubbling
// data- 이용해서 원하는 타켓 지정하기
items.addEventListener('click', (e) => {
  const id = e.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
  }
});
