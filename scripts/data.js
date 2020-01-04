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

const TILE_MENU = {
    3:{
        tile: "Solar Panels",
        cost: 200,
        desc: "(Renewable) Photovoltaic panels are one method to capture solar energy, converting the thermal energy into electricity. Compared to other renewable energies, the maintenance costs are very low. Additionally, they are relatively cheap to install. However, they are neither space or energy efficient, as they rely on their exposure to the sun."
    },
    4:{
        tile: "Wind Turbines",
        cost: 400,
        desc: "(Renewable) The wind turbine’s blades converts the wind’s kinetic energy into electricity by spinning a generator. While the costs of building and maintaining a wind turbine are falling as technology improves, it is still relatively pricey. Also, similar to solar panels, wind turbines are inconsistent, relying on good wind speeds."
    },
    5:{
        tile: "Hydro Dam",
        cost: 1000,
        desc: "(Renewable) A hydroelectric dam relies on the kinetic energy in either a water reservoir or a flowing river. While the building cost of a hydro dam is expensive, maintenance is much cheaper. In addition, no greenhouse gasses are emitted through this form of energy production."
    },
    6:{
        tile: "Biofuel Plant",
        cost: 500,
        desc: ""
    },
    7:{
        tile: "Coal Plant",
        cost: 300,
        desc: ""
    },
    8:{
        tile: "Oil Plant",
        cost: 300,
        desc: ""
    },
    9:{
        tile: "Natural Gas Plant",
        cost: 300,
        desc: ""
    },
    10:{
        tile: "Nuclear Plant",
        cost: 800,
        desc: ""
    }
}

export { TILE, TILE_IMAGE, TILE_MENU }