import s from "./ProfilePhotoDescription.module.css";
import logo from "../../../img/logo.jpg";
import PRofileStatus from "./PRofileStatus";

const ProfilePhotoDescription = (props) => {
  // console.log("render");
  return (
    <div>
      <div className={s.content__photo}>
        <img src="https://i.pinimg.com/originals/eb/f0/02/ebf002d6348c3ae432649da4418fce40.jpg"></img>
      </div>
      <div className={s.user__name}>{props.profile.fullName}</div>
      <div className={s.flex__conteiner__img__text}>
        <div className={s.avatar}>
          <img
            src={props.profile.photos.large ? props.profile.photos.large : logo}
          ></img>
        </div>
        <div className={s.description}>
          <PRofileStatus
            statusUpdate={props.statusUpdate}
            statusUser={props.statusUser}
          />
          <div className={s.post_title}>
            <p>{props.profile.aboutMe}</p>
          </div>
          <div className={s.post}>
            <a href={props.profile.contacts.facebook}>facebook</a>
          </div>
          <div className={s.post}>
            <a href={props.profile.contacts.vk}>vk</a>
          </div>
          <div className={s.post}>
            <a href={props.profile.contacts.twitter}>twitter</a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfilePhotoDescription;
