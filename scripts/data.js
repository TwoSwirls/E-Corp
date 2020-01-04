const TILE = {
    empty: 0,
    river: 1,
    mount: 2,
    solarpanel: 3,
    wind: 4,
    hydrodam: 5,
    biofuel: 6,
    coal: 7,
    oil: 8,
    natgas: 9,
    nuclear: 10,
}

const TILE_IMAGE = {
    2: "assets/mount.png",
    3: "assets/solarpan.png",
    4: "assets/windturbine.png",
    5: "assets/hydrodam.png",
    6: "assets/biofuel.png",
    7: "assets/coal.png",
    8: "assets/oil.png",
    9: "assets/natgas.png",
    10: "assets/nuclear.png"
}

const TILE_DATA = {
    3:{
        tile: "Solar Panels",
        energy: [100, 200],
        cost: 200,
        upkeep: 50,
        upkeepIncrease: 0,
        desc: "(Renewable) Photovoltaic panels are one method to capture solar energy, converting the thermal energy into electricity. The process does not contribute to climate change. Compared to other renewable energies, the maintenance costs are very low. Additionally, they are relatively cheap to install. However, they are neither space or energy efficient, as they rely on their exposure to the sun."
    },
    4:{
        tile: "Wind Turbines",
        energy: [200, 400],
        cost: 400,
        upkeep: 100,
        upkeepIncrease: 0,
        desc: "(Renewable)  Releasing no greenhouse gases, wind turbines are able to convert the wind’s kinetic energy into electricity. While the costs of building and maintaining a wind turbine are falling as technology improves, they are still relatively pricey. Also, similar to solar panels, wind turbines are inconsistent, relying on good wind speeds. Despite this, wind turbines still make for a hopeful alternative to other non-renewable energies."
    },
    5:{
        tile: "Hydro Dam",
        energy: 1000,
        cost: 1000,
        upkeep: 100,
        upkeepIncrease: 0,
        desc: "(Renewable) A hydroelectric dam relies on the kinetic energy in either a water reservoir or a flowing river. While the building cost of a hydro dam is expensive, maintenance is much cheaper. In addition, no greenhouse gasses are emitted through this form of energy production. However, hydro dams are environmentally damaging due to their reliance on own a flowing water source. "
    },
    6:{
        tile: "Biofuel Plant",
        energy: 500,
        cost: 500,
        upkeep: 300,
        upkeepIncrease: 0,
        desc: "(Renewable) Biomatter such as wood and corn are used to make biofuel. There are two main types of biofuel: ethanol, and biodiesel. While technically renewable, relying on replenishable resources, if the process were conducted improperly the production would instead contribute to climate change. Another limitation for biofuel production is its heavy necessity for farming land in order to grow the biomass needed."
    },
    7:{
        tile: "Coal Plant",
        energy: 450,
        cost: 300,
        upkeep: 400,
        upkeepIncrease: 20,
        desc: "(Non-Renewable) Coal power plants burn coal causing steam to be converted into electricity. In doing so, greenhouse gases are released. Additionally, with the limited amount of coal left, strip mines are used. Much like the power plants, these mines also release greenhouse gases. While much cheaper than other non-renewable energy sources, such as natural gas or oil, coal power plants are still more expensive than renewable energy sources."
    },
    8:{
        tile: "Oil Plant",
        energy: 600,
        cost: 300,
        upkeep: 200,
        upkeepIncrease: 20,
        desc: "(Non-Renewable) Oil, also known as petroleum, is refined into products like gasoline, and play a key role in making in plastic products. Also, oil can be converted into electricity when it is burned. As a hydrocarbon, a compound of hydrogen and carbon, oil releases carbon dioxide and soot when it is burned, contributing to climate change. Oil plants are the cheapest to maintain and operate compared to other non-renewable options. However, like coal, the supply for oil is limited. "
    },
    9:{
        tile: "Natural Gas Plant",
        energy: 500,
        cost: 300,
        upkeep: 300,
        upkeepIncrease: 20,
        desc: " (Non-Renewable) A natural gas plant uses gas turbines in order to convert the natural gas into electricity. The production of natural gas releases less pollutants and greenhouses gases compared to other non-renewable energies. While natural gas plants lead to relatively better overall air quality, they still release a sizable amount of carbon dioxide. Even so, they have cheaper maintenance costs than coal plants"
    },
    10:{
        tile: "Nuclear Plant",
        energy: 1500,
        cost: 1000,
        upkeep: 500,
        upkeepIncrease: 10,
        desc: "(Non-Renewable Energy) Nuclear power plants use nuclear fission, or the splitting of atoms, in order to create electricity. In doing so, nuclear plants produce a lot more energy than any other energy source. Nuclear plants produce no greenhouse gases, but instead have environmentally damaging nuclear waste. The lifetime of nuclear power plants are long. Although the waste is little, the waste itself takes an extremely long time to decay and is hard to efficiently dispose of."
    }
}

export { TILE, TILE_IMAGE, TILE_DATA }