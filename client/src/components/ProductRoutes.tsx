import { Product } from "@/pages/Product"
import { ProductList } from "@/pages/ProductList"
import { Route, Routes } from "react-router-dom"

export const ProductRoutes = () => {
	return(
		<>
			{/* <ProductLayout /> */}
			<Routes>
				<Route index element={<ProductList />} />
				<Route path=":id" element={<Product />} />
			</Routes>
		</>
	)
}
