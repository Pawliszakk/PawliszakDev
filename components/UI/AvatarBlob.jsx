import classes from './AvatarBlob.module.css';
import Image from 'next/image';
const AvatarBlob = ({ image, alt }) => {
	return (
		<div className={classes.image}>
			<Image src={image} alt={alt} fill sizes="100%" />
		</div>
	);
};

export default AvatarBlob;
