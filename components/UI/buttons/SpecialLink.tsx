import { useRouter } from 'next/router';
import classes from './SpecialLink.module.scss';
import { ReactNode } from 'react';

interface SpecialLinkProps {
	href: string;
	children: ReactNode;
	span?: boolean;
}

const SpecialLink: React.FC<SpecialLinkProps> = ({ href, children, span }) => {
	const router = useRouter();
	const handleRouting = () => router.push(href);

	if (span) {
		return (
			<span className={classes.link} onClick={handleRouting}>
				{children}
			</span>
		);
	}

	return (
		<a href={href} target="_blank" rel="noopener" className={classes.link}>
			{children}
		</a>
	);
};

export default SpecialLink;
