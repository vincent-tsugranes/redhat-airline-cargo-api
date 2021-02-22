import { Pallet } from './pallet';
import { AircraftLayout } from './aircraftlayout';

export class LoadPlan {
  id: number = 0;
  flight_id: number = 0;
  aircraft_registration: string = '';
  departure_airport_iata: string = '';
  arrival_airport_iata: string = '';
  weight_gross: number = 0;
  weight_net: number = 0;
  weight_under: number = 0;
  weight_units_of_measure: string = 'K';

  aircraft_layout: AircraftLayout = new AircraftLayout();
  pallets: Array<Pallet> = new Array<Pallet>();
}
