import { useRouter } from 'next/router';
import classes from './SpecialLink.module.css';
const SpecialLink = ({ href, children, button }) => {
	const router = useRouter();
	const handleRouting = () => router.push(href);

	if (button) {
		return (
			<span className={classes.link} onClick={handleRouting}>
				{children}
			</span>
		);
	}

	return (
		<a href={href} target="_blank" className={classes.link}>
			{children}
		</a>
	);
};

export default SpecialLink;
