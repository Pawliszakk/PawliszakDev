import AvatarBlob from '../../../UI/AvatarBlob';

import classes from './Avatar.module.css';

import AvatarText from './AvatarText';
import SlideAnimation from '../../../UI/SlideAnimation';
const Avatar = ({ avatar }) => {
	return (
		<SlideAnimation className={classes.avatar}>
			<AvatarBlob
				image={avatar}
				alt="Avatar of pawliszakDev"
				className={classes.blob}
			/>
			<AvatarText />
		</SlideAnimation>
	);
};

export default Avatar;
