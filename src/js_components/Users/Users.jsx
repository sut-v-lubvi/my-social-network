import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  let usersArray = props.users.map((e) => (
    <div key={e.id} className={s.user__container}>
      <div className={s.avatar}>
        <img src={e.avatarUrl}></img>
      </div>
      <div className={s.button__container}>
        {e.condition ? (
          <button
            onClick={() => {
              props.follow(e.id);
            }}
            className={s.button}
          >
            Follow
          </button>
        ) : (
          <button
            onClick={() => {
              props.unfollow(e.id);
            }}
            className={s.button}
          >
            Unfollow
          </button>
        )}
      </div>
      <div className={s.user__information}>
        <div className={s.user__name}>{e.name}</div>
        <div className={s.user__status}>{e.userStatus}</div>
        <div className={s.user__country}>{e.location.country}</div>
        <div className={s.user__city}>{e.location.city}</div>
      </div>
    </div>
  ));

  return (
    <div className={s.container}>
      <div className={s.title}>Users</div>
      <div className={s.users__container}>{usersArray}</div>
    </div>
  );
};

export default Users;
