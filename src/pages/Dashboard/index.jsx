import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import Loading from "../Loading";
import "./style.css";

const Dashboard = () => {
  const { pickUpUser, infoUser, exit } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  const [numContent, setNumContent] = useState(0);

  useEffect(() => {
    pickUpUser();

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return isLoading ? (
    <Loading />
  ) : (
    <div className="all">
      <header className="header">
        <div className="container_header">
          <h1>{infoUser.name}</h1>
          <button
            className="exit"
            onClick={() => {
              exit();
            }}
          >
            <img src="./projectAssets/exitIcon.svg" alt="" />
          </button>
        </div>
      </header>
      <main>
        <ul className="feed">
          {infoUser.content.map((elem) => (
            <li className="card">
              <div className="header_card">
                <img src="./profileAvidus.png" alt="" id="profile" />
                <h2>Avidus</h2>
              </div>
              <img src="https://github.com/pedrolibas/avidus/blob/images/a02/foto1.jpeg?raw=true" alt="" />
              <p><strong>{elem.sender}</strong>{elem.description}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Dashboard;
