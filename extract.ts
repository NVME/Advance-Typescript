type Trip =
  | {
      origin: {
        uuid: string;
        city: string;
        state: string;
      };
    }
  | {
      originUuid: string;
    };

type TripWithOriginRef = Extract<Trip, { originUuid: string }>;

type TripWithOriginWhole = Extract<Trip, { origin: { uuid: string } }>;

const tripOriginRef = { originUuid: "123" };

const tripOriginWhole = {
  origin: {
    uuid: "123",
    city: "Denver",
    state: "Coloro"
  }
};

const isRef = (trip: Trip): trip is TripWithOriginRef => {
  return "originUuid" in trip;
};

const isDraft = (trip: Trip): trip is TripWithOriginWhole => {
  return "origin" in trip;
};

const result = [tripOriginRef, tripOriginWhole].filter(isRef);
