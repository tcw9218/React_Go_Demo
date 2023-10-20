/* eslint-disable @typescript-eslint/ban-ts-comment */

import {  useNavigate } from 'react-router-dom';
import { useEffect,  } from 'react';
import { Button } from './UI/Button';
const Nav = () => {

	const navigate = useNavigate();

	useEffect(() => console.log("Navigate Rerender"))

	return (
    	<header className = 'padding-x py-4 z-10 w-full mx-auto bg'>
			<nav className = 'flex justify-between max-container bg-white'>
				<div className='flex'>
					<button
						className = 'text-2xl'
						onClick={() => navigate("/") }>
						<img
							className = 'h-10 inline'
							src = "https://static.vecteezy.com/system/resources/thumbnails/006/059/929/small/symbol-of-a-bike-isolated-on-white-background-bike-outline-icon-free-vector.jpg"
							alt = 'Logo'
						/>
						w5Bike
					</button>
					<Button label='products' className='ml-4 text-base' onClick={() => navigate("/products")}></Button>
				</div>
				<Button label="login" onClick={() => navigate("/login")}/>
			</nav>
		</header>
	)
}
export default Nav
