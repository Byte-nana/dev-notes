// 변수 밖에다가 선언
const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

document.addEventListener('mousemove', (event) => {
  // 자주 쓰이는 코드는 변수 만들어 두면 간편하다.
  const x = event.clientX;
  const y = event.clientY;
  // 코드가 잘 작동하는지 보기 위해서 로그 작성
  console.log(`${x}, ${y}`);
  // css 스타일링 할 때, left 이용해서 선의 위치 변경
  vertical.style.left = `${x}px`;
  // css 스타일링 할 때, top 이용해서 선의 위치 변경
  horizontal.style.top = `${y}px`;
  // css 스타일링 할 때, top, left 이용해서 선의 위치 변경
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;
  // 태그들을 화면 중심에 놓고 시작하니 코드가 깔끔해지는데?
  tag.style.left = `${x}px`;
  tag.style.top = `${y}px`;
  tag.innerHTML = `${x}px, ${y}px`;
});
