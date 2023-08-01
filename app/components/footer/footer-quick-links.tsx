import { IForm } from '@/app/interfaces/IComponents';
import { FC } from 'react';

const FooterQuickLinks: FC<IForm> = props => {
	const { heading, children } = props;
	return (
		<div className='py-4 col-span-5 md:col-span-1'>
			<h4 className='font-semibold text-blue-800'>{heading}</h4>
			<ul className='py-4'>{children}</ul>
		</div>
	);
};

export default FooterQuickLinks;
