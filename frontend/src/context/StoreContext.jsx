import { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = props => {
  const [cartItems, setCartItems] = useState({});
  const url = "https://food-del-backend-z8wj.onrender.com";
  const [token, setToken] = useState('');
  const [food_list, setFoodList] = useState([]);

  async function addToCart(itemId) {
    if (!cartItems[itemId]) {
      setCartItems(prev => ({
        ...prev,
        [itemId]: 1,
      }));
    } else {
      setCartItems(prev => ({
        ...prev,
        [itemId]: prev[itemId] + 1,
      }));
    }
    if (token) {
      await axios.post(
        url + '/api/cart/add',
        { itemId },
        { headers: { token } }
      );
    }
  }

  async function removeFromCart(itemId) {
    setCartItems(prev => ({
      ...prev,
      [itemId]: prev[itemId] - 1,
    }));
    if (token) {
      await axios.post(
        url + '/api/cart/remove',
        { itemId },
        { headers: { token } }
      );
    }
  }

  function getTotalCartAmount() {
    let totalAmount = 0;
    for (let item in cartItems) {
      let itemInfo = food_list.find(prod => prod._id === item);
      totalAmount += itemInfo.price * cartItems[item];
    }
    return totalAmount;
  }

  async function fetchFoodList() {
    const response = await axios.get(url + '/api/food/list');
    setFoodList(response.data.data);
  }

  async function loadCartData(token) {
    const response = await axios.post(
      url + '/api/cart/get',
      {},
      { headers: { token } }
    );
    setCartItems(response.data.cartData);
  }

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem('token')) {
        setToken(localStorage.getItem('token'));
        await loadCartData(localStorage.getItem('token'));
      }
    }
    loadData();
  }, []);

  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
