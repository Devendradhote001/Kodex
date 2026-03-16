import React, { useState } from "react";

const App = () => {
  let [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  console.log("form value->", formValues);

  return (
    <div className="h-screen flex flex-col gap-5 justify-center items-center">
      <h1>Create Account</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("after onchange->", formValues);
        }}
        className="border flex flex-col gap-4 w-[400px] border-gray-600 p-5 rounded-2xl"
        action=""
      >
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Name
          </label>
          <input
            onChange={(e) => {
              formValues.name = e.target.value;
              setFormValues({ ...formValues });
            }}
            className="bg-gray-300 p-2 rounded text-white"
            type="text"
            placeholder="John Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Email
          </label>
          <input
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
            className="bg-gray-300 p-2 rounded text-white"
            type="text"
            placeholder="john@xyz.com"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Password
          </label>
          <input
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
            className="bg-gray-300 p-2 rounded text-white"
            type="text"
            placeholder="12345678"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-xl font-semibold" htmlFor="">
            Mobile
          </label>
          <input
            onChange={(e) =>
              setFormValues({ ...formValues, mobile: e.target.value })
            }
            className="bg-gray-300 p-2 rounded text-white"
            type="number"
            placeholder="9579457347"
          />
        </div>
        <button className="bg-blue-600 p-2 rounded text-white cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default App;
