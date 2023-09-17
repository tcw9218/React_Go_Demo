import { products } from "@/constants"
import { star } from "@/assets/icons"

export const PopularProductCard = ( product: typeof products[number] ) => {
	return (
		<div>
			<div className="flex flex-col w-full flex-1">
				<img
					src={product.imgURL}
					alt={product.name}
				/>
			</div>
			<div className="flex mt-8 justify-start gap-2">
				<img
					src={star}
					alt="rating"
					className="w-6 h-6"
				/>
				<p className="text-xl">
					4.5
				</p>
			</div>
			<p className="mt-2 text-2xl font-semibold">{product.name}</p>
			<p className="mt-2 font-semibold text-coral-red text-2xl leading-normal">{product.price}</p>
		</div>
	)

}
