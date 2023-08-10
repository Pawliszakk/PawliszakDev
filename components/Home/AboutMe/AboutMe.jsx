import classes from './AboutMe.module.css';
import Image from 'next/image';
const AboutMe = () => {
	return (
		<section className={classes.aboutMe}>
			<h2 className="section-title">My Skills</h2>
			<div className={classes.container}>
				<div className={classes.animation}>
					<Image
						src="/assets/programmer.gif"
						alt="Programmer coding animation from https://domme.com.br/"
						fill
						priority
						sizes="100%"
					/>
				</div>
                <div className={classes.skills}>
                        
                </div>
			</div>
		</section>
	);
};

export default AboutMe;
