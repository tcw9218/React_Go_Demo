import { Link, Outlet } from "react-router-dom"

export const ProductLayout = () => {
	return(
		<>
			<Link to="/products/1">Product 1</Link>
			<Link to="/products/2">Product 2</Link>
			<Outlet context={{ hello: "World" }}/>
		</>
	)
}
