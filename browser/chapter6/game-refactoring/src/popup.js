'use strict';

export default class PopUp {
  // constructor에 왜 이벤트를 등록할까?
  // 코드가 실행되는 시점이 중요하다.
  // DOM요소를 만들고, 그 다음에 바로 돔요소에 이벤트를 등록한다.
  constructor() {
    this.popUp = document.querySelector('.pop-up');
    this.popUpMessage = document.querySelector('.pop-up__message');
    this.popUpRefreshBtn = document.querySelector('.pop-up__refresh');

    this.popUpRefreshBtn.addEventListener('click', () => {
      this._hide();
      this.onClick && this.onClick();
    });
  }
  // popUp class와 외부에서 전달받는 이벤트를 decoupling하기 위한 설계방식
  // popUp class를 수정하지 않고도 외부에서 전달하는 함수를 달리해서 다양한 동작을 수행할 수 있다.
  // event subscription(이벤트 구독)방식의 설계
  // 지금은 하나의 콜백만 등록했지만, 여러 콜백을 기억하게 하기 위해서는 배열을 통해서 구현가능하다.
  // eventTarget기반으로도 이와 비슷하게 구현할 수 있다.
  setClickListener(onClick) {
    this.onClick = onClick;
  }

  showWithText(text) {
    this.popUpMessage.innerText = text;
    this.popUp.classList.remove('hide');
  }
  // _(underscore): 클래스 내부에서만 사용하는 매서드이기에 외부에서 직접 호출하지 말아라.
  // 하지만 실제로는 접근할 수 있다. 이는 네이밍 컨벤션일 뿐이다.
  _hide() {
    this.popUp.classList.add('hide');
  }
}
