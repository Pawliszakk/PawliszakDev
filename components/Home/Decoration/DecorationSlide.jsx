import classes from './DecorationSlide.module.css';

import Pros from './Pros';
const DecorationSlide = () => {
	return (
		<section className={classes.decoration}>
			<div className={`${classes.block} block`}></div>
			<div className={classes.box}>
				<Pros />
			</div>
		</section>
	);
};

export default DecorationSlide;
