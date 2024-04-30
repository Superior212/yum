import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { BsGooglePlay } from 'react-icons/bs';

const Wavyline = () => {
	return (
		<div>
			<div className="__main_wavy" />
			<div className="__wavyline items-center justify-center ">
				<div className="md:px-[23rem] text-center md:pt-[8rem]">
					<h1 className="__ar_one_sans">
						we've curated an exceptional selection of restaurants that are guaranteed to delight your taste
						buds. From savory to sweet, from local favorites to international cuisine, we've got it all!.
					</h1>
				</div>
				<div className="items-center justify-center text-center mt-5 block md:flex">
					<button className="__download_btn1 __ar_one_sans mr-3 text-white flex">
						{' '}
						<AiFillApple className="text-2xl ml-2" />
						Download on Appstore
					</button>
					<button className="__download_btn2 __ar_one_sans flex">
						{' '}
						<BsGooglePlay className="text-2xl ml-2"/> Download on Googleplay
					</button>
				</div>
			</div>
		</div>
	);
};

export default Wavyline;
