import { CargoCode } from './cargocode';

export class Pallet {
  id: number = 0;
  uld_code: string = '';
  position_code: string = '';
  position: string = '';
  destination_airport_iata: string = '';

  arrival_airport_iata: string = '';
  weight_net: number = 0;
  weight_tare: number = 0;
  weight_total: number = 0;
  height_code: string = '';
  note: string = '';

  cargo_codes: Array<CargoCode> = new Array<CargoCode>();
}
