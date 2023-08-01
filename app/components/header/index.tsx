import Navbar from './navbar';
import Filters from './filters';

const Header = () => {
	return (
		<header className='px-4 py-2 bg-zinc-100 text-zinc-800 w-full'>
			<Navbar />
			<Filters />
		</header>
	);
};

export default Header;
