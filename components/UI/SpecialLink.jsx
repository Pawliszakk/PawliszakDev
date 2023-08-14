import Link from 'next/link';
import classes from './SpecialLink.module.css';
const SpecialLink = ({ href, children }) => {
	return (
		<Link href={href} className={classes.link}>
			{children}
		</Link>
	);
};

export default SpecialLink;
