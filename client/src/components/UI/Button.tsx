import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'
type ButtonProps = {
	label: string
	iconURL?: string
	borderColor?: string
	widthFull?: boolean
} & ComponentProps<"button">

export const Button = ({ label, iconURL, borderColor, widthFull, className, ...props }: ButtonProps) => {
	return (
		<button {...props} className={twMerge(`flex justify-center items-center gap-2 px-7 py-4 border text-lg rounded-full ${widthFull && 'w-full'} leading-none
		${borderColor ? `${borderColor}` : 'bg-coral-red'}`,className)}
		>
			{label}

			{iconURL && <img
				src={iconURL}
				alt="arrorRight"
				className="ml-2 rounded-full w-5 h-5"/>
			}
		</button>
	)
}
