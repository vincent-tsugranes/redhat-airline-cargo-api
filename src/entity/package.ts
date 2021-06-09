import { CargoCode } from './cargocode';
var faker = require('faker');

export class Package {
  id: number = 0;
  position_code: string = '';
  origin_airport_iata: string = '';
  destination_airport_iata: string = '';
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
    max_package_height: number,
    max_package_weight: number
  ) => {
    const packageObject = new Package();

    const packageRandomSize = Math.random() * 100;

    // 80% chance of being small
    if (packageRandomSize <= 80) {
      packageObject.length = faker.datatype.number({
        min: 6,
        max: max_package_length / 10,
      });
      packageObject.width = faker.datatype.number({
        min: 6,
        max: max_package_width / 10,
      });
      packageObject.height = faker.datatype.number({
        min: 6,
        max: max_package_height / 10,
      });
      packageObject.weight_total = faker.datatype.number({
        min: 2,
        max: max_package_weight / 10,
      });
    }

    // 15% chance of being medium
    if (packageRandomSize > 80 && packageRandomSize <= 95) {
      packageObject.length = faker.datatype.number({
        min: 6,
        max: max_package_length / 5,
      });
      packageObject.width = faker.datatype.number({
        min: 6,
        max: max_package_width / 5,
      });
      packageObject.height = faker.datatype.number({
        min: 6,
        max: max_package_height / 5,
      });
      packageObject.weight_total = faker.datatype.number({
        min: 2,
        max: max_package_weight / 5,
      });
    }

    // 5% chance of being large
    if (packageRandomSize > 95) {
      packageObject.length = faker.datatype.number({
        min: 6,
        max: max_package_length / 2,
      });
      packageObject.width = faker.datatype.number({
        min: 6,
        max: max_package_width / 2,
      });
      packageObject.height = faker.datatype.number({
        min: 6,
        max: max_package_height / 2,
      });
      packageObject.weight_total = faker.datatype.number({
        min: 2,
        max: max_package_weight / 2,
      });
    }

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
