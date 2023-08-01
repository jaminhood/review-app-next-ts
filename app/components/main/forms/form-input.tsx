'use client';

import { IFormInput } from '@/app/interfaces/IComponents';
import { FC } from 'react';

const FormInput: FC<IFormInput> = props => {
	const { label, id, value, placeholder, handleInput } = props;
	return (
		<div className='w-full'>
			<label
				htmlFor={id}
				className='cursor-pointer font-semibold pt-4 block'>
				{label}
			</label>
			<input
				type='text'
				id={id}
				className='w-full py-2 px-4 rounded-md focus:outline-none bg-transparent border border-black text-black mb-6'
				name={id}
				value={value}
				placeholder={placeholder}
				onInput={handleInput}
			/>
		</div>
	);
};

export default FormInput;
