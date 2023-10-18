type ButtonProps = {
	label: string
	iconURL?: string
	borderColor?: string
	widthFull?: boolean
}
export const Button: React.FC<ButtonProps> = ({ label, iconURL, borderColor, widthFull }: ButtonProps) => {
	return (
		<button className={`flex justify-center items-center gap-2 px-7 py-4 border text-lg rounded-full ${widthFull && 'w-full'} leading-none
			${borderColor ? `${borderColor}` : 'bg-coral-red'}`
		}>
			{label}

			{iconURL && <img
				src={iconURL}
				alt="arrorRight"
				className="ml-2 rounded-full w-5 h-5"/>
			}
		</button>
	)
}
