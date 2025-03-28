const products = [
  { name: "Laptop", price: 800, category: "Electronics" },
  { name: "Phone", price: 500, category: "Electronics" },
  { name: "Table", price: 200, category: "Furniture" },
  { name: "Chair", price: 100, category: "Furniture" },
  { name: "Headphones", price: 50, category: "Electronics" },
  { name: "Shoes", price: 70, category: "Clothing" },
  { name: "Jacket", price: 120, category: "Clothing" },
  { name: "Watch", price: 250, category: "Accessories" },
  { name: "Backpack", price: 90, category: "Accessories" },
  { name: "Sofa", price: 600, category: "Furniture" },
];

///  Q1.  Add new product .

products.push({ name: "Desk", price: 150, category: "Furniture" });
console.log(products);

/// Q2.   Find the product

let findOneProduct = products.find((product) => product.name === "Watch");
console.log(findOneProduct);

///// Q3.  Create new array of procuct names only .

let procuctNames = products.map((product) => product.name);
console.log(procuctNames);

///// Q4. Get all prodeucts that cost more than 100.

let costProduct = products.filter((product) => product.price > 100);
console.log(costProduct);

////// Q5.  Display each product's name and price

products.forEach((product) =>
  console.log(`Product: ${product.name}, Price: $${product.price}`)
);

///// Q6. Calculate the total cost of all products in the array

let calculateTotal = products.reduce((sum,product) => sum + product.price,0);
console.log(`The total of all product's cost is ${calculateTotal}`);
