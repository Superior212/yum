import React from 'react';
import Tab from './Tabs';
import RiderImg from '../../assets/images/ravon2 3.png';
import VendorImg from '../../assets/images/7735061 1.png';

const Earn = () => {
	const tabs = [
		{
			title: 'Earn as a Rider',
			content: (
				<div>
					{/* desktop */}
					<div className="md:flex justify-between items-center hidden">
						<div>
							<img src={RiderImg} alt="" className="h-[27rem] w-[33rem]" />
						</div>
						<div className="px-[8rem]">
							<h1 className="__young_serif text-3xl text-[#003324] ">Deliver and earn money</h1>
							<p className="text-white __ar_one_sans ">
								Be your own boss, make money in the most flexible way <br /> possible with your choice
								of vehicle, Either Bicycle, Car, <br /> Motorcycle or Truck. You are welcome.
							</p>
							<button className="__ar_one_sans __rider_btn">
								Join Our Riders
							</button>
						</div>
					</div>
					{/* mobile */}
					<div className=" justify-between items-center md:hidden">
						<div className="px-[1rem] mb-[4rem]">
							<h1 className="__young_serif  text-2xl text-[#003324] mt-[3rem] mb-1 font-bold">
								Deliver and earn money
							</h1>
							<p className="text-white __ar_one_sans">
								Be your own boss, make money in the most <br /> flexible way possible with your choice
								of <br /> vehicle, Either Bicycle, Car, Motorcycle or <br /> Truck. You are welcome.
							</p>
							<button className="__ar_one_sans __rider_btn">
								Join Our Riders
							</button>
						</div>
						<div>
							<img src={RiderImg} alt="" className="h-[27rem] w-[33rem]" />
						</div>
					</div>
				</div>
			)
		},
		{
			title: 'Earn as a Vendor',
			content: (
				<div>
					{/* desktop */}
					<div className="md:flex justify-between items-center hidden">
						<div>
							<img src={VendorImg} alt="" className="h-[27rem] w-[33rem]" />
						</div>
						<div className="px-[8rem]">
							<h1 className="__young_serif text-3xl text-[#003324] ">
								Create your E-restuarant <br /> with ease.
							</h1>
							<p className="text-white __ar_one_sans ">
								Create a free online presence for your business, reach <br /> more customers, make more
								sales and enjoy the ease <br /> in operating digital restuarant.
							</p>
							<button className="__ar_one_sans __vendor_btn">
								Join Our Vendors
							</button>
						</div>
					</div>
					{/* mobile */}
					<div className=" justify-between items-center md:hidden">
						<div className="px-[1rem] mb-[2rem]">
							<h1 className="__young_serif text-2xl text-[#003324] mt-[3rem] mb-1 font-bold">
								Create your E-restuarant <br /> with ease.
							</h1>
							<p className="text-white __ar_one_sans">
								Create a free online presence for your business, reach more customers, make more
								sales and enjoy the ease  in operating digital restuarant.
							</p>
							<button className="__ar_one_sans __vendor_btn">
								Join Our Vendors
							</button>
						</div>
						<div>
							<img src={VendorImg} alt="" className="h-[27rem] w-[33rem]" />
						</div>
					</div>
				</div>
			)
		}
	];

	return (
		<div className=" pt-[4rem] __earn_bg">
			<h1 className="md:text-4xl text-2xl text-center text-[#013929] __young_serif mb-3">Earn With Yumdash</h1>
			<div>
				<Tab tabs={tabs} />
			</div>
		</div>
	);
};

export default Earn;
