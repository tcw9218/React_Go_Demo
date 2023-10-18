import { ProductCard } from "@/components/ProductCard"
import { ProductFilterSelect } from "@/components/ProductFilterSelect"
import { bikeProduct } from "@/constants"

/* eslint-disable react/no-unescaped-entities */
export const ProductList = () => {
	return (
		<div className="w-full p-2 max-container flex pt-28 gap-10 ">
			<div className="sticky flex xl:basis-1/5 max-lg:hidden">
				<ProductFilterSelect />
			</div>
			<div className="grid sm:grid-cols-2 max-xs:grid-cols-1 sm:gap-4 gap-14">
				{bikeProduct.map((product: typeof bikeProduct[number]) => (
					<ProductCard
						key = {product.name}
						imgURL= {product.imgURL}
						name = {product.name}
						price = {product.price}
					/>
				))}
			</div>
		</div>
	)
}
