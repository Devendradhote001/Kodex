import React, { useContext, useState } from "react";
import Dashboard1 from "./components/Dashboard1/Dashboard1";
import Dashboard2 from "./components/Dashboard2/Dashboard2";
import Cart from "./components/Dashboard1/Cart";
import { MyStore } from "./context/MyContext";

const App = () => {
  let data = useContext(MyStore);
  console.log("data from context->",data);

  const [toggle, setToggle] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [getClickedProduct, setGetClickedProduct] = useState(null);

  console.log("cart items->", cartItems);

  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>
        Go to {toggle ? "Home" : "Users"}
      </button>
      <button onClick={() => setShowCart(true)} style={{ marginLeft: "40px" }}>
        Show Cart
      </button>

      {toggle ? (
        <div>
          <Dashboard2 getClickedProduct={getClickedProduct} />
        </div>
      ) : (
        <div>
          <Dashboard1
            setGetClickedProduct={setGetClickedProduct}
            setCartItems={setCartItems}
          />
        </div>
      )}

      {showCart && (
        <div
          style={{
            position: "absolute",
            top: "0",
            height: "100vh",
            backgroundColor: "gray",
            width: "100vw",
          }}
        >
          <Cart cartItems={cartItems} setShowCart={setShowCart} />
        </div>
      )}
    </div>
  );
};

export default App;
