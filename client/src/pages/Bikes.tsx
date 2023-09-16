import { Button } from "../components/Button"
import { arrowRight } from "../assets/icons"
import { statistics } from "../constants"


const Bikes = () => {
    return (
       <section
            id="home"
            className="w-full border-2 border-red-500 p-2 flex flex-col 
            justify-center min-h-screen xl:flex-row max-container gap-10"
        >
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
                <p className="text-xl text-coral-red">Our Collections</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New arrivals</span>
                    <br/>
                    <span className="text-coral-red mt-3 inline-block"> Nicycles </span>
                    Bikes
                </h1>
                <p className="text-slate-gray text-lg leading-8 mt-6 mb-14 ">Discover stylish the bikes quality comforts  and innovation for your life ksjfkfjioejwvmkmv</p>
                <Button label="Shop Now" iconURL={arrowRight}/>
                <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
                    {statistics.map((stats)=>(
                        <div key={stats.label}>
                            <p className="text-4xl font-bold font-palanquin">{stats.value}</p>
                            <p className="leading-7 text-slate-gray font-montserrat">{stats.label}</p>
                        </div>
                    )

                    )}
                </div>
            </div>
            {/* for image */}
        <div>

        </div>
       </section>
    )


}
export default Bikes