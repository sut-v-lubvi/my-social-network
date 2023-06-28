import s from './DialogMessage.module.css';

const DialogMessage = (props) => {
	return(
	<div className= {s.Message}>
		{props.messageText}
	</div>
	)
}

export default DialogMessage;
