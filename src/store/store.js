import { configureStore } from "@reduxjs/toolkit";
// Slice명+Reducer 관습적으로 이렇게 사용
import listReducer from './slices/list.js';
import detailReducer from './slices/detail.js';

// Redux Store 생성 및 설정
export default configureStore({
  reducer: {
    list: listReducer,
    detail: detailReducer,
  }
});