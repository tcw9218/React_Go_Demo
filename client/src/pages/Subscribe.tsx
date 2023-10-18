import { Button } from "@/components/UI/Button"

export const Subscribe = () => {
	return (
		<section
			className="max-container flex justify-between items-cneter max-lg:flex-col gap-10"
			id="contactus"
		>
			<h3 className="text-4xl lg:max-w-md font-bold">Sign Up from
				<span className="text-coral-red "> UPdates </span> &NewsLatter
			</h3>
			<div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-5 rounded-full">
				<input
					type="text"
					placeholder="subscribe@email.com"/>
				<div className="flex max-sm:justify-end items-center max-sm:w-full">
					<Button
						label="Signup"
						widthFull
					/>
				</div>
			</div>

		</section>)
}
