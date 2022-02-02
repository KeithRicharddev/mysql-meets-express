const mysql = require("mysql2");

//

//const query = "select * FROM Products";

//connection.query(query, (err, results, feilds) => {

//  if (err) {
//   console.log(err);
//  }
//  console.log(results);
//});

//const getAllProducts = async () => {
//const query = "select * FROM Products";
//const [results, feilds] = await connection.promise().query(query);

//console.log(results);
//return results;
//};
const createProduct = async (product) => {
  const insertQuery = `INSERT INTO Products (Description, SKU, UserId)
    VALUES ('${product.Description}', '${product.SKU}', ${product.userId})`;
  const [results, fields] = await connection.promise().query(insertQuery);

  console.log(results);
  return results;
};
//getAllProducts();
createProduct({
  description: "Keiths new Product",
  sku: "Keith1234",
  userId: 1,
});

connection.end();
