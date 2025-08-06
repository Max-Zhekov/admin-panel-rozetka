import s from "./login.module.css";
import { useForm } from "react-hook-form";
import UserNameInput from "../../components/UserNameInput/UserNameInput";
import UserPasswordInput from "../../components/UserPasswordInput/UserPasswordInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginThunk } from "../../features/auth/authThunk";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    const result = await dispatch(loginThunk(data));
    if (loginThunk.fulfilled.match(result)) {
      navigate("/productsTable");
    }
  };

  return (
    <div className={s.container}>
      <div className={s.card}>
        <div className={s.logo}>
          <img src="./logo.svg" alt="logo" />
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <UserNameInput
            error={errors.name}
            {...register("name", {
              required: "The field must not be empty",
            })}
          />
          <UserPasswordInput
            error={errors.password}
            {...register("password", {
              required: "The field must not be empty",
            })}
          />
          <button type="submit" className={s.button} disabled={loading}>
            {loading ? "Logging in ..." : "Login"}
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
