import classes from './DecorationSlide.module.css';
import { FaMobileAlt } from 'react-icons/fa';
import { TbWorldSearch, TbDeviceMobileHeart } from 'react-icons/tb';
const DecorationSlide = () => {
	return (
		<section className={classes.decoration}>
			<div className={classes.box}>
				<div className={classes.pros}>
					<h2>
						<FaMobileAlt /> RWD
					</h2>
					<p>
						Developing a design that effortlessly adapts to various screen sizes
						ensures an inclusive and user-friendly experience, enhancing
						accessibility and engagement.
					</p>
				</div>
				<div className={classes.pros}>
					<h2>
						<TbDeviceMobileHeart /> UI/UX
					</h2>
					<p>
						Designed so that people with different technical backgrounds and
						levels of knowledge can navigate it effortlessly.
					</p>
				</div>
				<div className={classes.pros}>
					<h2>
						<TbWorldSearch /> SEO
					</h2>
					<p>
						Creating valuable, engaging, and original content for search engines
						requires a blend of creativity and strategic keyword optimization.
					</p>
				</div>
			</div>
		</section>
	);
};

export default DecorationSlide;
