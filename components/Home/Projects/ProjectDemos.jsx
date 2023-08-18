import Image from 'next/image';
import classes from './ProjectDemos.module.css';
const ProjectDemos = () => {
	return (
		<div className={classes.box}>
			<a href="https://klimaswiat.pl/" target="_blank">
				<div className={classes.card}>
					<div className={classes.image}>
						<Image
							src="/assets/projects/klimaswiat.JPG"
							alt="Klima Świat Home page snippet"
							fill
							sizes="100%"
						/>
					</div>
				</div>
			</a>
			<a href="https://www.hurtowniaecofresh.pl/" target="_blank">
				<div className={classes.card}>
					<div className={classes.image}>
						<Image
							src="/assets/projects/ecofresh.JPG"
							alt="Eco fresh Home page snippet"
							fill
							sizes="100%"
						/>
					</div>
				</div>
			</a>
		</div>
	);
};

export default ProjectDemos;
