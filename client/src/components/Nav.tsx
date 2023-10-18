/* eslint-disable @typescript-eslint/ban-ts-comment */

import { navLinks } from '../constants'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as HIcons from '@heroicons/react/20/solid'
const Nav: React.FC = () => {
	const { ...icons } = HIcons
	const [open, setOpen] = useState(false)
	// @ts-ignore
	const TheIcon: JSX.Element = icons[open ?  "XMarkIcon" :  "Bars3Icon"]
	const navigate = useNavigate();
	const handleClick = (url: string) => {
		navigate(url)
	}
	const toggleMenu = () => {
		setOpen(!open)
	}
	useEffect(() => console.log("Navidgate Rerender"))

	return (
    	<header className = 'padding-x py-8 z-10 w-full mx-auto'>
			<nav className = 'lg:flex lg:justify-between lg:items-center max-container bg-white'>
				<div className='flex justify-between'>
					<span className = 'text-2xl'>
						<img
							className = 'h-10 inline'
							src = "https://static.vecteezy.com/system/resources/thumbnails/006/059/929/small/symbol-of-a-bike-isolated-on-white-background-bike-outline-icon-free-vector.jpg"
							alt = 'Logo'
						/>
						w5Bike
					</span>
					<button
						onClick={toggleMenu}>
						 {/* @ts-ignore */}
						<TheIcon
							className = "hidden max-lg:block selection:flex-stretch mr-4 h-8 w-8"
							aria-hidden="true"
						/>
					</button>
				</div>
				<div className="i-heroicons:wrench-screwdriver-solid" />
				<ul	 className={`flex-1 gap-16 lg:flex lg:justify-center z-[10] lg:z-auto lg:items-center
								lg:static absolute bg-white lg:py-0 py-4 lg:pl-0 pl-12 lg:opacity-100
								${open ? 'opacity-100' : 'opacity-0'} trnsition ease-in`}>
					{ navLinks.map((item) => (
						<li key={item.label} className='text-slate-gray active:bg-gray-900 hover:text-black'>
							 <a
								href={item.href}
								className="font-montserrat leading-normal text-lg"
								onClick = {() => handleClick(item.href)}
							>
								{item.label}
							</a>
						</li>
					))}

				</ul>
			</nav>
		</header>
	)
}
export default Nav
