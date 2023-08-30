import { MouseParallax } from 'react-just-parallax';
import { AiOutlineMail, AiOutlineMessage } from 'react-icons/ai';
import classes from './Icons.module.css';
import useDisplay from '@/hooks/useDisplay';

const Icons = () => {
	const isMobile = useDisplay();
	return (
		<>
			{!isMobile && (
				<>
					<MouseParallax
						enableOnTouchDevice
						isAbsolutelyPositioned
						strength={0.14}
					>
						<AiOutlineMail className={classes.mail} />
						<AiOutlineMessage className={classes.msg} />
					</MouseParallax>
					<MouseParallax
						enableOnTouchDevice
						isAbsolutelyPositioned
						strength={0.25}
					>
						<AiOutlineMail className={classes.msgShadow} />
						<AiOutlineMessage className={classes.mailShadow} />
					</MouseParallax>
				</>
			)}
			{isMobile && (
				<>
					<AiOutlineMail className={classes.mail} />
					<AiOutlineMessage className={classes.msg} />
					<AiOutlineMail className={classes.msgShadow} />
					<AiOutlineMessage className={classes.mailShadow} />
				</>
			)}
		</>
	);
};

export default Icons;
