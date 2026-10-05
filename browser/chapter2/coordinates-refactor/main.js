// 변수 밖에다가 선언
const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
  // 이미지 위치를 옮기고 싶다. 이미지 위치에 대한 정보를 받아와서 옮기기!
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    vertical.style.transform = `translateX(${x}px)`;
    horizontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  });
});

// top, left에 비해 transform은 composition만 일어나기에 성능에 좋다.
// css에 left, top을 기본적으로 설정해둔 것이 있기에, top, left를 업데이트 하지 않으면 이상하게 움직인다! -> 기본값 지워주기!
// 이미지 위치를 얼마만큼 옮겨야 하나? -> 검색하기! -> 이미지 위치에 대한 정보를 받아와서 이를 이용해서 요소 움직여주기!
// load 순서! js파일을 defer 옵션을 이용해서 다운받게 했다. 근데 간혹 targetRect을 받지 못하는 경우가 생기는데, 이는 이미지를 아직 다운받지 못할 경우도 있기 때문이다. 이때 윈도우 다 로드가 된 후 eventlistenr가 실행될 수 있게 해주자.
// layout부터 시작되는 속성들은 그렇게 좋지 않다. 그렇기에 이러한 것을 염두해서 작성하기
