type Route = {
    origin: {
        city: string;
        state: string;
        departureFee: number;
    };
    destination: {
        city: string;
        state: State;
        arrivalFee: number;
        addresses?: {
            street: string;
            serialNumber: string;
            block: string;
        }[]
    };
};

type State = {
    name: string
}

type Origin = Route["origin"];
type Destination = Route["destination"];
type StateOrigin = Origin["state"];
type Address = Destination["addresses"][0];
const tripOrigin: Origin = {
    city: "Denver",
    state: "Colorado",
    departureFee: 13
};

const tripDestination: Destination = {
    city: "Phoenix",
    state: {
        name: "Arizona"
    },
    arrivalFee: 8.5
};