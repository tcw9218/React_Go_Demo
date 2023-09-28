import { shoe8 } from "@/assets/images"
import { Button } from "@/components/Button"

export const Offer = () => {
	return (
		<section
			id="offer"
			className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
		>
			<div className="flex flex-col flex-1">
				<h2 className="capitalize text-4xl font-bold lg:max-max-w-lg">
					We Provide You
					<span className="text-coral-red"> Super</span>
					<span className="text-coral-red"> Quality</span> Bikes
				</h2>
				<p className="text-lg leading-8 mt-6 mb-14 sm:max-w-sm ">
					Discover stylish arrivals, quaity comfort, and innovation for your attractive life
				</p>
				<div className="mt-11">
					<Button
						label="Details"
					/>
				</div>
			</div>
			{/* image */}
			<div className="flex justify-center items-center flex-1">
				<img
					src={shoe8}
					alt="shoe8"
					width={570}
					height={522}
					className="object-contain"
				/>
			</div>
		</section>
	)
}
