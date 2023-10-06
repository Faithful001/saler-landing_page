import { Link } from "react-scroll";
import { useState } from "react";

const NavBar = () => {
	let links = [
		{ name: "Features", link: "features" },
		{ name: "How It Works", link: "howitworks" },
		{ name: "Gallery", link: "gallery" },
		{ name: "Pricing", link: "Pricing" },
	];

	// const [hamburger, setHamburger] = useState<boolean>(true);
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className="navbar bg-white px-20">
			<div className="section flex justify-between items-center">
				<div className="z-10">
					<div>
						<p className="font-bold text-3xl ml-4">
							Saler<span className="text-primary font-bold text-3xl">.</span>
						</p>
					</div>
					<div
						onClick={() => setOpen(!open)}
						className="transition-transform duration-200 absolute right-7 top-3 cursor-pointer md:hidden text-black"
					>
						{open ? (
							<span className="material-symbols-outlined text-3xl z-10">
								close
							</span>
						) : (
							<span className="material-symbols-outlined text-3xl z-10">
								menu
							</span>
						)}
					</div>
				</div>
				<div
					className={`links-div md:flex items-center justify-center md:pb-0 absolute md:static left-0 w-full md:w-auto mt-0 md:mt-0 md:pl-0 pl-9 bg-white shadow-lg md:shadow-none pb-4 p-5 transition-all duration-500 ease-in ${
						open ? "top-14" : "top-[-490px]"
					}`}
				>
					{links.map((link) => (
						<li
							className={`md:my-0 font-medium ml-5 pb-5 text-[18px] w-20 list-none ${
								link.name === "How It Works" ? "min-w-[120px]" : ""
							}`}
							key={link.name}
						>
							<Link
								to={link.link}
								activeClass="active"
								smooth={true}
								spy={true}
								className="text-[#485361] hover:text-[#1B99F7] duration-300 cursor-pointer"
							>
								{link.name}
							</Link>
						</li>
					))}
				</div>
			</div>
		</div>
	);
};

export default NavBar;
