import classes from './Pros.module.css';
import { FaMobileAlt } from 'react-icons/fa';
import { TbWorldSearch, TbDeviceMobileHeart } from 'react-icons/tb';
const Pros = () => {
	return (
		<div className={classes.box}>
			
			<div className={`${classes.pros} ${classes.firstPros}`}>
				<h2>
					<FaMobileAlt /> RWD
				</h2>
				<p>
					Developing a design that easily adapts to different screen sizes
					ensures an inclusive and user-friendly experience, increasing
					accessibility and accessibility and engagement.
				</p>
			</div>
			<div className={`${classes.pros} ${classes.secondPros}`}>
				<h2>
					<TbDeviceMobileHeart /> UI/UX
				</h2>
				<p>
					Designed so that people with different technical backgrounds and
					levels of knowledge can navigate it effortlessly
				</p>
			</div>
			<div className={`${classes.pros} ${classes.thirdPros}`}>
				<h2>
					<TbWorldSearch /> SEO
				</h2>
				<p>
					Creating valuable, engaging and original content for search engines
					requires a blend of creativity and strategic keyword optimisation.
				</p>
			</div>
		</div>
	);
};

export default Pros;
