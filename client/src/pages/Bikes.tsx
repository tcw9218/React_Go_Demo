import { Button } from '@/components/UI/Button'
import { useNavigate } from 'react-router-dom'
const Bikes: React.FC = () => {
	const navigate = useNavigate()
	return (
		<div className='flex max-lg:flex-col-reverse'>
			<div
				id= "home"
				className="w-full p-4 flex flex-col max-container"
			>
				<div className="relative flex flex-col justify-center items-start w-full max-xl:padding-x py-10">
					<p className="text-l text-secondary-text">BIKES ARE MEANT TO BE USED</p>
					<h1 className="mt-3  text-4xl  font-bold">
						<span className="bg-secondary-default relative z-10 pr-10">Sell Your Gear for Cash or Credit</span>
					</h1>
					<p className=" text-secondary-dark text-lg leading-8 my-6">We can make an offer for your bike, frame, or wheelset within two business days and help you avoid the frustration and renegotiation of the secondary market. </p>
					<Button label="Sell Your Items" className="text-base" onClick={() => navigate("/sell")}/>
				</div>
			</div>
			<div className='flex'>
				<img src="https://cdn.sanity.io/images/2v1xh07z/production/edd67cac912d8e7bfb210e176356782ae63fc5b2-1440x960.jpg?w=1200&h=800"
					className=' object-cover'/>
			</div>
		</div>
	)
}
export default Bikes
