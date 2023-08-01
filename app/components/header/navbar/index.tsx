import Container from '../../globals/container';
import Activities from './activities';
import Nav from './nav';
import Search from './search';

const Navbar = () => {
	return (
		<nav className='w-full py-6'>
			<Container>
				<>
					<div className='flex justify-between items-center'>
						<h3 className='uppercase font-bold text-3xl'>LOGO.</h3>
						<Nav />
						<Search />
						<Activities />
					</div>
				</>
			</Container>
		</nav>
	);
};

export default Navbar;
