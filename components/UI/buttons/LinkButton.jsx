import classes from './LinkButton.module.css';
import { useRouter } from 'next/router';

const LinkButton = ({ href, children, className, anchor, nav }) => {
	const relAttr = nav ? null : 'noopener';
	const targetAttr = nav ? null : '_blank';
	const router = useRouter();

	if (anchor) {
		return (
			<a className={classes.btn} href={href} rel={relAttr} target={targetAttr}>
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
