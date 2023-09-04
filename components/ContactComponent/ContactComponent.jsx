import { useTranslation } from 'react-i18next';
import classes from './ContactComponent.module.scss';
import Icons from './Icons';
import AvatarBlob from '../UI/AvatarBlob';
import SectionBlock from '../UI/SectionComponents/SectionBlock';
import SectionTitle from '../UI/SectionComponents/SectionTItle';
import LinkButton from '../UI/buttons/LinkButton';

const ContactComponent = ({ message, home }) => {
	const [t, i18n] = useTranslation('global');

	return (
		<section className={`${classes.contact} ${home ? classes.home : null} `}>
			<SectionTitle className={classes.heading}>
				{t('about.contact.heading')}
			</SectionTitle>
			<div className={classes.box}>
				<AvatarBlob
					image="/assets/avatar/avatarBlink.png"
					alt="blinking avatar of pawliszakdev"
					className={classes.blob}
				/>
				<div className={classes.text}>
					<p>{message}</p>
					<LinkButton href="/contact">{t('nav.contact')}</LinkButton>
				</div>
			</div>
			<Icons />
			<SectionBlock footer left />
		</section>
	);
};

export default ContactComponent;
