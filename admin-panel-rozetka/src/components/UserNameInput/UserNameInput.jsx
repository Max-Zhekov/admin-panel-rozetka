import s from "./userNameInput.module.css";

const UserNameInput = ({ error, ...props }) => {
  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        type="text"
        placeholder="User Name"
        {...props}
      />
      {error && <span className={s.error}>{error.message}</span>}
    </div>
  );
};

export default UserNameInput;
