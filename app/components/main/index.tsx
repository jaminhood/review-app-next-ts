import Forms from './forms';
import Profile from './profile';

const Main = () => {
	return (
		<main className='px-4 bg-zinc-100 text-zinc-800 w-full'>
			<Profile />
			<Forms />
		</main>
	);
};

export default Main;
