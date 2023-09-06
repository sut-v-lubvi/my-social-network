import s from "../../js_components/Users/Users.module.css";

export const returnButton = (subscription, value, buttonStatus, user) => (
  <button
    disabled={buttonStatus.some((id) => id === user.id)}
    onClick={() => {
      subscription(user.id);
    }}
    className={s.button}
  >
    {value}
  </button>
);
