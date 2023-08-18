import classes from './DecorationSlide.module.css';
import { PiGlobeThin } from 'react-icons/pi';

import Pros from './Pros';
const DecorationSlide = () => {
	return (
		<section className={classes.decoration}>
			<div className={classes.wave}></div>

			<div className={classes.box}>
				<Pros />
			</div>
			<PiGlobeThin className={classes.icon} />
			<div className={`${classes.block} block`}></div>
		</section>
	);
};

export default DecorationSlide;
