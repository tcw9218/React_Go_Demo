// import { useState } from 'react'
// import useSWR from 'swr'

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


// import { Box } from '@mantine/core'
// import { AddTodo } from './pages/AddTodo'
export const ENDPOINT = 'http://localhost:3000'

// const fetcher = async (url: string) => await fetch(`${ENDPOINT}/${url}`).then(async (r) => await r.json())

const App = () => {
	// const {data, isLoading, error} = useSWR('todos', fetcher)

	// if (error) return <div>error</div>
	// if (isLoading) return <div>isLoading</div>
	return (
		<Routes>
			<Route path="/" element={<Home/>}/>
		</Routes>
	)
}

export default App
