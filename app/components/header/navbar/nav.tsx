// import { INavLink } from '@/app/interfaces/IComponents';
import Link from 'next/link';

const Nav = () => {
	return (
		<div className=''>
			<ul className='flex justify-between items-center gap-4'>
				<li className='text-sm pt-2 font-medium'>
					<Link
						href='/'
						className={`relative pb-4 transition-all ease-in-out duration-300 before:absolute before:content-[''] before:bottom-0 before:left-1 before:right-1 before:transform before:scale-1 before:h-1 before:bg-blue-800`}>
						Lease
					</Link>
				</li>
				<li className='text-sm pt-2 font-medium'>
					<Link
						href='#'
						className={`relative pb-4 transition-all ease-in-out duration-300 before:absolute before:content-[''] before:bottom-0 before:left-1 before:right-1 before:transform before:scale-0 hover:before:scale-1 before:h-1 before:bg-blue-800`}>
						Sell
					</Link>
				</li>
				<li className='text-sm pt-2 font-medium'>
					<Link
						href='#'
						className={`relative pb-4 transition-all ease-in-out duration-300 before:absolute before:content-[''] before:bottom-0 before:left-1 before:right-1 before:transform before:scale-0 hover:before:scale-1 before:h-1 before:bg-blue-800`}>
						Rent
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
