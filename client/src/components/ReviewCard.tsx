import { star } from "@/assets/icons"
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
				<img
					src={star}
					width={24}
					height={24}
				/>
				<p className="text-xl">{props.rating}</p>
			</div>
			<h3 className="text-3xl mt-1">{props.customerName}</h3>

		</div>
	)
}
