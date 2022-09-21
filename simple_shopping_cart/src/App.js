import "./App.css";
import Navbar from "./component/Navbar";
import React, { useState } from "react";
import ProductList from "./component/ProductList.js";
import Footer from "./component/Footer.js";
import AddIteam from "./component/addIteam";
function App() {
  const products = [
    {
      price: 9999,
      name: "iphone 13 pro max",
      quantity: 0,
    },
    {
      price: 99,
      name: "Redmi 10 pro max",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount += newProductList[index].price;
    newProductList[index].quantity++;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQunatity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    } else {
      newProductList[index].quantity = 0;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const removeIteam = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addIteam = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setProductList(newProductList);
  };
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      return (products.quantity = 0);
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };
  return (
    <>
      <Navbar productList={productList} />
      <main className="container mt-5">
        <AddIteam addIteam={addIteam} />
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQunatity={decrementQunatity}
          removeIteam={removeIteam}
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
