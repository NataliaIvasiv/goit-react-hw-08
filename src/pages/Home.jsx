
import DocumentTitle from "../components/DocumentTitle";
import { NavLink } from "react-router-dom";
import useAuth from "../hookUseAuth/HookUseAuth";
import { useState } from "react";

const Home = () => {
  const [isHoveredLog, setIsHoveredLog] = useState(false);
  const [isHoveredReg, setIsHoveredReg] = useState(false);

  const handleMouseEnterLog = () => {
    setIsHoveredLog(true);
  };

  const handleMouseLeaveLog = () => {
    setIsHoveredLog(false);
  };

  const handleMouseEnterReg = () => {
    setIsHoveredReg(true);
  };

  const handleMouseLeaveReg = () => {
    setIsHoveredReg(false);
  };

  const { isLoggedIn } = useAuth();

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto", padding: "0 20px", position: "relative" }}>
      <DocumentTitle> Phonebook</DocumentTitle>
      <h1
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "2rem",
        }}
      >
        Welcome to Phonebook!
      </h1>
      {isLoggedIn ? (
        <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
          Manage your contacts{" "}
        </p>
      ) : (
        <>
          <p
            style={{
              fontSize: "1.2rem",
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            In order to use Phonebook, please log in or register.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <NavLink
              to="/login"
              style={{
                textDecoration: "none",
                color: "inherit",
                padding: "10px 20px",
                backgroundColor: isHoveredLog ? "rgb(229, 94, 22)" : "rgb(228, 135, 85)",
                 border: "1px solid black",
                borderRadius: "20px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
                boxShadow: isHoveredLog ? "0px 0px 8px 4px rgb(88, 80, 87)" : "none",
                transform: isHoveredLog ? "scale(1.1)" : "none"
                
                }}
                onMouseEnter={handleMouseEnterLog}
                onMouseLeave={handleMouseLeaveLog}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              style={{
                textDecoration: "none",
                color: "black",
                backgroundColor: isHoveredReg ? "rgb(229, 94, 22)" : "rgb(228, 135, 85)",
                padding: "10px 20px",
                borderRadius: "20px",
                fontSize: "1.2rem",
                fontWeight: "bold",
                cursor: "pointer",
                border: "1px solid black",
                boxShadow: isHoveredReg ? "0px 0px 8px 4px rgb(88, 80, 87)" : "none",
                transform: isHoveredReg ? "scale(1.1)" : "none"
                }}
                onMouseEnter={handleMouseEnterReg}
                onMouseLeave={handleMouseLeaveReg}
            >
              Register
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;