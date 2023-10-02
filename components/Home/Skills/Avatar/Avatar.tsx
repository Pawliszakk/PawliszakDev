import AvatarBlob from '../../../UI/AvatarBlob';

import classes from './Avatar.module.scss';

import AvatarText from './AvatarText';
import SlideAnimation from '../../../UI/Animations/SlideAnimation';

interface AvatarProps {
	avatar: string;
}

const Avatar: React.FC<AvatarProps> = ({ avatar }) => {
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
