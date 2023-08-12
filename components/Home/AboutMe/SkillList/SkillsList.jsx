import Skill from './Skill';
import classes from './SkillsList.module.css';

const SkillsList = () => {
	return (
		<div className={classes.container}>
			<div className={classes.column}>
				<Skill image="/assets/techStack/html.png" text="HTML5" />
				<Skill image="/assets/techStack/css.png" text="CSS3" />
				<Skill image="/assets/techStack/js.png" text="JS ES6+" />
			</div>
			<div className={classes.column}>
				<Skill image="/assets/techStack/react.png" text="REACT.JS" />
				<Skill image="/assets/techStack/redux.png" text="REDUX" />
				<Skill image="/assets/techStack/next.png" text="NEXT.JS" />
				<Skill image="/assets/techStack/mongo.png" text="MONGODB" />
			</div>
			<div className={classes.column}>
				<Skill image="/assets/techStack/sass.png" text="SASS" />
				<Skill image="/assets/techStack/firebase.png" text="FIREBASE" />
				<Skill image="/assets/techStack/node.png" text="NODE.JS" />
			</div>
		</div>
	);
};

export default SkillsList;
