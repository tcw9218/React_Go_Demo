import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ProductRoutes } from './components/ProductRoutes';
import Nav from './components/Nav';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { useEffect } from 'react';
import Sell from './pages/Sell';
const App = () => {
	useEffect(() => console.log("APP Rerender"))
	return (
		<>
			<Nav />
			<div className='relative bg-secondary-back'>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/products/*" element={<ProductRoutes />} />
					<Route path="/login" element={<Login />} />
					<Route path="/sell" element={<Sell />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</div>
		</>
	)
}

export default App
