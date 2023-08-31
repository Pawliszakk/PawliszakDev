import SectionTitle from '../../UI/SectionTItle';
import SlideAnimation from '../../UI/SlideAnimation';
import classes from './AboutNote.module.css';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const AboutNote = ({ heading }) => {
	return (
		<SlideAnimation left className={classes.note}>
			<SectionTitle className={classes.heading}>{heading}</SectionTitle>

			<p>
				Hello! I'm Oskar Pawliszak, a passionate React front-end developer from
				Zamość, Poland.{' '}
			</p>
			<p>
				I've found my passion in web development. I love spending time coding
				and facing new challenges. I've spent countless hours on frontend
				development in the last few months, as my Github profile shows.
			</p>
			<p>
				I am also a graduate of a technical school for computer science, which
				infected me with a passion for programming. As a graduate, I have a
				background in computer hardware and the construction and operation of
				Internet networks.
			</p>
			<p>
				Outside of programming, I am also involved in fitness in my spare time.
				I am a personal trainer and have been passionate about sport since I was
				a child. Find out more about me by scrolling down this page.
				<ImQuotesLeft className={classes.quoteLeft} />
				<ImQuotesRight className={classes.quoteRight} />
			</p>
		</SlideAnimation>
	);
};

export default AboutNote;
/*With a keen eye for design and user experience, I specialize in
				translating concepts into intuitive and visually appealing interfaces.
				My proficiency extends beyond React, encompassing state management
				libraries like Redux, and a strong grasp of RESTful APIs for seamless
				data integration. Having tackled various projects, I've gained expertise
				in responsive web design to ensure optimal performance across devices.
				Through continuous learning, I stay updated on the latest industry
				trends and best practices, enabling me to deliver modern and
				cutting-edge solutions. Whether it's optimizing performance or crafting
				pixel-perfect layouts, I'm committed to delivering high-quality code
				that elevates the digital experience. */
