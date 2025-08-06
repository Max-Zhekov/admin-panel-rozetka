import { useState } from "react";
import s from "./userPasswordInput.module.css";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const UserPasswordInput = ({ error, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        {...props}
      />
      <span className={s.icon} onClick={togglePassword}>
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </span>
      {error && <span className={s.error}>{error.message}</span>}
    </div>
  );
};

export default UserPasswordInput;
