import psn from "../assets/psn.png";
import acpn from "../assets/acpn.png";
import mkt from "../assets/mkt_square.png";
import spar from "../assets/spar_mkt.png";

const Partners = () => {
	return (
		<div className="partners pb-12">
			<div className="section flex flex-col p-2 items-center text-primary font-bold text-2xl">
				<p>Our trusted partners</p>
				<div className="flex items-center justify-center flex-wrap max-w-[100%]">
					<img src={psn} alt="" className="max-w-[100%] h-auto m-5" />
					<img src={acpn} alt="" className="max-w-[100%] h-auto m-5" />
					<img src={mkt} alt="" className="max-w-[100%] h-auto m-5" />
					<img src={spar} alt="" className="max-w-[100%] h-auto m-5" />
				</div>
			</div>
		</div>
	);
};

export default Partners;
