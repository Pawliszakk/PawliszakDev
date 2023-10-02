import classes from './AvatarBlob.module.scss';
import Image from 'next/image';

interface AvatarBlobProps {
	image: string;
	alt: string;
	className?: string;
}

const AvatarBlob: React.FC<AvatarBlobProps> = ({ image, alt, className }) => {
	return (
		<div className={`${classes.image} ${className}`}>
			<Image src={image} alt={alt} fill sizes="100%" />
		</div>
	);
};

export default AvatarBlob;
