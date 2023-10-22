import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'
type ButtonProps = {
	label: string
	iconURL?: string
	borderColor?: string
} & ComponentProps<"button">

export const Button = ({ label, borderColor, className, ...props }: ButtonProps) => {
	return (
		<button {...props} className={twMerge(` text-secondary-default flex justify-center items-center px-6 py-2 border
									rounded-full leading-none hover:bg-secondary-dark-hover
									${borderColor ? `${borderColor}` : 'bg-secondary-text'}`,className)}
		>
			{label}

		</button>
	)
}
