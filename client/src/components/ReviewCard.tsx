import { reviews } from "@/constants"

export const ReviewCard = (props: typeof reviews[number]) => {
	return (
		<div className="flex justify-cener items-center flex-col">
			<img
				src={props.imgURL}
				alt="cucstomer"
				className="object-cover"
				width={120}
				height={120}
			/>
			<p className="mt-4 text-center max-w-sm">{props.feedback}</p>
			<div className="mt-3 flex justify-center items-center gap-3">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
 				 <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
				</svg>

				<p className="text-xl">{props.rating}</p>
			</div>
			<h3 className="text-3xl mt-1">{props.customerName}</h3>

		</div>
	)
}
