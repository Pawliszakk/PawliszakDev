import Head from 'next/head';
import LoadingSpinner from '../../../components/UI/LoadingSpinner';
import dynamic from 'next/dynamic';
const Contact = dynamic(() => import('../../../components/Contact/Contact'), {
	loading: () => <LoadingSpinner />,
});

const ContactPage = () => {
	return (
		<>
			<Head>
				<title>PawliszakDev - Contact</title>
				<meta
					name="description"
					content="Let's get in touch whether you're looking for a skilled Frontend Developer or simply want to chat about all things tech, I'm just a message away!"
				/>
			</Head>
			<Contact />
		</>
	);
};

export default ContactPage;
