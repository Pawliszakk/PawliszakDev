import classes from './AboutText.module.css';

const AboutText = () => {
	return (
		<div className={classes.note}>
			<h2>Notatka o najlepszym programiscie</h2>
			<p>
				With a keen eye for design and user experience, I specialize in
				translating concepts into intuitive and visually appealing interfaces.
				My proficiency extends beyond React, encompassing state management
				libraries like Redux, and a strong grasp of RESTful APIs for seamless
				data integration. Having tackled various projects, I've gained expertise
				in responsive web design to ensure optimal performance across devices.
				Through continuous learning, I stay updated on the latest industry
				trends and best practices, enabling me to deliver modern and
				cutting-edge solutions. Whether it's optimizing performance or crafting
				pixel-perfect layouts, I'm committed to delivering high-quality code
				that elevates the digital experience.
			</p>
		</div>
	);
};

export default AboutText;
