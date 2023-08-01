import Container from '../globals/container';
import FooterContent from './footer-content';
import FooterTop from './footer-top';

const Footer = () => {
	return (
		<footer className='px-4 py-8 bg-black text-zinc-100 w-full'>
			<Container>
				<>
					<FooterTop />
					<FooterContent />
				</>
			</Container>
		</footer>
	);
};

export default Footer;
