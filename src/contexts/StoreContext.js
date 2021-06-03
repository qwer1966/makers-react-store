import axios from 'axios';
import React, { useReducer } from 'react';

const INIT_STATE = {
  products: [],
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return {
        ...state,
        products: action.payload,
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

  return (
    <storeContext.Provider
      value={{
        products: state.products,
        fetchProducts,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
}
