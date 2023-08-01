'use client';

import { FormEvent, useState } from 'react';
import Container from '../../globals/container';
import BasicInfo from './basic-info';
import ContactInfo from './contact-info';
import EmploymentDetails from './employment-details';
import PersonalInfo from './personal-info';

const Forms = () => {
	const [formData, setFormData] = useState({
		username: ``,
		location: ``,
		email: ``,
		phone: ``,
		occupation: ``,
		company: ``,
		marritalStatus: ``,
		sex: ``,
	});

	const handleFormData = (e: FormEvent<HTMLInputElement>) =>
		setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

	return (
		<section>
			<Container>
				<>
					<div className='w-full py-4 md:pl-12'>
						<div className='grid grid-cols-2 gap-20'>
							<BasicInfo
								formData={formData}
								handleFormData={handleFormData}
							/>
							<ContactInfo
								formData={formData}
								handleFormData={handleFormData}
							/>
						</div>
						<div className='grid grid-cols-2 gap-20'>
							<EmploymentDetails
								formData={formData}
								handleFormData={handleFormData}
							/>
							<PersonalInfo
								formData={formData}
								handleFormData={handleFormData}
							/>
						</div>
					</div>
				</>
			</Container>
		</section>
	);
};

export default Forms;
