import classes from './ProjectsList.module.css';
import SingleProject from './SingleProject';

const ProjectsList = () => {
	return (
		<ul className={classes.list}>
			<SingleProject />
			<SingleProject />
			<SingleProject />
			<SingleProject />
			<SingleProject />
		</ul>
	);
};

export default ProjectsList;
