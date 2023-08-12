import Head from 'next/head';
import Contact from '../../../components/Contact/Contact';

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>PawliszakDev - Contact</title>
				<meta name="description" content="Choose your way to contact me!" />
			</Head>
			<Contact />
		</>
	);
};

export default ContactPage;
