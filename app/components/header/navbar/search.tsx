import { BiSearch } from 'react-icons/bi';

const Search = () => {
	return (
		<div className='bg-zinc-300 py-1 px-4 rounded-md w-96 overflow-hidden flex items-center'>
			<span>
				<BiSearch />
			</span>
			<input
				type='search'
				placeholder='Search for homes'
				className='bg-transparent text-center focus:outline-none text-sm w-full'
			/>
		</div>
	);
};

export default Search;
