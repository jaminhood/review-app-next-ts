import { IForm } from '@/app/interfaces/IComponents';
import { FC } from 'react';

const FormContainer: FC<IForm> = props => {
	const { heading, children } = props;
	return (
		<div className='py-8 col-span-2 md:col-span-1'>
			<h2 className='font-semibold text-blue-800'>{heading}</h2>
			{children}
		</div>
	);
};

export default FormContainer;
