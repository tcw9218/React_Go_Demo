type ButtonProps = {label:string, iconURL: string } 
export const Button = (props: ButtonProps ) => {
    return (
        <button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg bg-coral-red rounded-full leading-none">
            {props.label}

            <img 
                src={props.iconURL}
                alt="arrorRight"
                className="ml-2 rounded-full w-5 h-5"/>
        </button>
    )
}