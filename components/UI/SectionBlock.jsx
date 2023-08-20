import classes from './SectionBlock.module.css';

const SectionBlock = ({ className, left }) => {
	let direction;
	left ? (direction = classes.left) : (direction = classes.right);

	return <div className={`${classes.block} ${className} ${direction}`}></div>;
};

export default SectionBlock;
