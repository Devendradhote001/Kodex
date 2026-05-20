import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [formdata, setFormdata] = useState({});

  let handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(formdata);

      let res = await axios.post(
        "http://localhost:3000/create-product",
        formdata
      );

      console.log(res);
    } catch (error) {
      console.log("error in post api", error);
    }
  };

  return (
    <div>
      <h1>Product creation form</h1>

      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Product Details</legend> <br />
          {/* name */}
          <label htmlFor="">Product Name</label> <br />
          <input
            onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
            type="text"
            placeholder="Enter product name"
          />{" "}
          <br /> <br />
          {/* description */}
          <label htmlFor="">Product Description</label> <br />
          <input
            onChange={(e) =>
              setFormdata({ ...formdata, description: e.target.value })
            }
            type="text"
            placeholder="Enter product Description"
          />{" "}
          <br /> <br />
          {/* category */}
          <label htmlFor="">Product Category:</label> <br />
          <select
            onChange={(e) =>
              setFormdata({ ...formdata, category: e.target.value })
            }
          >
            <option value="MEN">MEN</option>
            <option value="WOMEN">WOMEN</option>
            <option value="KIDS">KIDS</option>
          </select>
          <br /> <br />
        </fieldset>
        <br /> <br />
        <fieldset>
          <legend>Price</legend>
          <br />
          <label htmlFor="">Amount</label> <br />
          <input
            onChange={(e) =>
              setFormdata({ ...formdata, amount: Number(e.target.value) })
            }
            type="number"
            placeholder="Amount"
          />{" "}
          <br /> <br />
          <label htmlFor="">Select Currency:</label> <br />
          <select
            onChange={(e) =>
              setFormdata({ ...formdata, currency: e.target.value })
            }
          >
            <option value="INR">INR</option>
            <option value="USD">USD</option>
          </select>
        </fieldset>{" "}
        <br />
        <label htmlFor="">Stock:</label>
        <input
          onChange={(e) =>
            setFormdata({ ...formdata, stock: Number(e.target.value) })
          }
          type="number"
          placeholder="Stock"
        />{" "}
        <br /> <br />
        <button>Submit form</button>
      </form>
    </div>
  );
};

export default App;
