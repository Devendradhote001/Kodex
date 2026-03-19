import React, { useState } from "react";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import AddUserForm from "./components/AddUserForm";

const App = () => {
  const [toggle, setToggle] = useState(false);
  let [users, setUsers] = useState([
    {
      id: 1,
      name: "Aryan",
      email: "rahul@gmail.com",
      designation: "developer",
      emp_id: "spl90",
      mobile: 5467898765,
      role: "manager",
    },
    {
      id: 2,
      name: "Pinky",
      email: "rahul@gmail.com",
      designation: "developer",
      emp_id: "spl90",
      mobile: 5467898765,
      role: "manager",
    },
    {
      id: 3,
      name: "Danesh",
      email: "rahul@gmail.com",
      designation: "developer",
      emp_id: "spl90",
      mobile: 5467898765,
      role: "manager",
    },
    {
      id: 4,
      name: "Rahul",
      email: "rahul@gmail.com",
      designation: "developer",
      emp_id: "spl90",
      mobile: 5467898765,
      role: "manager",
    },
    {
      id: 5,
      name: "Rahul",
      email: "rahul@gmail.com",
      designation: "developer",
      emp_id: "spl90",
      mobile: 5467898765,
      role: "manager",
    },
    {
      id: 6,
      name: "Rahul",
      email: "rahul@gmail.com",
      designation: "developer",
      emp_id: "spl90",
      mobile: 5467898765,
      role: "manager",
    },
    {
      id: 7,
      name: "Rahul",
      email: "rahul@gmail.com",
      designation: "developer",
      emp_id: "spl90",
      mobile: 5467898765,
      role: "manager",
    },
    {
      id: 8,
      name: "Rahul",
      email: "rahul@gmail.com",
      designation: "developer",
      emp_id: "spl90",
      role: "manager",
      mobile: 5467898765,
    },
    {
      id: 9,
      name: "Rahul",
      email: "rahul@gmail.com",
      designation: "developer",
      emp_id: "spl90",
      mobile: 5467898765,
      role: "manager",
    },
  ]);

  const [editUser, setEditUser] = useState(null); // this for getting data from userCard and send them into form

  let handleDelete = (id) => {
    let filteresUsers = users.filter((elem) => elem.id !== id); // find every data object and return opposite of condition
    setUsers(filteresUsers); // for updating our ui
  };

  return (
    <div className="h-screen p-4">
      <Navbar setToggle={setToggle} toggle={toggle} />

      {toggle ? (
        <AddUserForm
          setEditUser={setEditUser}
          setUsers={setUsers}
          setToggle={setToggle}
          editUser={editUser}
        />
      ) : (
        <div className="h-[90%] mt-5 grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-4">
          {users.map((elem) => {
            return (
              <UserCard
                key={elem.id}
                user={elem}
                handleDelete={handleDelete}
                setEditUser={setEditUser}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
