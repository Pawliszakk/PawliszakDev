import classes from './ProjectDemos.module.css';
import ProjectDemo from './ProjectDemo';
const ProjectDemos = () => {
	return (
		<div className={classes.box}>
			<ProjectDemo
				href="https://klimaswiat.pl/"
				src="/assets/projects/klimaswiat.JPG"
				alt="Klima Świat Home page snippet"
			/>

			<ProjectDemo
				src="/assets/projects/ecofresh.JPG"
				alt="Eco fresh Home page snippet"
				href="https://www.hurtowniaecofresh.pl/"
			/>
		</div>
	);
};

export default ProjectDemos;
