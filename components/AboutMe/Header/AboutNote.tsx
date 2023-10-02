import SectionTitle from '../../UI/SectionComponents/SectionTItle';
import SlideAnimation from '../../UI/Animations/SlideAnimation';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import classes from './AboutNote.module.scss';
import NoteContent from './NoteContent';

interface AboutNoteProps {
	heading: string;
}

const AboutNote: React.FC<AboutNoteProps> = ({ heading }) => {
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
