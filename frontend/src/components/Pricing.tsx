const Pricing = () => {
	return (
		<div className="pricing mt-40 m-3">
			<div className="section bg-[#1D293A] text-white p-10 rounded-lg ">
				<div className="mb-10">
					<h1 className="text-[#57CDF2] md:text-5xl text-4xl text-center mb-5">
						Pricing
					</h1>
					<p className="text-center md:text-2xl text-xl">
						Affordable plans, value for your money
					</p>
				</div>
				<div className="pricing_modals flex justify-around items-center">
					{/* first pricing */}
					<div className="border-white border-[1px] p-10 w-full max-w-auto m-5 rounded">
						<div className="flex flex-col items-center mb-4">
							<h1 className="font-bold md:text-2xl text-xl pb-2">Basic Plan</h1>
							<p className="text-[#57CDF2] md:text-5xl text-4xl font-extrabold pb-2">
								$11/mo
							</p>
							<p>0r $121 yearly</p>
						</div>
						<div className="flex flex-col justify-center">
							<div className="flex p-4">
								<span className="material-symbols-outlined pr-3">done</span>
								<p>Single user </p>
								<br />
							</div>
							<div className="flex p-4">
								<span className="material-symbols-outlined pr-3">done</span>
								<p>200 products max </p>
								<br />
							</div>
							<div className="flex p-4">
								<span className="material-symbols-outlined pr-3">done</span>
								<p>No access to suppliers</p>
								<br />
							</div>
						</div>
					</div>
					{/* second pricing */}
					<div className="border-white border-[1px] p-10 w-full max-w-auto m-5 rounded relative">
						<p className="bg-white text-black absolute w-[100%] top-0 left-0 text-center p-1">
							Recommended
						</p>
						<div className="flex flex-col items-center mb-4">
							<h1 className="font-bold md:text-2xl text-xl pb-2">Pro plan</h1>
							<p className="text-[#57CDF2] md:text-5xl text-4xl font-extrabold pb-2">
								$15/mo
							</p>
							<p>0r $150 yearly</p>
						</div>
						<div className="flex flex-col justify-center">
							<div className="flex p-4">
								<span className="material-symbols-outlined pr-3">done</span>
								<p>Multi user </p>
								<br />
							</div>
							<div className="flex p-4">
								<span className="material-symbols-outlined pr-3">done</span>
								<p>Unlimited products </p>
								<br />
							</div>
							<div className="flex p-4">
								<span className="material-symbols-outlined pr-3">done</span>
								<p>Access to suppliers</p>
								<br />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pricing;
