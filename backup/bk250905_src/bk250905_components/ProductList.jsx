import './ProductList.css';
import ProductDetail from './ProductDetail.jsx';
import { useState } from 'react';

function ProductList() {
  const products = [
    {id: 0, title: '바지', info: '좋은 바지', price: 10000, img: 'https://picsum.photos/id/110/5000/3333'},
    {id: 1, title: '티셔츠', info: '좋은 티셔츠', price: 5000, img: 'https://picsum.photos/id/117/1544/1024'},
    {id: 2, title: '양말', info: '좋은 양말', price: 1000, img: 'https://picsum.photos/id/142/4272/2848'},
  ]
  
  const [detailFlg, setDetailFlg] = useState(false);

  const [propsProduct, setpropsProduct] = useState({});

  const viewModal = (item) => {
    setpropsProduct({...item});
    setDetailFlg(true);
  }
  
  return (
    <>
      { detailFlg && <ProductDetail product={propsProduct} setDetailFlg={setDetailFlg}></ProductDetail> }
      <div className='card-container'>
        {
          products.map(item => {
            return (
              <div className='card' key={item.id} onClick={() => {viewModal(item)}}>
                <div className='card-img' style={{backgroundImage: `url(${item.img})`}}></div>
                <p className='card-title'>{item.title}</p>
                <p className='card-price'>{item.price}</p>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ProductList;