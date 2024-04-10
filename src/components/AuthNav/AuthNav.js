import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import { Notification } from "../Notification/Notification";
import { Button } from "../Button/Button";
import { LoginForm } from "../LoginForm/LoginForm";

export const AuthNav = () => {
  const { isAuth, logout } = useContext(AuthContext);

  return isAuth ? (
    <>
      <Notification text="Your are welcome!" />
      <Button text="Log out" clickHandler={logout} />
    </>
  ) : (
    <LoginForm />
  );
};
