import { bikes } from '../constants'

type BikeCardProps = {
	bike: typeof bikes[number]
	changeBigBikeImg: (args: string) => void
	bigBikeImage: string
}
export const BikeCard: React.FC<BikeCardProps> = ( props: BikeCardProps ) => {
	const handleClick = () => {
		if (props.bigBikeImage !== props.bike.bigBike) {
			props.changeBigBikeImg(props.bike.bigBike)
		}
	}
	return (
		<div
			className = {
				`border-2 rounded-xl
            	${props.bigBikeImage === props.bike.bigBike ? 'border-coral-red' : 'border-transparent'}
            	cursor-pointer max-sm:flex-1`
			}
			onClick = { handleClick }
		>
			<div className = "flex bg-card bg-center sm:h-40 sm:w-40 max:sm-p-4 rounded-xl">
				<img
					src = { props.bike.thumbnail }
					alt = "BikeCollection"
					width = { 127 }
					height = { 103 }
					className= "object-contain"
				/>
			</div>
		</div>
	)
}
