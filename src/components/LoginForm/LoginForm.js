import { useState, useContext } from "react";
import { AuthContext } from "../../context/authContext";

export const LoginForm = () => {
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    login(password);
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Your password"
        value={password}
        onChange={({ target: { value } }) => setPassword(value)}
      />
      <button>Login</button>
    </form>
  );
};
