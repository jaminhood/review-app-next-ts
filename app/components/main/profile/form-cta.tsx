const FormCTA = () => {
	return (
		<div className='flex justify-between items-center gap-4 pl-12'>
			<button
				type='button'
				className='btn text-blue-800 hover:bg-blue-800 hover:text-white'>
				Cancel
			</button>
			<button
				type='button'
				className='btn bg-blue-800 text-white hover:bg-transparent hover:text-blue-800'>
				Save
			</button>
		</div>
	);
};

export default FormCTA;
