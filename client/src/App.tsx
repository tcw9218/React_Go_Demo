import { useState } from 'react'
import useSWR from 'swr'
import {Box} from '@mantine/core'
import './App.css'
import { AddTodo } from './components/AddTodo'
export const ENDPOINT = 'http://localhost:3000'

const fetcher = (url: string) => fetch(`${ENDPOINT}/${url}`).then((r) => r.json())

function App() {
  const {data, isLoading, error} = useSWR('todos', fetcher)

  if (error) return <div>error</div>
  if (isLoading) return <div>isLoading</div>
  return <>
    <Box>
      {JSON.stringify(data)}

      <AddTodo/>
    </Box>
  </>
}

export default App
