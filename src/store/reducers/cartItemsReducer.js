const cartItemsReducer = (state = null, action) => {
  switch (action.type) {
    case "CART_ITEMS":
      return [...action.payload];
    default:
      return state;
  }
};

export default cartItemsReducer;
