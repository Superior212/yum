import { AiFillApple } from 'react-icons/ai';
import { BsGooglePlay } from 'react-icons/bs';
import Side from '../../assets/images/side.png';

const DownloadContent = () => {
	return (
		<div className="md:h-[90vh] md:flex items-center md:justify-evenly">
			<div>
				<h1 className="text-[#C20143] __young_serif pt-12 md:pt-0 md:mx-0 mx-12">
					{' '}
					<span className="__line" /> Download our app today <span className="__line" />{' '}
				</h1>

				<h1 className="md:text-5xl text-3xl md:mx-0 mx-10 text-[#014734] font-bold __young_serif mt-5">
					Get personalized <br /> experience
				</h1>

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
			<div className='mt-[3rem]'>
				<img src={Side} alt=""  className='md:h-[25rem]'/>
			</div>
		</div>
	);
};

export default DownloadContent;
