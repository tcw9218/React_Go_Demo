import { copyrightSign } from "@/assets/icons"
import { footerLogo } from "@/assets/images"
import { footerLinks, socialMedia } from "@/constants"

export const Footer = () => {
	return (
		<footer className="max-container ">
			<div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
				<div className="flex flex-col items-start">
					<a href="/">
						<img
							src={footerLogo	}
							width={150}
							height={46}
						/>
					</a>
					<div className="flex items-center gap-5 mt-8">
						{socialMedia.map((icon, index) => (
							<div 	className="flex justify-center items-center w-12 h-12 bg-white rounded-full" key={index}>
								<img
									src={icon.src}
									alt={icon.alt}
									height={24}
									width={24}
								/>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
					{footerLinks.map((section: typeof footerLinks[number], index) => (
						<div key={index}>
							<h4 className="text-white">{section.title}</h4>
							<ul>
								{section.links.map((link) => (
									<li key={link.name} className="text-white-400 hover:text-slate-gray cursor-pointer">
										<a href={link.link}>{link.name}</a>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
			<div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:iems-center">
				<div className="flex felx-1 justify-start items-center gap-2 cursor-pointer">
					<img
						src={copyrightSign}
						alt="copywright"
						width={20}
						height={20}
						className="m-0 rounded-full"
					/>
					<p>Copyright. All rights reserved.</p>

				</div>
				<p className="cursor-pointer">Terms & Conditions</p>
			</div>

		</footer>
	)

}
