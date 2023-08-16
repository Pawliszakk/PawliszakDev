import { useState } from 'react';
import classes from './Skills.module.css';
import AvatarBlob from '../../UI/AvatarBlob';
import LinkButton from '../../UI/buttons/LinkButton';
import useDisplay from '@/hooks/useDisplay';
import SkillsList from './SkillList/SkillsList';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { FaReact } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import SpecialLink from '../../UI/buttons/SpecialLink';
const Skills = () => {
	const [avatar, setAvatar] = useState('/assets/avatarMac.png');
	const handleMouseEnter = () => setAvatar('/assets/avatarLike.png');
	const handleMouseLeave = () => setAvatar('/assets/avatarMac.png');
	const isMobile = useDisplay();

	return (
		<section className={classes.skills}>
			<h2 className="section-title">My Skills</h2>
			<div className={classes.container}>
				<div className={classes.avatar}>
					<AvatarBlob image={avatar} alt="Avatar of pawliszakDev" />
					<p>
						This is my tech stack that I have achieved in my web development
						learning journey. If you want to get to know me better, click on the{' '}
						<span>About Me</span> button below, which will take you to a
						separate subpage about me. If you want to dig deeper into my code,
						check out my{' '}
						<SpecialLink href="https://github.com/Pawliszakk" type="next">
							GitHub
						</SpecialLink>{' '}
						profile
						<ImQuotesLeft className={classes.quoteLeft} />
						<ImQuotesRight className={classes.quoteRight} />
					</p>
				</div>
				<SkillsList />
			</div>
			<div
				className={classes.button}
				onMouseEnter={!isMobile ? handleMouseEnter : null}
				onMouseLeave={!isMobile ? handleMouseLeave : null}
			>
				<LinkButton href="about-me">About Me</LinkButton>
			</div>
			<FaReact className={`${classes.decoration} ${classes.reactIcon}`} />
			<SiNextdotjs className={`${classes.decoration} ${classes.nextIcon}`} />
		</section>
	);
};

export default Skills;
