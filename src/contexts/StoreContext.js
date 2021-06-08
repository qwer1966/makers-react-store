import axios from 'axios';
import React, { useReducer } from 'react';

const INIT_STATE = {
  products: [],
  productDetail: null,
  total: 0,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload.data,
        total: action.payload.total,
      };
    case 'SET_PRODUCT_DETAIL':
      return {
        ...state,
        productDetail: action.payload,
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case 'CLEAR_PRODUCT':
      return {
        ...state,
        productDetail: null,
      };
    default:
      return state;
  }
};

export const storeContext = React.createContext();
const { REACT_APP_API_URL: URL } = process.env;

export default function StoreContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const fetchProducts = async (page = 0) => {
    try {
      const response = await axios.get(
        `${URL}/products?_start=${page * 4}&_end=${4 * (page + 1)}`
      );
      const products = response.data;
      const total = response.headers['x-total-count'];

      dispatch({
        type: 'SET_PRODUCTS',
        payload: {
          data: products,
          total,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchSearchProducts = async (value) => {
    const response = await axios.get(`${URL}/products/?q=${value}`);
    const products = response.data;
    dispatch({
      type: 'SET_PRODUCTS',
      payload: products,
    });
  };

  const fetchProductDetail = async (id) => {
    const response = await axios.get(`${URL}/products/${id}`);
    const productDetail = response.data;
    dispatch({
      type: 'SET_PRODUCT_DETAIL',
      payload: productDetail,
    });
  };

  const createProduct = async (product) => {
    const response = await axios.post(`${URL}/products`, product);
    const createdProduct = response.data;

    dispatch({
      type: 'ADD_PRODUCT',
      payload: createdProduct,
    });

    return createdProduct.id;
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${URL}/products/${id}`);
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: id,
    });
  };

  const updateProduct = async (id, data) => {
    await axios.patch(`${URL}/products/${id}`, data);
    dispatch({
      type: 'CLEAR_PRODUCT',
    });
  };

  return (
    <storeContext.Provider
      value={{
        products: state.products,
        total: state.total,
        productDetail: state.productDetail,
        fetchProducts,
        fetchProductDetail,
        createProduct,
        deleteProduct,
        updateProduct,
        fetchSearchProducts,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
}
