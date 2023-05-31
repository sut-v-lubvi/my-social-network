const Profile = () => {
	return (
		<div>
			<div className="content__photo">
				<img src="https://i.pinimg.com/originals/eb/f0/02/ebf002d6348c3ae432649da4418fce40.jpg"></img>
			</div>
			<div className="flex__conteiner__img__text">
				<div className="avatar">
				<img src="data:image/jpeg;base64,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"></img>
				</div>
				<div className="description">
					<div className="post_title">
						<p>Post 1</p>
					</div>
					<div className="post">
						<p>Post2</p>
					</div>
					<div className="post">
						<p>Post3</p>
					</div>
					<div className="post">
						<p>Post4</p>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Profile;