import { ITitle } from '@/app/interfaces/IComponents';
import { FC } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const SelectContainer: FC<ITitle> = props => {
	const { title } = props;
	return (
		<div className='py-1 px-4 border-2 border-zinc-300 rounded-md inline-flex gap-2 text-sm cursor-pointer items-center'>
			<span>{title}</span>
			<span>
				<FaChevronDown />
			</span>
		</div>
	);
};

export default SelectContainer;
