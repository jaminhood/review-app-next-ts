import Link from 'next/link';
import FooterQuickLinks from './footer-quick-links';

const FooterAboutUs = () => {
	return (
		<FooterQuickLinks heading='About Us'>
			<>
				<li className='text-sm'>
					<Link href='#'>About Us</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>Features</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>News & Blog</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>Projects</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>Partnerships</Link>
				</li>
			</>
		</FooterQuickLinks>
	);
};

export default FooterAboutUs;
