import FooterDesign from './footer-design';

const FooterTop = () => {
	return (
		<div className='flex justify-between py-4'>
			<div className='py-4'>
				<h3 className='uppercase font-bold text-3xl flex items-center'>
					<span className='w-16 h-[.1rem] mr-4 block bg-blue-800'></span>
					LOGO.
				</h3>
				<p className='font-normal text-base pt-8 max-w-[24rem w-full'>
					Our Vision is to provide people with a safe-haven at the best prices
				</p>
			</div>
			<FooterDesign />
		</div>
	);
};

export default FooterTop;
