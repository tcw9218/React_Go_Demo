// import { useState } from 'react'
// import useSWR from 'swr'
import Nav from './components/Nav'
import Bikes from './pages/Bikes'
import { PopoularProducts } from '@/pages/PopularProducts'
import { Offer } from "@/pages/Offer"
// import { Box } from '@mantine/core'
// import { AddTodo } from './pages/AddTodo'
export const ENDPOINT = 'http://localhost:3000'

// const fetcher = async (url: string) => await fetch(`${ENDPOINT}/${url}`).then(async (r) => await r.json())

const App = () => {
	// const {data, isLoading, error} = useSWR('todos', fetcher)

	// if (error) return <div>error</div>
	// if (isLoading) return <div>isLoading</div>
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
      			CustomerReviews
			</section>
			<section className='padding-x sm:py-32  py-16 w-full'>
      			Subscribe
			</section>
			<section className='bg-black padding-x padding-t pb-8'>
      			Footer
			</section>

			{/* <Box>
      {JSON.stringify(data)}

      <AddTodo/>
    </Box> */}
		</main>
	)
}

export default App
