import classes from './SkillIcon.module.scss';

const SkillIcon = ({ icon }) => {
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
