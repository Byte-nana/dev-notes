import './App.css';

function AppJSX() {
  const name = 'Nana';
  const lists = ['Milk', 'Strawberry', 'Banana', 'Eggs'];

  return (
    // 단 하나의 태그만 리턴 가능하다.
    // <div></div>
    // <></>
    // <Fragment></Fragment>
    <>
      {/* class는 className으로 써야한다. */}
      <h1 className='orange'>Hello!</h1>
      <h2>Hello!</h2>
      {/* 자바스크립트 코드를 작성할 때는 {}안에 작성하기 */}
      <p>{`Hello! ${name}`}</p>
      <ul>
        {lists.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <img
        style={{ width: '400px', height: '600px' }}
        src='https://plus.unsplash.com/premium_photo-1667030474693-6d0632f97029?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        alt='cat'
      />
    </>
  );
}

export default AppJSX;
