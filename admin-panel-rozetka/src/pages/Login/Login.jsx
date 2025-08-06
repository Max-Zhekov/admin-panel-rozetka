import s from "./login.module.css";
import { useForm } from "react-hook-form";
import UserNameInput from "../../components/UserNameInput/UserNameInput";
import UserPasswordInput from "../../components/UserPasswordInput/UserPasswordInput";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className={s.container}>
      <div className={s.card}>
        <div className={s.logo}>
          <img src="./logo.svg" alt="logo" />
        </div>
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <UserNameInput
            error={errors.firstName}
            {...register("firstName", {
              required: "The field must not be empty",
            })}
          />
          <UserPasswordInput
            error={errors.password}
            {...register("password", {
              required: "The field must not be empty",
            })}
          />
          <button type="submit" className={s.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
