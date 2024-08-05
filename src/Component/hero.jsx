






function HeroSection() {
    return (
        
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl font-bold  mb-4 font-medium text-gray-900">
                    Enjoy Our
                  
                        <br className="hidden lg:inline-block" />
                        Delicious Meal
                    </h1>
                    <p className="mb-8 leading-relaxed">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-200 rounded text-lg">
                                BOOK A TABLE
                        </button>
                         
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="https://themewagon.github.io/restoran/img/hero.png"
                    />
                </div>
            </div>
        </section>




    )
}

export default HeroSection