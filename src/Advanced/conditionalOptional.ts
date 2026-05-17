type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;

type RichPeoplVehicle = {
  bike: string;
  car: string;
};

// type CheckVehicle<T>=T extends "bike"|'car'|'ship'?true:false
type CheckVehicle<T> = T extends keyof RichPeoplVehicle ? true : false;

type HasBike = CheckVehicle<"bike">;
