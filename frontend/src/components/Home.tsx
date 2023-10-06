import phone from "../assets/home_image.png";

const Home = () => {
	return (
		<div className="home mb-28" id="home">
			<div className="section lg:flex lg:justify-center xl:flex xl:justify-center">
				<div className="xl:max-w-[55%] lg:max-w-[55%] max-w-[100%]">
					<p className="main lg:text-[60px] text-[50px] font-extrabold leading-[70px] mb-5">
						Manage sales and stock records in your business place
					</p>
					<p className="lg:text-[22px] text-[22px] mb-5">
						Saler is a mobile application that enables pharmacies and mini-marts
						to make sale right from their smartphones
					</p>
					<div className="ml-0">
						<p className="text-primary text-[24px] font-bold">
							Join the waitlist
						</p>
						<div className="input-div ml-0">
							<form action="">
								<input
									type="text"
									placeholder="Enter your email"
									className="w-[300px] lg:w-2/4 xl:w-2/4 p-2 text-lg py-3 mr-3 mb-2 h-12"
								/>
								<button className="bg-primary text-white text-xl p-[10px] px-[20px] rounded-md">
									Join waitlist
								</button>
								<p className="text-[16px] text-dark">
									*Get 1 month free subscription when you join
								</p>
							</form>
						</div>
					</div>
				</div>
				<div className="flex items-center justify-center">
					<img src={phone} alt="" className="" />
				</div>
			</div>
		</div>
	);
};

export default Home;
