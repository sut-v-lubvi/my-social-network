import s from "./Friend.module.css";
import avatar from "../img/c920ae49-ec30-4123-ba3a-5e64aa81ad28.jpg";
const Friend = () => {
  return (
    <div className={s.friend}>
      <div className={s.photo__block}>
        <a href="#">
          <img src={avatar} alt="" />
        </a>
      </div>
      <div className={s.friend__name}>
        <p>Ivan</p>
      </div>
    </div>
  );
};
export default Friend;
