import { useRouter } from 'next/router';
import classes from './SpecialLink.module.css';
const SpecialLink = ({ href, children, span }) => {
	const router = useRouter();
	const handleRouting = () => router.push(href);

	if (span) {
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
