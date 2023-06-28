import s from './Sender.module.css';
import { NavLink } from 'react-router-dom';
import Friend from '../../NavMeny/FrendsBlock/Friend/Friend'

const Sender = (props) => {
	return(
		<div className= {s.sender + ' ' + s.active}>
		<NavLink to = {'/messages/' + props.id} > 
		{props.name}
		</NavLink>
		</div>
	)
}

export default Sender;
