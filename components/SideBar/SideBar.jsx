import styles from "./SideBar.module.css";
import React from "react";

export const SidebarComponent = ({ width, height }) => {
  const [status, setStatus] = React.useState(true);

  const toggle = () => {
    setStatus(!status);
  };

  return (
    <React.Fragment>
      <div
        className={styles.sidebar}
        style={{
          width: status ? width : 70,
          height: height,
        }}
      >
        <div>
          <div>
            <div
              onClick={() => toggle()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: 15,
                paddingLeft: 13,
                marginBottom: 40,
                marginTop: 10,
              }}
            >
              <img
                src="./menu_black_24dp.svg"
                height={40}
                className={styles.icons}
              />
              <span
                style={{
                  paddingLeft: 30,
                  display: status ? "block" : "none",
                  fontSize: 20,
                  color: "#FFFFFF",
                }}
              >
                1806510
              </span>
            </div>
            <a href="/">
              <div
                style={{
                  padding: 15,
                  alignItems: "center",
                  paddingTop: 15,
                  paddingBottom: 15,
                  background: "#133B5C",
                  display: "flex",
                }}
              >
                <img src="./home.svg" height={30} className={styles.icons} />
                <span
                  style={{
                    paddingLeft: 10,
                    fontSize: 20,
                    color: "#FFFFFF",
                    display: status ? "block" : "none",
                  }}
                >
                  Home
                </span>
              </div>
            </a>
            <a href="/aboutme">
              <div
                style={{
                  alignItems: "center",
                  padding: 15,
                  paddingTop: 15,
                  paddingBottom: 15,
                  display: "flex",
                }}
              >
                <img src="./face.svg" height={30} className={styles.icons} />
                <span
                  style={{
                    paddingLeft: 10,
                    fontSize: 20,
                    color: "#FFFFFF",
                    display: status ? "block" : "none",
                  }}
                >
                  About Me
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const SideBar = () => {
  return <SidebarComponent width={235} height={"100vh"} />;
};

export default SideBar;
