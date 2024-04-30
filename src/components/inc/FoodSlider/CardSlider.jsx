import Food1 from '../../../assets/images/Ellipse3.png';
import Food2 from '../../../assets/images/Ellipse1.png';
import Food3 from '../../../assets/images/Ellipse2.png';
import Food4 from '../../../assets/images/Ellipse4.png';
import Food5 from '../../../assets/images/Ellipse5.png';
import './foodslider.css';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const CardSlider = () => {
	return (
		<div>
			<div className="slider">
				<div className="slider-track gap-4">
					{/* first card */}
					<div className="__card1 mt-[4rem]">
						<div className="slide">
							<img src={Food1} alt="" className="h-[15rem] " />
							<div className="p-3">
								<div>
									<h1 className="__young_serif text-2xl font-bold">Mimi’s place</h1>
									<p className="__ar_one_sans text-sm mt-3 flex items-center justify-center gap-3 font-bold">
										<HiOutlineLocationMarker className="bg-white rounded-full p-1 text-2xl" />
										107 Wetheral Rd., Owerri 460211 Nigeria.
									</p>
								</div>
								<div className="__stars_content flex items-center justify-center gap-1 mt-3">
									<div className="__stars flex">
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiOutlineStar className="text-gray-500" />
									</div>
									<div>
										<p className="__ar_one_sans">
											4.5/ <span className="underline">23 reviews</span>{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="__card2">
						<div className="slide">
							<img src={Food2} alt="" className="h-[15rem]" />
							<div className="p-3">
								<div>
									<h1 className="__young_serif text-2xl font-bold">Femi’s court</h1>
									<p className="__ar_one_sans text-sm mt-3 flex items-center justify-center gap-3 font-bold">
										<HiOutlineLocationMarker className="bg-white rounded-full p-1 text-2xl" />
										107 Wetheral Rd., Owerri 460211 Nigeria.
									</p>
								</div>
								<div className="__stars_content flex items-center justify-center gap-1 mt-3">
									<div className="__stars flex">
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiOutlineStar className="text-gray-500" />
									</div>
									<div>
										<p className="__ar_one_sans">
											4.5/ <span className="underline">23 reviews</span>{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="__card3  mt-[4rem]">
						<div className="slide">
							<img src={Food3} alt="" />
							<div className="p-3">
								<div>
									<h1 className="__young_serif text-2xl font-bold">Sunic food</h1>
									<p className="__ar_one_sans text-sm mt-3 flex items-center justify-center gap-3 font-bold">
										<HiOutlineLocationMarker className="bg-white rounded-full p-1 text-2xl" />
										107 Wetheral Rd., Owerri 460211 Nigeria.
									</p>
								</div>
								<div className="__stars_content flex items-center justify-center gap-1 mt-3">
									<div className="__stars flex">
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiOutlineStar className="text-gray-500" />
									</div>
									<div>
										<p className="__ar_one_sans">
											4.5/ <span className="underline">23 reviews</span>{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="__card4">
						<div className="slide">
							<img src={Food4} alt="" className="h-[15rem]" />
							<div className="p-3">
								<div>
									<h1 className="__young_serif text-2xl font-bold">Wideplains</h1>
									<p className="__ar_one_sans text-sm mt-3 flex items-center justify-center gap-3 font-bold">
										<HiOutlineLocationMarker className="bg-white rounded-full p-1 text-2xl" />
										107 Wetheral Rd., Owerri 460211 Nigeria.
									</p>
								</div>
								<div className="__stars_content flex items-center justify-center gap-1 mt-3">
									<div className="__stars flex">
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiOutlineStar className="text-gray-500" />
									</div>
									<div>
										<p className="__ar_one_sans">
											4.5/ <span className="underline">23 reviews</span>{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="__card5 mt-[2rem]">
						<div className="slide">
							<img src={Food5} alt="" className="h-[15rem]" />
							<div className="p-3">
								<div>
									<h1 className="__young_serif text-2xl font-bold">The Hive</h1>
									<p className="__ar_one_sans text-sm mt-3 flex items-center justify-center gap-3 font-bold">
										<HiOutlineLocationMarker className="bg-white rounded-full p-1 text-2xl" />
										107 Wetheral Rd., Owerri 460211 Nigeria.
									</p>
								</div>
								<div className="__stars_content flex items-center justify-center gap-1 mt-3">
									<div className="__stars flex">
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiOutlineStar className="text-gray-500" />
									</div>
									<div>
										<p className="__ar_one_sans">
											4.5/ <span className="underline">23 reviews</span>{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* Second Card */}
					<div className="__card1 mt-[4rem]">
						<div className="slide">
							<img src={Food1} alt="" className="h-[15rem] " />
							<div className="p-3">
								<div>
									<h1 className="__young_serif text-2xl font-bold">Mimi’s place</h1>
									<p className="__ar_one_sans text-sm mt-3 flex items-center justify-center gap-3 font-bold">
										<HiOutlineLocationMarker className="bg-white rounded-full p-1 text-2xl" />
										107 Wetheral Rd., Owerri 460211 Nigeria.
									</p>
								</div>
								<div className="__stars_content flex items-center justify-center gap-1 mt-3">
									<div className="__stars flex">
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiOutlineStar className="text-gray-500" />
									</div>
									<div>
										<p className="__ar_one_sans">
											4.5/ <span className="underline">23 reviews</span>{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="__card2">
						<div className="slide">
							<img src={Food2} alt="" className="h-[15rem]" />
							<div className="p-3">
								<div>
									<h1 className="__young_serif text-2xl font-bold">Femi’s court</h1>
									<p className="__ar_one_sans text-sm mt-3 flex items-center justify-center gap-3 font-bold">
										<HiOutlineLocationMarker className="bg-white rounded-full p-1 text-2xl" />
										107 Wetheral Rd., Owerri 460211 Nigeria.
									</p>
								</div>
								<div className="__stars_content flex items-center justify-center gap-1 mt-3">
									<div className="__stars flex">
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiOutlineStar className="text-gray-500" />
									</div>
									<div>
										<p className="__ar_one_sans">
											4.5/ <span className="underline">23 reviews</span>{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="__card3  mt-[4rem]">
						<div className="slide">
							<img src={Food3} alt="" />
							<div className="p-3">
								<div>
									<h1 className="__young_serif text-2xl font-bold">Sunic food</h1>
									<p className="__ar_one_sans text-sm mt-3 flex items-center justify-center gap-3 font-bold">
										<HiOutlineLocationMarker className="bg-white rounded-full p-1 text-2xl" />
										107 Wetheral Rd., Owerri 460211 Nigeria.
									</p>
								</div>
								<div className="__stars_content flex items-center justify-center gap-1 mt-3">
									<div className="__stars flex">
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiOutlineStar className="text-gray-500" />
									</div>
									<div>
										<p className="__ar_one_sans">
											4.5/ <span className="underline">23 reviews</span>{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="__card4">
						<div className="slide">
							<img src={Food4} alt="" className="h-[15rem]" />
							<div className="p-3">
								<div>
									<h1 className="__young_serif text-2xl font-bold">Wideplains</h1>
									<p className="__ar_one_sans text-sm mt-3 flex items-center justify-center gap-3 font-bold">
										<HiOutlineLocationMarker className="bg-white rounded-full p-1 text-2xl" />
										107 Wetheral Rd., Owerri 460211 Nigeria.
									</p>
								</div>
								<div className="__stars_content flex items-center justify-center gap-1 mt-3">
									<div className="__stars flex">
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiOutlineStar className="text-gray-500" />
									</div>
									<div>
										<p className="__ar_one_sans">
											4.5/ <span className="underline">23 reviews</span>{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="__card5 mt-[2rem]">
						<div className="slide">
							<img src={Food5} alt="" className="h-[15rem]" />
							<div className="p-3">
								<div>
									<h1 className="__young_serif text-2xl font-bold">The Hive</h1>
									<p className="__ar_one_sans text-sm mt-3 flex items-center justify-center gap-3 font-bold">
										<HiOutlineLocationMarker className="bg-white rounded-full p-1 text-2xl" />
										107 Wetheral Rd., Owerri 460211 Nigeria.
									</p>
								</div>
								<div className="__stars_content flex items-center justify-center gap-1 mt-3">
									<div className="__stars flex">
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiFillStar className="text-yellow-300" />
										<AiOutlineStar className="text-gray-500" />
									</div>
									<div>
										<p className="__ar_one_sans">
											4.5/ <span className="underline">23 reviews</span>{' '}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardSlider;
