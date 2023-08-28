import { useRouter } from 'next/router';

const ProjectId = () => {
	const router = useRouter();
	const project = router.query.projectId;
	return (
		<section
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '90vh',
				fontSize: '3rem',
				color: 'var(--text-color',
			}}
		>
			<h1>Strona Detail dla projektu {project}</h1>
		</section>
	);
};

export default ProjectId;
