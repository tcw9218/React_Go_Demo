import { useParams } from "react-router-dom"

export const Product = () => {
	const { id } = useParams()

	return (
		<h1>product {id} </h1>
	)
}
