import Container from '../../globals/container';
import FilterContainer from './filter-container';

const Filters = () => {
	return (
		<section className='w-full'>
			<Container>
				<>
					<div className='flex justify-between'>
						<FilterContainer />
						<button
							type='button'
							className='btn bg-blue-800 text-white hover:bg-transparent hover:text-blue-800'>
							Map View
						</button>
					</div>
				</>
			</Container>
		</section>
	);
};

export default Filters;
