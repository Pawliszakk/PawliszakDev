import classes from './DecorationSlide.module.css';
import { FaMobileAlt } from 'react-icons/fa';
import { TbWorldSearch, TbDeviceMobileHeart } from 'react-icons/tb';
import Pros from './Pros';
const DecorationSlide = () => {
	const prosData = [
		{
			icon: <FaMobileAlt />,
			header: 'RWD',
			paragraph:
				'Developing a design that easily adapts to different screen sizes ensures an inclusive and user-friendly experience, increasing accessibility and engagement.',
		},
		{
			icon: <TbDeviceMobileHeart />,
			header: 'UI/UX',
			paragraph:
				'Designed so that people with different technical backgrounds and levels of knowledge can navigate it effortlessly',
		},
		{
			icon: <TbWorldSearch />,
			header: 'SEO',
			paragraph:
				'Creating valuable, engaging and original content for search engines requires a blend of creativity and strategic keyword optimisation.',
		},
	];
	const prosComponents = prosData.map((item, index) => (
		<Pros
			key={index}
			icon={item.icon}
			header={item.header}
			paragraph={item.paragraph}
		/>
	));
	return (
		<section className={classes.decoration}>
			<div className={`${classes.block} block`}></div>
			<div className={classes.box}>{prosComponents}</div>
		</section>
	);
};

export default DecorationSlide;
