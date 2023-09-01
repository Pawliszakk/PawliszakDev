import HeroText from './HeroText';
import AvatarBlob from '../../UI/AvatarBlob';
import SectionHero from '../../UI/SectionComponents/SectionHero';
import classes from './ProjectsHero.module.css';
import SectionBlock from '../../UI/SectionComponents/SectionBlock';
import ScrollToSection from '../../UI/buttons/ScrollToSection';
const ProjectsHero = () => {
	return (
		<SectionHero classNameHero={classes.hero}>
			<div className={classes.container}>
				{' '}
				<AvatarBlob
					image="/assets/avatar/avatarMac.png"
					alt="avatar of pawliszakDev"
					className={classes.blob}
				/>
				<HeroText />
			</div>
			<ScrollToSection href="#projects" />
			<SectionBlock left className={classes.block} />
		</SectionHero>
	);
};

export default ProjectsHero;
