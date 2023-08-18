import classes from './Pros.module.css';
const Pros = ({ header, paragraph, icon }) => {
	return (
		<div className={classes.pros}>
			<h2>
				{icon} {header}
			</h2>
			<p>{paragraph}</p>
		</div>
	);
};

export default Pros;
