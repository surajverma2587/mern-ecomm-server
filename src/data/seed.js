const { connect, disconnect } = require("../db");

const { Category, Shop, Product } = require("../models");

const categories = require("./categories");
const shops = require("./shops");
const products = require("./products");

const init = async () => {
  await connect();

  // seed categories
  await Category.deleteMany({});
  await Category.insertMany(categories);
  console.log("--- Successfully seeded categories ---");

  // seed shops
  await Shop.deleteMany({});
  await Shop.insertMany(shops);
  console.log("--- Successfully seeded shops ---");

  // seed products

  const productsWithIds = await Promise.all(
    products.map(async (product) => {
      // get the id for category by name
      const { _id: category } = await Category.findOne({
        name: product.category,
      });

      // get the id for shop by name
      const { _id: shop } = await Shop.findOne({
        name: product.shop,
      });

      // merge the object with the new category id and shop id
      const mergedProduct = {
        ...product,
        category,
        shop,
      };

      return mergedProduct;
    })
  );

  await Product.deleteMany({});
  await Product.insertMany(productsWithIds);
  console.log("--- Successfully seeded products ---");

  await disconnect();
};

init();
