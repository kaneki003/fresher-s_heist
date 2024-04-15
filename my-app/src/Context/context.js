import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemContext = createContext();

export const ItemState = () => {
  return useContext(ItemContext);
};

const ItemProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userinfo"));
    setUser(userInfo);

    if (!userInfo) {
      navigate("/");
    }
  }, []);

  return (
    <ItemContext.Provider
      value={{
        user,
        setUser,
        
      }}
    >
      {children}
    </ItemContext.Provider>
  );
};

export default ItemProvider;