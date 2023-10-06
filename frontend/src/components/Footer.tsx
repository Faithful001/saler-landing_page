const Footer = () => {
	return (
		<div className="footer m-10">
			<div className="section">
				<div className="flex justify-center items-center mb-10 mt-20">
					<hr className="w-full border-black" />
				</div>
				<div className="mb-5">
					<p className="font-bold text-2xl">
						Saler<span className="text-primary font-bold text-3xl">.</span>
					</p>
					<p>2022 Saler. All right reserved.</p>
				</div>

				<div className="md:flex grid md:justify-around">
					<a href="" className="underline mb-2">
						Data Usage
					</a>
					<a href="" className="underline mb-2">
						Cookies Settings
					</a>
					<a href="" className="underline mb-2">
						Terms of Service
					</a>
					<a href="" className="underline mb-2">
						Privacy Policy
					</a>
				</div>

				<p>
					Made with ❤ by <a href="https://faithfuldev.vercel.app/">Faithful</a>
				</p>
			</div>
		</div>
	);
};

export default Footer;
