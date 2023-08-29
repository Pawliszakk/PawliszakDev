import classes from './DecorationSlide.module.css';
import { HiOutlineDeviceMobile } from 'react-icons/hi';
import { TbWorldSearch, TbDeviceMobileHeart } from 'react-icons/tb';
import { ScrollParallax } from 'react-just-parallax';
import Pros from './Pros';
import { useTranslation } from 'react-i18next';

const DecorationSlide = () => {
	const [t, i18n] = useTranslation('global');
	const prosData = [
		{
			icon: <HiOutlineDeviceMobile />,
			title: 'RWD',
			text: t('decorations.first'),
		},
		{
			icon: <TbDeviceMobileHeart />,
			title: 'UI/UX',
			text: t('decorations.second'),
		},
		{
			icon: <TbWorldSearch />,
			title: 'SEO',
			text: t('decorations.third'),
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

			<ScrollParallax isAbsolutelyPositioned>
				<TbWorldSearch className={`${classes.icon} ${classes.iconFirst}`} />
				<TbDeviceMobileHeart
					className={`${classes.icon} ${classes.iconSecond}`}
				/>
			</ScrollParallax>
		</section>
	);
};

export default DecorationSlide;
