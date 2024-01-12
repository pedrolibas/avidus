import { createContext, useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { dataBase } from "../data/dataBase";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({ id: "", password: "" });
  const [countError, setCountError] = useState(0);
  const [isError, setIsError] = useState(false);
  const [infoUser, setInfoUser] = useState();

  const navigate = useNavigate();

  const userLogin = () => {
    const user = dataBase.find(
      (user) => user.id === userData.id && user.password === userData.password
    );

    if (!user) {
      toast.error("ID e/ou senha são inválidos!");
      setIsError(true);
      setCountError(countError + 1);
      if (countError > 1) {
        toast(
          "Caso o problema persista entrar em contato com a direção do retiro!",
          {
            icon: "🚨",
          }
        );
      }
    } else {
      localStorage.setItem("@avidus", user.id);

      navigate("/dashboard");
    }

    return;
  };

  const pickUpUser = () => {
    const userId = localStorage.getItem("@avidus");

    const user = dataBase.find((user) => user.id === userId);

    setInfoUser(user);

    return;
  };

  const exit = () => {
    localStorage.removeItem("@avidus");

    navigate("/");

    return;
  };

  return (
    <UserContext.Provider
      value={{
        userLogin,
        userData,
        setUserData,
        isError,
        pickUpUser,
        infoUser,
        exit,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
