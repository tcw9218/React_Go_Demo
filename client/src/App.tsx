import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ProductRoutes } from './components/ProductRoutes';
import { Login } from './pages/Login';
import Nav from './components/Nav';
import { Register } from './pages/Register';
const App = () => {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/products/*" element={<ProductRoutes />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</>

	)
}

export default App
