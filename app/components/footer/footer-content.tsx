import FooterDesign from './footer-design';
import FooterProperties from './footer-properties';
import FooterAboutUs from './footer-about-us';
import FooterSupportChannels from './footer-support-channels';

const FooterContent = () => {
	return (
		<>
			<div className='grid grid-cols-5'>
				<div className='hidden md:flex items-end'>
					<FooterDesign />
				</div>
				<FooterAboutUs />
				<FooterProperties />
				<FooterSupportChannels />
				<div className='flex md:hidden items-end justify-end col-span-5'>
					<FooterDesign />
				</div>
			</div>
		</>
	);
};

export default FooterContent;
