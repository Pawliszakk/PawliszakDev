import classes from './DecorationSlide.module.css';

import Pros from './Pros';
const DecorationSlide = () => {
	return (
		<section className={classes.decoration}>
			<div className={classes.box}>
				<Pros />
			</div>
			<div className={`${classes.block} block`}></div>
		</section>
	);
};

export default DecorationSlide;
