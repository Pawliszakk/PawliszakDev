import classes from './SectionBlock.module.scss';

interface SectionBlockProps {
	className?: string;
	left?: boolean;
	footer?: boolean;
}

const SectionBlock: React.FC<SectionBlockProps> = ({
	className,
	left,
	footer,
}) => {
	let direction;
	left ? (direction = classes.left) : (direction = classes.right);

	return (
		<div
			className={`${classes.block} ${className} ${direction} ${
				footer ? classes.footer : null
			}`}
		></div>
	);
};

export default SectionBlock;
