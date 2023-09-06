import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../img/logo.jpg";
import { NavLink } from "react-router-dom";
import Twist from "./Twist";
import { returnButton } from "../../utils/formFalidathion/returnButton";

const Users = ({
  twist,
  prevNumberPage,
  currentNumberOfPage,
  addUsersCurrentPage,
  nextNumberPage,
  users,
  buttonStatus,
  unFollow,
  follow,
}) => {
  return (
    <div className={s.container}>
      <div className={s.title}>Users</div>
      {twist ? <Twist /> : null}
      <div className={s.users__container}>
        <div className={s.number__page__container}>
          <button
            onClick={() => {
              prevNumberPage();
            }}
            className={s.previous__button}
          >
            Назад
          </button>
          <div className={s.number__page}>
            {currentNumberOfPage.map((p) => (
              <span
                key={p}
                onClick={() => {
                  addUsersCurrentPage(p);
                }}
              >
                {p}
              </span>
            ))}
          </div>
          <button
            onClick={() => {
              nextNumberPage();
            }}
            className={s.next__button}
          >
            Вперёд
          </button>
        </div>
        {users.map((e) => (
          <div key={e.id} className={s.user__container}>
            <NavLink to={"/profile/" + e.id}>
              <div
                className={s.avatar}
                style={{
                  backgroundImage: `url(${
                    e.photos.small != null ? e.photos.small : userPhoto
                  })`,
                }}
              ></div>
            </NavLink>
            <div className={s.button__container}>
              {e.followed
                ? returnButton(unFollow, "Unfollow", buttonStatus, e)
                : returnButton(follow, "Follow", buttonStatus, e)}
            </div>
            <div className={s.user__information}>
              <div className={s.user__name}>{e.name}</div>
              <div className={s.user__status}>{e.userStatus}</div>
              <div className={s.user__country}>{"e.location.country"}</div>
              <div className={s.user__city}>{"e.location.city"}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
