import Nav from "@/components/Nav"
import Bikes from "./Bikes"
import { PopoularProducts } from "./PopularProducts"
import { Offer } from "./Offer"
import { CustomerReviews } from "./CustomerReviews"
import { Footer } from "./Footer"
import { Subscribe } from "./Subscribe"

const Home: React.FC = () => {
	return (
		<main className='relative'>
			<Nav />
			<section className='xl:padding-l wide:padding-r padding-b'>
				<Bikes />
			</section>
			<section className='padding'>
  			<PopoularProducts />
			</section>
			<section className='padding'>
      			<Offer />
			</section>
			<section className='bg-pale-blue padding'>
      			<CustomerReviews />
			</section>
			<section className='padding-x sm:py-32  py-16 w-full'>
      			<Subscribe />
			</section>
			<section className='bg-black padding-x padding-t pb-8'>
      			<Footer />
			</section>
		</main>
	)
}
export default Home
