import { loadCartFromStorage } from "../utilities/fakedb";

export const shopAndCartLoader = async () => {
  //TODO: get products
  const productsStr = await fetch("products.json");
  const products = await productsStr.json();
  //TODO: get cart
  const savedCart = loadCartFromStorage();
  // console.log(savedCart);
  //TODO: set an initial prev cart
  const prevCart = [];
  //TODO: for loop on savedCArt
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    // console.log(addedProduct);
    //TODO: set quantity and add it to the initial cart
    if (addedProduct) {
      const quantity = savedCart[id];
      addedProduct.quantity = quantity;
      // addedProduct.quantity= savedCart[id]; //SHORTHAND
      // console.log(id, quantity);
      prevCart.push(addedProduct);
    }
  }
  //TODO: return the products and prevCart as an object
  return { products, prevCart };
};
