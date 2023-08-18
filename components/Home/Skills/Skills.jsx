import { useState } from 'react';
import classes from './Skills.module.css';

import LinkButton from '../../UI/buttons/LinkButton';
import useDisplay from '@/hooks/useDisplay';
import SkillsList from './SkillList/SkillsList';

import Decorations from './Decorations';
import Avatar from './Avatar/Avatar';
import SectionTitle from '../../UI/SectionTItle';
const Skills = () => {
	const [avatar, setAvatar] = useState('/assets/avatar/avatarMac.png');
	const handleMouseEnter = () => setAvatar('/assets/avatar/avatarLike.png');
	const handleMouseLeave = () => setAvatar('/assets/avatar/avatarMac.png');
	const isMobile = useDisplay();

	return (
		<section className={classes.skills}>
			<SectionTitle>My Skills</SectionTitle>
			<div className={classes.container}>
				<Avatar avatar={avatar} />
				<SkillsList />
			</div>
			<div
				className={classes.button}
				onMouseEnter={!isMobile ? handleMouseEnter : null}
				onMouseLeave={!isMobile ? handleMouseLeave : null}
			>
				<LinkButton href="about-me">About Me</LinkButton>
			</div>
			<Decorations />
			<div className={`${classes.block} block`}></div>
		</section>
	);
};

export default Skills;
