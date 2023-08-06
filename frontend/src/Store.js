import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialState = {
   userInfo: localStorage.getItem('userInfo')
      ? JSON.parse(localStorage.getItem('userInfo'))
      : null,
};

function reducer(state, action) {
   switch (action.type) {
      case 'USER_SIGNIN': {
         console.log('login out');
         return { ...state, userInfo: action.payload };
      }

      case 'USER_SIGNOUT':
         console.log('login out');
         return {
            ...state,
            userInfo: null,
            // cart: { cartItems: [], shippingAddress: {}, paymentMethod: '' },
         };

      default:
         return state;
   }
}

export default function StoreProvider(props) {
   const [state, dispatch] = useReducer(reducer, initialState);
   const value = { state, dispatch };
   return <Store.Provider value={value}> {props.children}</Store.Provider>;
}
