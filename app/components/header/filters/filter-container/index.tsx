import SelectContainer from './select-container';

const FilterContainer = () => {
	return (
		<div className='flex items-center gap-4'>
			<SelectContainer title='Property Type' />
			<SelectContainer title='Price Range' />
			<SelectContainer title='Sort By' />
			<SelectContainer title='State' />
			<SelectContainer title='City' />
		</div>
	);
};

export default FilterContainer;
