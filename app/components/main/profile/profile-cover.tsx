import avatar from '@/app/assets/imgs/avatar.jpg';
import Image from 'next/image';
import { AiOutlineCamera } from 'react-icons/ai';

const ProfileCover = () => {
	return (
		<div className='w-full'>
			<div className='p-16 bg-gradient-to-r from-blue-900 to-yellow-500 via-blue-500 rounded-2xl'></div>
			<div className='-mt-8 px-12 flex items-end gap-2'>
				<div className='w-16 h-16 bg-gray-500 rounded-full border-2 border-zinc-100 overflow-hidden'>
					<Image
						src={avatar}
						alt='Avatar'
					/>
				</div>
				<AiOutlineCamera />
			</div>
		</div>
	);
};

export default ProfileCover;
