interface ButtonProps { label: string, iconURL: string }
export const Button: React.FC<ButtonProps> = ({ label, iconURL }: ButtonProps) => {
	return (
		<button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg bg-coral-red rounded-full leading-none">
			{label}

			<img
				src={iconURL}
				alt="arrorRight"
				className="ml-2 rounded-full w-5 h-5"/>
		</button>
	)
}
