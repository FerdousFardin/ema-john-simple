const addToDb = (id) => {
  let cart = {};
  const savedCart = localStorage.getItem("cart");
  if (savedCart) cart = JSON.parse(savedCart);
  const quantity = cart[id];
  if (quantity) cart[id] = quantity + 1;
  else cart[id] = 1;
  localStorage.setItem("cart", JSON.stringify(cart));
};
