import SectionTitle from '../../UI/SectionTItle';
import classes from './Roadmap.module.css';
import Timeline from './Timeline';

const Roadmap = () => {
	const roadmapStops = [
		{
			name: 'HTML5/CSS3',
		},
		{
			name: 'SASS/SCSS',
		},
		{
			name: 'JAVASCRIPT ES6+',
		},
		{
			name: 'REACT.JS',
		},
		{
			name: 'NEXT.JS',
		},
		{
			name: 'MERN STACK',
		},
		{
			name: 'NODE.JS',
		},
	];
	return (
		<section id="roadmap" className={classes.roadmap}>
			<SectionTitle>Learning Roadmap</SectionTitle>

			<Timeline stopsList={roadmapStops} />
		</section>
	);
};

export default Roadmap;
