type ToyCar = {
    wheel: 4
    seat: 4
}

function isCarPrediction(x: unknown): x is ToyCar {
    return true
}

function isCarBoolean(x: unknown): boolean {
    return true
}

function callIsCar(foo: any) {
    if (isCarPrediction(foo)) {
        foo.seat = 4;
    }
    if (isCarBoolean(foo)) {
        //foo.
    }
}


type GasolineCar = {
    kind: "Gasoline"
    Fuel: "Gas"
}

type ElectricCar = {
    kind: "Electric"
    charge: "electricity"
}

type Car = GasolineCar | ElectricCar;

function isGasolineCart(car: Car): car is GasolineCar {
     return car.kind==='Gasoline'
}

function isElectricCar(car: Car): car is ElectricCar {
    return car.kind==='Electric'
}

function getInStation(car :Car) {
    if("Fuel" in car){
        console.log(`Need fuel more ${car.Fuel}`)
    }
    

    if("charge" in car ){
        console.log(`Need charge more ${car.charge}`)
    }
}

getInStation({kind:"Gasoline",Fuel:"Gas"})
getInStation({kind:"Electric",charge:"electricity"})