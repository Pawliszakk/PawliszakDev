import AvatarBlob from '../UI/AvatarBlob';
import classes from './ErrorPage.module.css';

const ErrorPage = () => {
	return (
		<div className={classes.container}>
			<div className={classes.shadow}></div>
			<AvatarBlob
				image="/assets/avatar/avatar404.png"
				alt="worried face avatar image"
			/>
			<div className={classes.text}>
				<h2>Oh no!</h2>
				<p>The page you are looking for does not exist...</p>
			</div>
		</div>
	);
};

export default ErrorPage;
