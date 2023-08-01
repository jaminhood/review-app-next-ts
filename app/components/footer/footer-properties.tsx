import Link from 'next/link';
import FooterQuickLinks from './footer-quick-links';

const FooterProperties = () => {
	return (
		<FooterQuickLinks heading='Properties'>
			<>
				<li className='text-sm'>
					<Link href='#'>Bungalow</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>Detached Buildings</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>Duplex</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>Mansion</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>Penthouse</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>Serviced Apartment</Link>
				</li>
				<li className='text-sm pt-2'>
					<Link href='#'>Semi-Detached Building</Link>
				</li>
			</>
		</FooterQuickLinks>
	);
};

export default FooterProperties;
