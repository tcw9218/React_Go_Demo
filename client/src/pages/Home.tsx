import Bikes from "./Bikes"
import { CustomerReviews } from "../components/CustomerReviews"
import { Footer } from "../components/Footer"
import { Subscribe } from "../components/Subscribe"
import { useEffect } from "react"
// import { Box } from '@mantine/core'
// import { AddTodo } from './pages/AddTodo'
// export const ENDPOINT = 'http://localhost:3000'

// const fetcher = async (url: string) => await fetch(`${ENDPOINT}/${url}`).then(async (r) => await r.json())
const Home: React.FC = () => {
	// const {data, isLoading, error} = useSWR('todos', fetcher)
	useEffect( () => {
		fetch('http://localhost:8000/api/user', {
			headers: {
				'Authorization': `Bearer ${localStorage.getItem("jwt")}`,
				'Content-Type':'application/json' },
		}).then(res => console.log(res.json()))
	},[])

	return (
		<main >
			<section>
				<Bikes />
			</section>
			<section className=' bg-secondary-hover padding'>
      			<CustomerReviews />
			</section>
			<section className=' sm:py-32  py-16 w-full'>
      			<Subscribe />
			</section>
			<section className='bg-black padding-x padding-t pb-8'>
      			<Footer />
			</section>
		</main>
	)
}
export default Home
