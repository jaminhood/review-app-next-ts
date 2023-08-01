import Link from 'next/link';
import FooterQuickLinks from './footer-quick-links';

const FooterSupportChannels = () => {
	return (
		<FooterQuickLinks heading='Support Channels'>
			<>
				<li className='text-sm'>
					<Link href='#'>Twitter</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>Instagram</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>Facebook</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>Whatsapp</Link>
				</li>
			</>
		</FooterQuickLinks>
	);
};

export default FooterSupportChannels;
