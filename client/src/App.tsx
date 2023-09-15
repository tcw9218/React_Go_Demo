import { useState } from 'react'
import useSWR from 'swr'
import Nav from './components/Nav'
import {Box} from '@mantine/core'
import { AddTodo } from './components/AddTodo'
export const ENDPOINT = 'http://localhost:3000'

const fetcher = (url: string) => fetch(`${ENDPOINT}/${url}`).then((r) => r.json())

const  App = () => {
  const {data, isLoading, error} = useSWR('todos', fetcher)

  if (error) return <div>error</div>
  if (isLoading) return <div>isLoading</div>
  return (
  <main>
    <Nav />
   
    <Box> 
      {JSON.stringify(data)}

      <AddTodo/>
    </Box>
  </main>
  )
}

export default App
