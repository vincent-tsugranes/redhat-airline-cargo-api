import { Package } from './package';
import { CargoCode } from './cargocode';

export class Pallet {
  id: number = 0;
  uld_code: string = '';
  position_code: string = '';
  position: string = '';
  destination_airport_iata: string = '';
  origin_airport_iata: string = '';

  weight_net: number = 0;
  weight_tare: number = 0;
  weight_total: number = 0;

  length: number = 0;
  width: number = 0;
  height: number = 0;

  note: string = '';

  packages: Array<Package> = new Array<Package>();

  getCargoCodes = () => {
    let codes = new Array<CargoCode>();
    this.packages.forEach((p) => {
      codes.concat(p.cargo_codes);
    });
    return codes;
  };

  totalPackageWeight = () => {
    let totalPackageWeight = 0;
    this.packages.forEach((packageObject) => {
      totalPackageWeight = totalPackageWeight + packageObject.weight_total;
    });
    return totalPackageWeight;
  };
}
