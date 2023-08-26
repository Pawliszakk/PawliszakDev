import AvatarBlob from '../../../UI/AvatarBlob';

import classes from './Avatar.module.css';

import { motion } from 'framer-motion';
import AvatarText from './AvatarText';
const Avatar = ({ avatar }) => {
	return (
		<div className={classes.avatar}>
			<motion.div
				className={classes.container}
				initial={{ opacity: 0, translateX: -50 }}
				whileInView={{ opacity: 1, translateX: 0 }}
				transition={{ delay: 0.3 }}
			>
				<AvatarBlob
					image={avatar}
					alt="Avatar of pawliszakDev"
					className={classes.blob}
				/>
			</motion.div>
			<AvatarText />
		</div>
	);
};

export default Avatar;
