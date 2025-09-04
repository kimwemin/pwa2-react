import './App.css';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import TapUi from './components/TabUi.jsx';
import Footer from './components/Footer.jsx';
import { useState } from 'react';

// 컴포넌트를 구분하는 기준은 보통 기능
// 자주 쓰는 기능이라면 따로 컴포넌트를 만들 수도 있다.
function App() {
  const [prodFlg, setProdFlg] = useState(true);
  const [tabFlg, setTabFlg] = useState(false);

  const viewProductList = () => {
    setProdFlg(true);
    setTabFlg(false);
  }

  const viewTabUi = () => {
    setProdFlg(false);
    setTabFlg(true);
  }

  return (
    <>
      <Header></Header>
      <main>
        <div>
          <span onClick={viewProductList}>상품 리스트</span>
          <span onClick={viewTabUi}>테스트</span>
        </div>
        { tabFlg && <TapUi></TapUi> }
        { prodFlg && <ProductList></ProductList> }
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;