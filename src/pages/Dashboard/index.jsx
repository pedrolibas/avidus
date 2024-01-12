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

  const previousImage = () => {
    if (numContent === 0) {
      setNumContent(infoUser.content.length - 1);
    } else {
      setNumContent(numContent - 1);
    }
  };

  const nextContent = () => {
    if (numContent === infoUser.content.length - 1) {
      setNumContent(0);
    } else {
      setNumContent(numContent + 1);
    }
  };

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
        <div className="carousel">
          <button className="left" onClick={() => previousImage()}>
            <img src="./projectAssets/arrow.svg" alt="" />
          </button>
          <div className="container_image">
            {infoUser.content[numContent].type === "image" ? (
              <img src={infoUser.content[numContent].data} alt="" />
            ) : (
              <div className="container_text">
                <div className="container_sub">
                  <h2>{infoUser.content[numContent].data.sender}</h2>
                  <p>{infoUser.content[numContent].data.content}</p>
                </div>
              </div>
            )}
            <ul>
              {infoUser.content.map((elem, i, arr) => (
                <li id={i}>.</li>
              ))}
            </ul>
          </div>
          <button className="right" onClick={() => nextContent()}>
            <img src="./projectAssets/arrow2.svg" alt="" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
