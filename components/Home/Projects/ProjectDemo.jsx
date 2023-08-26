import classes from './ProjectDemo.module.css';
import Image from 'next/image';

const ProjectDemo = ({ href, src, alt }) => {
	return (
		<a href={href} target="_blank">
			<div className={classes.card}>
				<div className={classes.image}>
					<Image src={src} alt={alt} fill sizes="100%" />
				</div>
			</div>
		</a>
	);
};

export default ProjectDemo;
