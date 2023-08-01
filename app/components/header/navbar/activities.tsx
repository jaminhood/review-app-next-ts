import avatar from '@/app/assets/imgs/avatar.jpg';
import Image from 'next/image';

const Activities = () => {
	return (
		<div className='flex justify-between gap-4 items-center'>
			<div className='w-8 h-8 bg-gray-500 rounded-full border-2 border-zinc-100 overflow-hidden cursor-pointer'>
				<Image
					src={avatar}
					alt='Avatar'
				/>
			</div>
		</div>
	);
};

export default Activities;
