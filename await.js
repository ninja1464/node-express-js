let is_shop_open = true;

let topping = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("which toppings u want "));
    }, 2000);
  });
};

async function kitchen() {
  console.log("A");
  console.log("B");
  console.log("C");
  await topping();
  console.log("C");
  console.log("D");
  console.log("E");
}

kitchen();

console.log("john ");
console.log("don");
console.log("kon");
