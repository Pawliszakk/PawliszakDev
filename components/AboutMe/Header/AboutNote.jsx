import SectionTitle from '../../UI/SectionComponents/SectionTItle';
import SlideAnimation from '../../UI/Animations/SlideAnimation';
import { useTranslation } from 'react-i18next';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import SpecialLink from '../../UI/Buttons/SpecialLink';
import classes from './AboutNote.module.scss';
import NoteContent from './NoteContent';

const AboutNote = ({ heading }) => {
	return (
		<SlideAnimation left className={classes.note}>
			<SectionTitle className={classes.heading}>{heading}</SectionTitle>

			<NoteContent />
			<ImQuotesLeft className={classes.quoteLeft} />
			<ImQuotesRight className={classes.quoteRight} />
		</SlideAnimation>
	);
};

export default AboutNote;
