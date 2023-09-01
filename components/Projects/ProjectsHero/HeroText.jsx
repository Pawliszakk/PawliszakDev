import SectionTitle from '../../UI/SectionComponents/SectionTItle';
import classes from './HeroText.module.css';
const HeroText = () => {
	return (
		<div className={classes.text}>
			<SectionTitle className={classes.heading}>Projects</SectionTitle>
			<p>
				Take a look at my work. I create designs that catch the user's eye and
				are suitable for all devices, from mobile phones to large desktop
				monitors. In my portfolio you will find websites, blogs, web
				applications based mainly on technologies around React.js, Next.js and
				MERN Stack for Full-Stack Applications.
			</p>
		</div>
	);
};

export default HeroText;
