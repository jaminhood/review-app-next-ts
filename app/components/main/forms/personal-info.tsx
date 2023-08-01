import { IFormContainer } from '@/app/interfaces/IComponents';
import { FC } from 'react';
import FormContainer from './form-container';
import FormInput from './form-input';

const PersonalInfo: FC<IFormContainer> = props => {
	const { formData, handleFormData } = props;
	return (
		<FormContainer heading='Employment Details'>
			<>
				<FormInput
					label='Marital Status'
					id='marritalStatus'
					value={formData.marritalStatus}
					placeholder='Married'
					handleInput={handleFormData}
				/>
				<FormInput
					label='Sex'
					id='sex'
					value={formData.sex}
					placeholder='Male'
					handleInput={handleFormData}
				/>
			</>
		</FormContainer>
	);
};

export default PersonalInfo;
