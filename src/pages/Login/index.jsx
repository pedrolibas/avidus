import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import "./style.css";

const Login = () => {
  const { userLogin, userData, setUserData, isError } = useContext(UserContext);

  return (
    <div className="main_container">
      <div className="container">
        <img src="src\assets\projectAssets\logoAvidus.png" alt="" />
        <h2>Atos 29: "Nós somos o próximo capítulo"</h2>
        <form>
          <div>
            <span>ID</span>
            <input
              type="text"
              onChange={(e) =>
                setUserData({
                  id: e.currentTarget.value.toUpperCase(),
                  password: userData.password,
                })
              }
              style={{ borderColor: isError ? "red" : "#1a983" }}
            />
          </div>
          <div>
            <span>Senha</span>
            <input
              type="password"
              onChange={(e) =>
                setUserData({
                  id: userData.id,
                  password: e.currentTarget.value,
                })
              }
              style={{ borderColor: isError ? "red" : "#1a983" }}
            />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault(), userLogin();
            }}
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
