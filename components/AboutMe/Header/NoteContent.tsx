import { useTranslation } from 'react-i18next';

import SpecialLink from '../../UI/buttons/SpecialLink';

const NoteContent = () => {
	const [t, i18n] = useTranslation('global');

	const lang = i18n.resolvedLanguage;
	return lang === 'en' ? (
		<>
			{' '}
			<p>
				Hello! I'm <span>Oskar Pawliszak</span>, a passionate React front-end
				developer from Zamość, Poland.{' '}
			</p>
			<p>
				My background is website and <span>web application development</span>. I
				love spending time coding and facing new challenges. I've spent
				countless hours on frontend development in the last few months, as my{' '}
				<SpecialLink href="https://github.com/Pawliszakk">GitHub</SpecialLink>{' '}
				profile shows.
			</p>
			<p>
				I am also a graduate of a technical school for{' '}
				<span>computer science</span>, which infected me with a passion for
				programming. As a graduate, I have a background in computer hardware and
				the construction and operation of Internet networks.
			</p>
			<p>
				<span>Outside of programming</span>, I am also involved in fitness in my
				spare time. I am a personal trainer and have been passionate about sport
				since I was a child. Find out more about me by scrolling down this page.
			</p>
		</>
	) : (
		<>
			<p>
				Witaj! Nazywam się <span>Oskar Pawliszak</span>, jestem front-end
				developerem specjalizującym się w react.js z Zamościa
			</p>
			<p>
				Zajmuję się tworzeniem <span>stron i aplikacji internetowych</span>.
				Uwielbiam spędzać czas na programowaniu i podejmowaniu nowych wyzwań. W
				ciągu ostatnich kilkunastu miesięcy spędziłem wiele godzin nad rozwojem
				w świecie front-endu, o czym świadczy między innymi mój profil na{' '}
				<SpecialLink href="https://github.com/Pawliszakk">GitHubie</SpecialLink>
				.
			</p>
			<p>
				Jestem również absolwentem <span>technikum informatycznego</span>, w
				którym zaczęła się rozwijać moja pasja do programowania Jako absolwent
				mam doświadczenie w sprzęcie komputerowym oraz systemach i działaniu
				sieci komputerowych.
			</p>
			<p>
				<span>Poza programowaniem</span>, w wolnym czasie zajmuję się również
				fitnessem. Jestem trenerem personalnym i od dziecka pasjonuję się
				sportem.
			</p>
		</>
	);
};

export default NoteContent;
