import { Button } from "../components/Button"
import { arrowRight } from "../assets/icons"


const Bikes = () => {
    return (
       <section
            id="home"
            className="w-full border-2 border-red-500 p-2 flex flex-col 
            justify-center min-h-screen xl:flex-row max-container gap-10"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p>Our Collections</p>
                <h1>
                    The New arrivals
                    <br/>
                    Nicycles
                </h1>
                <p>Discover with the bikes</p>
                <Button label="Show Now" iconURL={arrowRight}/>
            </div>

       </section>
    )


}
export default Bikes