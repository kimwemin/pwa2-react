import { useState } from 'react';
import './App.css';

function App() {
  const title = '제목';
  
  const titleStyle = {
    color: 'blue',
    fontSize: '1rem',
  };
  
  const [count, setCount] = useState(0);
  
  const incrementCount = () => {
    setCount((prev) => prev + 1);
  }
  const reductionCount = () => {
    setCount((prev) => {
      if(prev > 0) {
        return prev - 1;
      } else {
        return 0;
      }
    });
  }
  
  const [account, setAccount] = useState('');
  
  
  const [userInfo, setUserInfo] = useState({
    name: '홍길동',
    age: 20,
    gender: 'M'
  });
  
  
  // useState 작동원리
  // const test = {
  //   state: null,
  //   setter: (param) => {
  //     if(this.state !== param) {
  //       this.state = param;
  //       //리랜더링 처리
  //     } else {
  //       return;
  //     }
  //   },
  //   useState(data) {
  //     this.state = data;
  //     return [this.state, this.setter];
  //   }
  // };
  
  // const [a, b] = test.useState(0);
  // b(1);
  
  // console.log(a);


  // 참조형을 이용해 state를 사용할 경우 조심해야할 점
  // 리액트는 리렌더링의 기준이 주소가 달라지는 것이기 때문에
  // copy를 이용해 주소값을 변경해 주소가 달라졌다고 인식하게해 리랜더링을 일으킨다.
  const addAge = () => {
    const copy = {...userInfo};
    copy.age += 1;
    setUserInfo(copy);
  }


  // 조건부 렌더링용
  const [flg, setflg] = useState(true);
  
  return (
    <>
      {/* 조건부 렌더링 해보기 */}
      { count >= 10 ? <h1>{count}</h1> : null }

      {/* 조건부 렌더링 */}
      <button type="button" onClick={() => { setflg(!flg) }}>Flg</button>
      {/* 삼항연산식 : 조건부 ? 연산식1 : 연산식2 */}
      {/* { flg ? <h1>조건부 렌더링</h1> : null } */}
      {/* 엔드연산자 응용 : 앞의 처리가 true라면 뒤의 연산을 실행, false 일 경우 실행하지 않음 */}
      { flg && <h1>조건부 렌더링</h1> }
      <br /><br />

      <span>{`${userInfo.name} : ${userInfo.age} : ${userInfo.gender}`}</span>
      <button type="button" onClick={addAge}>나이 증가</button>
      
      <br />
      <br />
      <input type="text" value={account} onChange={(e) => { setAccount(e.target.value) }}/>
      <p>{count}</p>
      <button type="button" onClick={incrementCount}>+</button>
      <button type="button" onClick={reductionCount}>-</button>

      <h1 className='title' style={{color: 'red', fontSize: '3rem'}}>{title}</h1>
      <h1 style={titleStyle}>{title}</h1>
    </>
  )
}

export default App;
