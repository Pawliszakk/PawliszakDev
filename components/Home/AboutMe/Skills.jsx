import { useState } from 'react';
import classes from './Skills.module.css';
import Image from 'next/image';
import LinkButton from '../../UI/LinkButton';
import useDisplay from '@/hooks/useDisplay';
import SkillsList from './SkillsList';

const Skills = () => {
	const [avatar, setAvatar] = useState('/assets/avatarMac.png');
	const handleMouseEnter = () => setAvatar('/assets/avatarLike.png');
	const handleMouseLeave = () => setAvatar('/assets/avatarMac.png');
	const isMobile = useDisplay();

	return (
		<section className={classes.Skills}>
			<h2 className="section-title">My Skills</h2>
			<div className={classes.container}>
				<div className={classes.image}>
					<Image src={avatar} fill sizes="100%" />
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
		</section>
	);
};

export default Skills;
