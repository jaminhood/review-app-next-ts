import flag from '@/app/assets/imgs/flag.jpg';
import Image from 'next/image';

const ProfileInfo = () => {
	return (
		<div className='px-12 pt-4'>
			<h2 className='font-bold text-2xl capitalize'>Olaoluwa Agiri</h2>
			<p className='font-light mt-4 text-blue-600 text-base capitalize'>
				Lagos, Nigeria{' '}
				<span className='w-4 overflow-hidden inline-block rounded-md'>
					<Image
						src={flag}
						alt='Flag'
						className='w-full'
					/>
				</span>
			</p>
		</div>
	);
};

export default ProfileInfo;
