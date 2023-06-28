import { NavLink } from "react-router-dom";
import s from "./FrendsBlock.module.css";
import Friend from './Friend/Friend'

const FrendsBlock = () => {
  return (
    <div className={s.conteiner}>
      <div className={s.title}>
        <p>Friends</p>
      </div>
			<div className={s.friends__list}>
				<Friend />
				<Friend />
				<Friend />
			</div>
    </div>
  );
};
export default FrendsBlock;
