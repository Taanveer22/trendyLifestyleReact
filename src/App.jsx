import { useState, useEffect } from "react";

import "./App.css";
import AppChild from "./AppChild";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleCart = (element) => {
    // console.log(element);
    const isExist = cart.find((existElement) => existElement.id === element.id);
    console.log(isExist);
    if (!isExist) {
      setCart([...cart, element]);
    } else {
      alert("already exist");
    }
  };

  const handleDelete = (clickId) => {
    // console.log(clickId);
    const newCart = cart.filter((item) => item.id !== clickId);
    setCart(newCart);
  };
  // console.log(products);

  return (
    <>
      <section id="main-container">
        <div className="products-container">
          {products.map((element, index) => (
            <AppChild
              element={element}
              key={index}
              handleCart={handleCart}
            ></AppChild>
          ))}
        </div>
        <div className="cart-container">
          <h1>Checkout Cart</h1>
          <div className="cart-heading">
            <h2>serial</h2>
            <h2>product</h2>
            <h2>price</h2>
            <h2>action</h2>
          </div>
          {cart.map((item, index) => (
            <div className="cart-heading">
              <h5>{index}</h5>
              <h5>{item.title}</h5>
              <h5>{item.price}</h5>
              <button onClick={() => handleDelete(item.id)} className="btn-2">
                Delete
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
