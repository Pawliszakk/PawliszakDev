import Link from 'next/link';
import classes from './LinkButton.module.css';

const LinkButton = ({ href, children }) => {
	return (
		<Link href={href} className={classes.link}>
			{children}
		</Link>
	);
};

export default LinkButton;
