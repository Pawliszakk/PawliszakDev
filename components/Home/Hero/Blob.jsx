import classes from './Blob.module.css';
import Image from 'next/image';
const Blob = () => {
	return (
		<div className={classes.container}>
			<Image
				src="/assets/avatar.jpg"
				alt="An image showing web developer"
				fill
			/>
		</div>
	);
};

export default Blob;
