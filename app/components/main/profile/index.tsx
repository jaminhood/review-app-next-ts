import Container from '../../globals/container';
import FormCTA from './form-cta';
import ProfileCover from './profile-cover';
import ProfileInfo from './profile-info';

const Profile = () => {
	return (
		<section className='w-full pt-8'>
			<Container>
				<>
					<ProfileCover />
					<div className='flex justify-between items-start md:items-center flex-col md:flex-row gap-4'>
						<ProfileInfo />
						<FormCTA />
					</div>
				</>
			</Container>
		</section>
	);
};

export default Profile;
