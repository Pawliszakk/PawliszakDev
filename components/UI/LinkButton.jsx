import classes from './LinkButton.module.css';
import { useRouter } from 'next/router';

const LinkButton = ({ href, children }) => {
	const router = useRouter();

	return (
		<button onClick={() => router.push(href)} className={classes.btn}>
			{children}
		</button>
	);
};

export default LinkButton;
