import { ComponentProps } from "react"
import { twMerge } from 'tailwind-merge'
type ButtonProps = {
	label: string
	iconURL?: string
	borderColor?: string
	widthFull?: boolean
} & ComponentProps<"button">

export const Button = ({ label, borderColor, widthFull, className, ...props }: ButtonProps) => {
	return (
		<button {...props} className={twMerge(` text-slate-50 flex justify-center items-center px-6 py-2 border rounded-full ${widthFull && 'w-full'} leading-none
		${borderColor ? `${borderColor}` : 'bg-secondary-text'}`,className)}
		>
			{label}

		</button>
	)
}
