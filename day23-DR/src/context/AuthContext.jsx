import { createContext, useState } from "react";

export let Auth = createContext();

export let AuthProvider = ({ children }) => {
  const [registeredUsers, setRegisteredUsers] = useState(
    JSON.parse(localStorage.getItem("reg users")) || []
  );
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Auth.Provider
      value={{
        setRegisteredUsers,
        setLoggedInUser,
        registeredUsers,
        loggedInUser,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
