import HeroText from './HeroText';
import AvatarBlob from '../../UI/AvatarBlob';
import SectionHero from '../../UI/SectionComponents/SectionHero';
import classes from './ProjectsHero.module.css';
import SectionBlock from '../../UI/SectionComponents/SectionBlock';
import ScrollToSection from '../../UI/buttons/ScrollToSection';
import SlideAnimation from '../../UI/Animations/SlideAnimation';
const ProjectsHero = () => {
	return (
		<SectionHero classNameHero={classes.hero}>
			<div className={classes.container}>
				{' '}
				<SlideAnimation>
					{' '}
					<AvatarBlob
						image="/assets/avatar/avatarMac.png"
						alt="avatar of pawliszakDev"
						className={classes.blob}
					/>
				</SlideAnimation>
				<SlideAnimation left>
					<HeroText />
				</SlideAnimation>
			</div>
			<ScrollToSection href="#projects" />
			<SectionBlock left className={classes.block} />
		</SectionHero>
	);
};

export default ProjectsHero;
