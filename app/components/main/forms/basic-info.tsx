import { IFormContainer } from '@/app/interfaces/IComponents';
import { FC } from 'react';
import FormContainer from './form-container';
import FormInput from './form-input';

const BasicInfo: FC<IFormContainer> = props => {
	const { formData, handleFormData } = props;
	return (
		<FormContainer heading='Basic Information'>
			<>
				<FormInput
					label='Username'
					id='username'
					value={formData.username}
					placeholder='Olaoluwa Agiri'
					handleInput={handleFormData}
				/>
				<FormInput
					label='Location'
					id='location'
					value={formData.location}
					placeholder='Lagos'
					handleInput={handleFormData}
				/>
			</>
		</FormContainer>
	);
};

export default BasicInfo;
