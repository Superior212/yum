import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt4 } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import YumDash from '../../assets/images/Group12.png';

const NavBar = () => {
	const [ isMenuOpen, setIsMenuOpen ] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	return (
		<div>
			{/* desktop */}
			<nav className=" __navbar_content">
				<Link className="text-white font-bold " to="/">
					<img src={YumDash} alt="" />
				</Link>
				<div className="">
					<Link className="nav__Links" to="/">
						About
					</Link>
					<select className="bg-[#f5e6bd] font-bold mx-0">
						<option className="bg-[#f5e6bd]" value="Customer">
							Customer
						</option>
						<option className="bg-[#f5e6bd]" value="Vendors">
							Vendors
						</option>
						<option className="bg-[#f5e6bd]" value="Riders">
							Riders
						</option>
					</select>
					<Link className="nav__Links" to="/">
						Blogs
					</Link>
					<Link className="nav__Links" to="/">
						FAQs
					</Link>
					<Link className="nav__Links" to="/">
						Contacts
					</Link>
				</div>
				<div>
					<button className="font-bold text-white __nav_button">Order Now</button>
				</div>
			</nav>
			{/* mobile */}
			<nav className="__navbar_sm_content">
				<Link to="/">
					<img src={YumDash} alt="" className="h-rem" />
				</Link>
				<div className="hamburger" onClick={toggleMenu}>
					<HiMenuAlt4 className="h-8 w-8 text-black cursor-pointer" />
				</div>
			</nav>
			<div className="md:hidden">
				{isMenuOpen && (
					<div className="flex flex-col items-start space-y-5 blue-glassmorphism w-full h-screen z-20 absolute top-0 left-0 pt-20">
						<Link className="nav__Links" to="/">
							About
						</Link>
						<select className="bg-transparent font-bold mx-0 text-white">
							<option className="bg-[#f5e6bd] text-black" value="Customer">
								Customer
							</option>
							<option className="bg-[#f5e6bd] text-black" value="Vendors">
								Vendors
							</option>
							<option className="bg-[#f5e6bd] text-black" value="Riders">
								Riders
							</option>
						</select>
						<Link className="nav__Links" to="/">
							Blogs
						</Link>
						<Link className="nav__Links" to="/">
							FAQs
						</Link>
						<Link className="nav__Links" to="/">
							Contacts
						</Link>
						<div>,
							<button className="font-bold text-white __nav_button">Order Now</button>
						</div>
						<div
							onClick={toggleMenu}
							className=" w-10 h-10 rounded-full cursor-pointer absolute top-0 right-3 flex items-center justify-center border-2 border-[#00674B]"
						>
							<AiOutlineClose className="h-8 w-8 text-black cursor-pointer" />
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default NavBar;
