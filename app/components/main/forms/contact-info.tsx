import { IFormContainer } from '@/app/interfaces/IComponents';
import { FC } from 'react';
import FormContainer from './form-container';
import FormInput from './form-input';

const ContactInfo: FC<IFormContainer> = props => {
	const { formData, handleFormData } = props;
	return (
		<FormContainer heading='Contact Information'>
			<>
				<FormInput
					label='Email Address'
					id='email'
					value={formData.email}
					placeholder='olaoluwaagiri15@gmail.com'
					handleInput={handleFormData}
				/>
				<FormInput
					label='Phone No'
					id='phone'
					value={formData.phone}
					placeholder='+ (012) 345 6789'
					handleInput={handleFormData}
				/>
			</>
		</FormContainer>
	);
};

export default ContactInfo;
