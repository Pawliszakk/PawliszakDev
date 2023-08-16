import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { RiJavascriptFill } from 'react-icons/ri';

import classes from './Decorations.module.css';

const Decorations = () => {
	return (
		<>
			<FaReact className={`${classes.decoration} ${classes.reactIcon}`} />
			<SiNextdotjs className={`${classes.decoration} ${classes.nextIcon}`} />
			<RiJavascriptFill className={`${classes.decoration} ${classes.jsIcon}`} />
		</>
	);
};

export default Decorations;
