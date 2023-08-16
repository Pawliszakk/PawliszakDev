import classes from './DecorationSlide.module.css';

const DecorationSlide = () => {
	return (
		<section className={classes.decoration}>
			<div className={classes.box}>
				<div className={classes.pros}>
					<h2>RWD</h2>
					<p>Design suitable for both mobile devices and desktop computers</p>
				</div>
				<div className={classes.pros}>
					<h2>UI/UX</h2>
					<p>
						Designed so that people with different technical backgrounds and
						levels of knowledge can navigate it effortlessly.
					</p>
				</div>
				<div className={classes.pros}>
					<h2>SEO</h2>
					<p>
						Creating valuable, engaging and unique content for search engines
					</p>
				</div>
			</div>
		</section>
	);
};

export default DecorationSlide;
