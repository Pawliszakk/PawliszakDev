import Link from 'next/link';
import classes from './ProjectDemo.module.css';
import Image from 'next/image';
import LinkButton from '../../UI/buttons/LinkButton';
// const ProjectDemo = ({ href, src, alt }) => {
// 	return (
// 		<a href={href} target="_blank">
// 			<div className={classes.card}>
// 				<div className={classes.image}>
// 					<Image src={src} alt={alt} fill sizes="100%" />
// 				</div>
// 			</div>
// 		</a>
// 	);
// };

const ProjectDemo = ({ href, src, alt, title, tech }) => {
	const techMap = tech.map((tech) => <li key={tech}>{tech}</li>);

	return (
		<div className={classes.card}>
			<div className={classes.image}>
				<Image src={src} alt={alt} fill sizes="100%" />
			</div>
			<div className={classes.text}>
				<div>
					<h3>{title}</h3>
					<p>Technologies</p>
					<ul>{techMap}</ul>
				</div>
				<div className={classes.buttons}>
					<LinkButton className={classes.btn} href="/projects">
						Learn more about the project
					</LinkButton>
					<LinkButton anchor>Visit Live</LinkButton>
				</div>
			</div>
		</div>
	);
};

export default ProjectDemo;
