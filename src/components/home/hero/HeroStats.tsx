import { heroStats } from "../../../data/heroData";

const HeroStats = () => {

    return (

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

            {heroStats.map((item, index) => (

                <div
                    key={index}
                    className="text-center"
                >

                    <h2 className="text-4xl font-bold text-cyan-400">

                        {item.number}

                    </h2>

                    <p className="text-gray-300 mt-2">

                        {item.title}

                    </p>

                </div>

            ))}

        </div>

    );

};

export default HeroStats;