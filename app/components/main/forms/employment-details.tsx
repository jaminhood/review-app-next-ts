import { IFormContainer } from '@/app/interfaces/IComponents';
import { FC } from 'react';
import FormContainer from './form-container';
import FormInput from './form-input';

const EmploymentDetails: FC<IFormContainer> = props => {
	const { formData, handleFormData } = props;
	return (
		<FormContainer heading='Employment Details'>
			<>
				<FormInput
					label='Occupation'
					id='occupation'
					value={formData.occupation}
					placeholder='Product Designer'
					handleInput={handleFormData}
				/>
				<FormInput
					label='Company'
					id='company'
					value={formData.company}
					placeholder='Tesla'
					handleInput={handleFormData}
				/>
			</>
		</FormContainer>
	);
};

export default EmploymentDetails;
