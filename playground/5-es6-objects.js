const name = "Jon";
const age = 38;

const user = {
  name,
  age,
  location: "Sacramento",
};

console.log(user);

const product = {
  label: "Pickles",
  price: 5,
  stock: 201,
  salePrice: undefined,
};

const { label, price, stock, salePrice } = product;
console.log(label);

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction("order", product);
