import 	{ products } from "@/constants"
import { PopularProductCard } from "@/components/PopularProductCard"
export const PopoularProducts = () => {
	return (

    	<section id="products"
			className="max-container mas-sm:mt-12"
		>
			<div className="flex flex-col justify-start gap-5">
				<h2 className="text-4xl font-palanquin font-bold">Popular Products</h2>
				<p className="lg:max-w-lg mt-2 text-slate-gray">Experience Top-notch quality and style</p>
			</div>
			<div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
				{products.map((product: typeof products[number]) => (
					<PopularProductCard
						key={product.name}
						{...product}
					/>
				))}
			</div>
    	</section>
	)
}
