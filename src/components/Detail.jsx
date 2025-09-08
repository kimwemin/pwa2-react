import { useDispatch, useSelector } from 'react-redux';
import './Detail.css';
import { addCnt, changeInputCnt, minusCnt } from '../store/slices/detail.js';
import { useState } from 'react';

function Detail() {
  const dispatch = useDispatch();

  const cnt = useSelector(state => state.detail.cnt);

  const [inputNum, setInputNum] = useState(0);

  const convertAndSetNumber = (val) => {
    // isNaN은 숫자로 형변환이 가능한지 아닌지 여부를 확인할 수 있다.
    // true는 불가능, false는 가능.
    // 따라서 앞에 부정연산자를 붙여 false일 경우에만 뒤의 처리가 이어지게 한다.
    // 아래 코드는 숫자로 타입변경이 가능할 경우 val의 타입을 숫자로 바꾼다.
    if(!isNaN(val)) {
      setInputNum(parseInt(val));
    } else {
      console.error('숫자 아니다.');
    }
  }
  
  return (
    <>
      <h1>상세 페이지</h1>
      <p>{cnt}</p>
      <input type="number" onChange={(e) => { convertAndSetNumber(e.target.value) }} />
      <button type="button" onClick={() => { dispatch(changeInputCnt(inputNum)) }}>입력</button>
      <button type="button" onClick={() => { dispatch(addCnt()) }}>+</button>
      <button type="button" onClick={() => { dispatch(minusCnt()) }}>-</button>
    </>
  )
}

export default Detail;