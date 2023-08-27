import classes from './LinkButton.module.css';
import { useRouter } from 'next/router';

const LinkButton = ({ href, children, className, anchor }) => {
	const router = useRouter();
	if (anchor) {
		return (
			<a className={classes.btn} href={href} rel="noopener">
				{children}
			</a>
		);
	}
	return (
		<button
			onClick={() => router.push(href)}
			className={`${classes.btn} ${className}`}
		>
			{children}
		</button>
	);
};

export default LinkButton;
