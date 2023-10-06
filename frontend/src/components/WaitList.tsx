// import playstore_icon from "../assets/playstore_icon.png";
// import appstore_icon from "../assets/appstore_icon.png";

import playstore from "../assets/playstore.svg";
import appstore from "../assets/appstore.svg";
import caution from "../assets/caution.svg";

const WaitList = () => {
	return (
		<div className="waitlist m-7 flex flex-col justify-center items-center">
			<div className="section">
				<h1 className="text-primary text-3xl md:text-center text-left font-semibold mb-3">
					Get ahead in your sales game
				</h1>
				<p className="text-xl md:text-center text-left mb-7 text-dark">
					Be the first to know when we launch!
				</p>
				<div className="mb-14">
					<form action="" className="flex flex-col justify-center items-center">
						<div>
							<input
								type="text"
								placeholder="Enter your email"
								className="w-[300px] lg:w-40 xl:w-2/4 p-2 h-13 text-lg py-3 mr-3 mb-2"
							/>
							<button className="bg-primary text-white text-xl p-[12px] px-[20px] rounded-md mb-2">
								Notify me
							</button>
						</div>
						<p className="text-[15px] text-dark">
							By clicking Notify Me, you're confirming that you agree with our
							Terms and Conditions.
						</p>
					</form>
				</div>

				<div className="flex flex-col">
					<div className="flex justify-evenly items-center max-w-auto pb-3">
						<div>
							<a href="">
								<img
									src={appstore}
									alt=""
									className="md:max-w-[140px] md:h-auto w-[130px]"
								/>
							</a>
						</div>
						<div>
							<a href="">
								<img
									src={playstore}
									alt=""
									className="md:max-w-[140px] md:h-auto w-[130px]"
								/>
							</a>
						</div>
					</div>
					<div className="flex items-center justify-center bg-[#F2F2F2] max-w-72 p-1 rounded">
						<img src={caution} alt="" className="pr-1" />
						<p className="">Coming soon</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WaitList;
