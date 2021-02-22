import { CargoCode } from './cargocode';
var faker = require('faker');

export class Package {
  id: number = 0;
  position_code: string = '';
  destination_airport_iata: string = '';
  arrival_airport_iata: string = '';
  weight_net: number = 0;
  weight_tare: number = 0;
  weight_total: number = 0;

  length: number = 0;
  width: number = 0;
  height: number = 0;

  note: string = '';

  cargo_codes: Array<CargoCode> = new Array<CargoCode>();

  volume = () => {
    return this.length * this.width * this.height;
  };

  random = (
    max_package_length: number,
    max_package_width: number,
    max_package_height: number
  ) => {
    const packageObject = new Package();
    packageObject.length = faker.random.number({ min: 6, max: 36 });
    packageObject.width = faker.random.number({ min: 6, max: 36 });
    packageObject.height = faker.random.number({ min: 6, max: 36 });

    // .05% chance of special cargo
    const packageRandomCode = Math.random() * 100;
    if (packageRandomCode <= 0.5) {
      const cargoCodeList = new CargoCode().getList();
      const randomElement =
        cargoCodeList[Math.floor(Math.random() * cargoCodeList.length)];
      packageObject.cargo_codes.push(randomElement);
    }

    return packageObject;
  };
}
