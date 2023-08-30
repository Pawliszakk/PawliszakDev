import { useTranslation } from 'react-i18next';
import AvatarBlob from '../../UI/AvatarBlob';
import SectionBlock from '../../UI/SectionBlock';
import SectionTitle from '../../UI/SectionTItle';
import classes from './Contact.module.css';
import LinkButton from '../../UI/buttons/LinkButton';
import Icons from './Icons';

const Contact = () => {
	const [t, i18n] = useTranslation('global');

	return (
		<section className={classes.contact}>
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
					<p>{t('about.contact.text')}</p>
					<LinkButton href="/contact">{t('nav.contact')}</LinkButton>
				</div>
			</div>
			<Icons />
			<SectionBlock footer left />
		</section>
	);
};

export default Contact;
