type ButtonProps = {label:string, iconURL: string } 
export const Button = (props: ButtonProps ) => {
    return (
        <button>
            {props.label}
        </button>
    )
}