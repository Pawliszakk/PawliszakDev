import classes from './DecorationSlide.module.css';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { TbWorldSearch, TbDeviceMobileHeart } from 'react-icons/tb';
import Pros from './Pros';
const DecorationSlide = () => {
	const prosData = [
		{
			icon: <HiOutlineDeviceMobile />,
			title: 'RWD',
			text: 'Creating a design that easily adapts to different screen sizes ensures an inclusive and user-friendly experience, increasing accessibility and engagement.',
		},
		{
			icon: <TbDeviceMobileHeart />,
			title: 'UI/UX',
			text: 'Eye-catching designs. Also designed so that people with different technical backgrounds and levels of knowledge can navigate effortlessly.',
		},
		{
			icon: <TbWorldSearch />,
			title: 'SEO',
			text: 'Developing valuable, engaging and original content for search engines requires a blend of creativity and strategic keyword optimisation.',
		},
	];
	return (
		<section className={classes.decoration}>
			<div className={classes.box}>
				{prosData.map((pros, i) => (
					<Pros
						key={pros.title}
						title={pros.title}
						text={pros.text}
						icon={pros.icon}
						index={i}
					/>
				))}
			</div>
		</section>
	);
};

export default DecorationSlide;
