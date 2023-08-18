import classes from './DecorationSlide.module.css';
import { PiGlobeThin } from 'react-icons/pi';

import Pros from './Pros';
const DecorationSlide = () => {
	return (
		<section className={classes.decoration}>
			<Pros />
			<PiGlobeThin className={classes.icon} />
		</section>
	);
};

export default DecorationSlide;
