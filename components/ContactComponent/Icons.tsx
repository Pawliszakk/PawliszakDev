import { MouseParallax } from 'react-just-parallax';

import { AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';
import classes from './Icons.module.scss';

const Icons = () => {
	return (
		<>
			<MouseParallax isAbsolutelyPositioned strength={0.03}>
				<AiOutlineMail className={classes.mail} />
				<AiOutlineMessage className={classes.msg} />
			</MouseParallax>
			<MouseParallax isAbsolutelyPositioned strength={0.07}>
				<AiOutlineMail className={classes.msgShadow} />
				<AiOutlineMessage className={classes.mailShadow} />
			</MouseParallax>
		</>
	);
};

export default Icons;
