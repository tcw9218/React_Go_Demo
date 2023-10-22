import { reviews } from "@/constants"
import { ReviewCard } from "@/components/ReviewCard"
export const CustomerReviews = () => {
	return (
		<section className="max-container">
			<h3 className=" text-4xl font-bold text-center">
				What Our
				<span className="text-secondary-hover "> Customers </span>
				Say?
			</h3>
			<p className="text-center mt-4 m-auto max-w-lg">
				Hear Genuine stories from  our satisfied  customers about  their exceptional experiences with us
			</p>
			<div className="flex felx-1 justify-evenly max-lg:flex-col gap-14 mt-16">
				{reviews.map(( review: typeof reviews[number] ) => (
					<ReviewCard
						key={review.customerName}
						{...review}
					/>
				)

				)}
			</div>
		</section>
	)
}
