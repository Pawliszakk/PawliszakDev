import classes from './ProjectDemo.module.css';
import Image from 'next/image';
import LinkButton from '../../UI/buttons/LinkButton';
import SlideFromTop from '../../UI/SlideFromTop';

const ProjectDemo = ({ href, src, alt, title, tech, detail, index }) => {
	const techMap = tech.map((tech) => <li key={tech}>{tech}</li>);

	return (
		<SlideFromTop className={classes.box} index={index}>
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
						<LinkButton href={detail}>Learn more about the project</LinkButton>
						<LinkButton anchor href={href}>
							Visit Live
						</LinkButton>
					</div>
				</div>
			</div>
		</SlideFromTop>
	);
};

export default ProjectDemo;
