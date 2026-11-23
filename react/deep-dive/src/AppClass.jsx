import React from 'react';
import Counter from './components/Counter';

// class components의 장점
// 상태가 변경될 때마다 render함수만 호출된다. 멤버함수는 그대로 유지되기 때문에 useCallback, useMemo, Memo는 해주지 않아도 된다.
// 상속을 이용하는 경우
export default class AppClass extends React.Component {
  state = { count: 0 };

  onClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  //useEffect처럼 컴포넌트가 처음 마운트될 때
  conponentDidMount() {
    console.log('컴포넌트가 마운트 되었음!');
  }
  //useEffect의 return처럼 컴포넌트가 언마운트될 때
  componentWillUnmount() {
    console.log('컴포넌트가 곧 언마운트될 예정임!');
  }

  render() {
    return (
      <div>
        <div>
          Total count: {this.state.count} {this.state.count > 10 ? '🔥' : '❄️'}
        </div>
        <div>
          <Counter total={this.state.count} onClick={this.onClick} />
          <Counter total={this.state.count} onClick={this.onClick} />
        </div>
      </div>
    );
  }
}
