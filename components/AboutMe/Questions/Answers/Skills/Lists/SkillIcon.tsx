import classes from './SkillIcon.module.scss';

interface SkillIconProps {
	icon: {
		icon: JSX.Element;
		type: string;
		text: string;
	};
}

const SkillIcon: React.FC<SkillIconProps> = ({ icon }) => {
	const isRestApi = icon.text === 'RestAPI';

	return (
		<li className={`${classes.item} ${isRestApi ? classes.api : null}`}>
			{icon.icon}{' '}
			<div
				className={`${classes.iconText} ${isRestApi ? classes.apiText : null}`}
			>
				{icon.text}
			</div>
		</li>
	);
};

export default SkillIcon;
