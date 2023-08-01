'use client';

import { useEffect, useState } from 'react';
import { BsArrowUp } from 'react-icons/bs';

const ScrollToTop = () => {
	const [cls, setCls] = useState(`scale-0`);

	useEffect(() => {
		window.addEventListener(`scroll`, () =>
			window.scrollY > 250 ? setCls(`scale-1`) : setCls(`scale-0`),
		);
	}, []);

	return (
		<>
			<button
				className={`${cls} fixed bottom-4 right-4 z-50 cursor-pointer bg-black border-2 border-blue-800 text-white flex justify-center items-center w-8 h-8 rounded-full shadow-lg transition-all ease-in-out duration-300`}
				onClick={() => window.scrollTo({ top: 0, behavior: `smooth` })}>
				<BsArrowUp />
			</button>
		</>
	);
};

export default ScrollToTop;
