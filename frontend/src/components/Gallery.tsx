"use client";

import { Carousel } from "flowbite-react";

import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";
import phone4 from "../assets/phone4.png";

const Gallery = () => {
	return (
		<div className="gallery">
			<div className="section">
				<h1 className="text-primary font-bold text-3xl mb-5">Gallery</h1>
				<p className="text-dark text-xl">Take a peek at our interface</p>
				<div className="bg-[#1D293A] rounded-2xl mt-10">
					<div
						className="relative h-[70vh] max-w-auto flex items-center justify-center "
						data-testid="carousel"
					>
						<Carousel>
							<img alt="" src={phone1} />
							<img alt="" src={phone2} />
							<img alt="" src={phone3} />
							<img alt="" src={phone4} />
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
