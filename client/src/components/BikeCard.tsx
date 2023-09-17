import { type Shoes } from '../constants'

interface BikeCardProps {
	shoe: Shoes
	changeBigshoeImg: (args: string) => void
	bigShoeImage: string
}
export const BikeCard: React.FC<BikeCardProps> = ( props: BikeCardProps ) => {
	const handleClick = () => {
		if (props.bigShoeImage !== props.shoe.bigShoe) {
			props.changeBigshoeImg(props.shoe.bigShoe)
		}
	}
	return (
		<div
			className = {
				`border-2 rounded-xl
            	${props.bigShoeImage === props.shoe.bigShoe ? 'border-coral-red' : 'border-transparent'}
            	cursor-pointer max-sm:flex-1`
			}
			onClick = { handleClick }
		>
			<div className = "flex bg-card bg-center sm:h-40 sm:w-40 max:sm-p-4 rounded-xl">
				<img
					src = { props.shoe.thumbnail }
					alt = "ShoeCollection"
					width = { 127 }
					height = { 103 }
					className= "object-contain"
				/>
			</div>
		</div>
	)
}
