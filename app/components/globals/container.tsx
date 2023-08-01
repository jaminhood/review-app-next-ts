import { IChildren } from '@/app/interfaces/IComponents';
import { FC } from 'react';

const Container: FC<IChildren> = props => {
	const { children } = props;
	return <div className='w-full max-w-6xl px-4 mx-auto'>{children}</div>;
};

export default Container;
