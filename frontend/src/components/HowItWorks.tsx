import open_app_icon from "../assets/open_app_icon.svg";
import open_app from "../assets/open_app.png";
import make_sale_icon from "../assets/make_sale_icon.svg";
import make_sale from "../assets/make_sale.png";
import scan_product_icon from "../assets/scan_product_icon.svg";
import scan_product from "../assets/scan_product.png";
import print_receipt_icon from "../assets/print_receipt_icon.svg";
import print_receipt from "../assets/print_receipt.png";

const HowItWorks = () => {
	return (
		<div className="howitworks mt-20">
			<div className="section">
				<p className="text-3xl text-dark font-bold max-w-3xl mb-12 m-[30px]">
					An app that makes sales recording easier, faster, and more reliable
					than a sales diary or notebook
				</p>
				<h1 className="text-3xl text-primary font-bold mb-7 m-[30px]">
					How it works
				</h1>
				<p className="text-2xl text-dark max-w-lg ml-[30px]">
					Saler eliminates the need for a clunky desktop computer and barcode
					scanner
				</p>

				{/* start */}
				<div className="mt-14 m-3 flex flex-col items-center">
					{/* first */}
					<div className="bg-[#E0EFE6] rounded-lg p-5 pr-8 max-w-[550px] mb-20">
						<div className="flex items-center">
							<img
								src={open_app_icon}
								alt=""
								className="h-[35px] max-w-auto lg:h-full"
							/>
							<p className="font-bold text-2xl text-dark ml-2">Open the app</p>
						</div>
						<p className="text-[20px] ml-[45px] text-dark max-w-lg mb-10 leading-[25px] mt-1">
							Tap on the ‘Saler’ mobile application icon from your app drawer.
							Log in or sign up as needed
						</p>
						<img src={open_app} alt="" className="w-[70%] h-auto" />
					</div>

					{/* second */}
					<div className="bg-[#F4D9D8] rounded-lg p-5 pr-8 max-w-[550px] mb-20">
						<div className="flex items-center">
							<img
								src={make_sale_icon}
								alt=""
								className="h-[35px] max-w-auto lg:h-full"
							/>
							<p className="font-bold text-2xl text-dark ml-2">
								Tap on “Make a sale”
							</p>
						</div>
						<p className="text-[20px] ml-[45px] text-dark max-w-lg mb-10 leading-[25px] mt-1">
							Tap on the plus icon on the navigation bar from the homepage.
							Select ‘Make a sale’
						</p>
						<img src={make_sale} alt="" className="w-[70%] h-auto" />
					</div>

					{/* third */}
					<div className="bg-[#F7F0DB] rounded-lg p-5 pr-8 max-w-[550px] mb-20">
						<div className="flex items-center">
							<img
								src={scan_product_icon}
								alt=""
								className="h-[35px] max-w-auto lg:h-full"
							/>
							<p className="font-bold text-2xl text-dark ml-2">
								Scan a product barcode
							</p>
						</div>
						<p className="text-[20px] ml-[45px] text-dark max-w-lg mb-10 leading-[25px] mt-1">
							Position the barcode of your desired product within the camera
							view. Wait for the scanner to detect your product
						</p>
						<img src={scan_product} alt="" className="w-[70%] h-auto" />
					</div>

					{/* fourth */}
					<div className="bg-[#E9DCEC] rounded-lg p-5 pr-8 max-w-[550px] mb-20">
						<div className="flex items-center">
							<img
								src={print_receipt_icon}
								alt=""
								className="h-[35px] max-w-auto lg:h-full"
							/>
							<p className="font-bold text-2xl text-dark ml-2">
								Print a receipt
							</p>
						</div>
						<p className="text-[20px] ml-[45px] text-dark max-w-lg mb-10 leading-[25px] mt-1">
							Follow the prompts to complete the sale. A receipt should be
							processed. Select ‘Print receipt’ to send the file to your desired
							print device
						</p>
						<img src={print_receipt} alt="" className="w-[70%] h-auto" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HowItWorks;
