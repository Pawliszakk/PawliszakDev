import classes from './Blob.module.css';
import Image from 'next/image';
const Blob = () => {
	return (
		<div className={classes.container}>
			<Image
				src="/assets/avatar.jpg"
				alt="Iphone Emote of Web developer on code background"
				fill
				priority
				sizes="100%"
			/>
		</div>
	);
};

export default Blob;
