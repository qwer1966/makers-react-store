import axios from 'axios';
import React, { useReducer } from 'react';

const INIT_STATE = {
  products: [],
  productDetail: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
      };
    case 'SET_PRODUCT_DETAIL':
      return {
        ...state,
        productDetail: action.payload,
      };
    default:
      return state;
  }
};

export const storeContext = React.createContext();
const { REACT_APP_API_URL: URL } = process.env;

export default function StoreContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${URL}/products`);
      const products = response.data;

      dispatch({
        type: 'SET_PRODUCTS',
        payload: products,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchProductDetail = async (id) => {
    const response = await axios.get(`${URL}/products/${id}`);
    const productDetail = response.data;
    dispatch({
      type: 'SET_PRODUCT_DETAIL',
      payload: productDetail,
    });
  };

  return (
    <storeContext.Provider
      value={{
        products: state.products,
        productDetail: state.productDetail,
        fetchProducts,
        fetchProductDetail,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
}
