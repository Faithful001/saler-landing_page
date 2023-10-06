import bulb from "../assets/bulb_icon.png";
import calendar from "../assets/calendar_icon.png";
import tag from "../assets/tag_icon.png";
import monitor from "../assets/monitor_icon.png";

const Features = () => {
	return (
		<div className="features bg-[#EFF4F9] p-10">
			<div className="section">
				<p className="text-primary text-3xl font-bold">Product Features</p>
				<div className="features_container">
					<div className="feat text-dark">
						<img src={bulb} alt="" className="h-12 max-w-auto" />
						<p className="text-2xl font-bold">Make sales in power</p>
						<p>
							You can now make sales without power supply using your smartphone.
							Print receipts using a bluetooth printer
						</p>
					</div>
					<div className="feat text-dark">
						<img src={calendar} alt="" className="h-12" />
						<p className="text-2xl font-bold">Expiry date notifications</p>
						<p>
							Sell off products with shorter shelf life. Avoid product decay and
							loss of revenue when you get notifications on expiring products
						</p>
					</div>
					<div className="feat text-dark">
						<img src={tag} alt="" className="h-12" />
						<p className="text-2xl font-bold">Instant sales notifications</p>
						<p className="">
							Sales are automatically synced. Get notified whenever a sales
							staff makes a sale
						</p>
					</div>
					<div className="feat text-dark">
						<img src={monitor} alt="" className="h-12" />
						<p className="text-2xl font-bold">Easy setup</p>
						<p>
							No need for a messy desktop, UPS and printer. You now have it all
							in your palms
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
