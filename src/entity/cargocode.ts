// defined here: https://www.globalbizgate.com/lpd/ac01/docs/1-3-3.pdf
import dgCodes from '../../data/dangerousgoodscodes.json';
import shCodes from '../../data/specialhandlingcodes.json';

export class CargoCode {
  code: string = '';
  color: string = 'blue';
  description: string = '';
  handling_requirements: string = '';
  photo: string = '';
  temperature_sensitive: boolean = false;
  temperature_minimum: number = 0;
  temperature_maximum: number = 0;
  dangerous_goods: boolean = false;

  getList = () => {
    let codes = new Array<CargoCode>();
    dgCodes.dangerousgoodscodes.forEach((dgCode) => {
      const code = new CargoCode();
      code.code = dgCode.code;
      code.description = dgCode.description;
      code.photo = dgCode.image;
      code.temperature_sensitive = dgCode.temperature_sensitive;
      code.dangerous_goods = true;
      codes.push(code);
    });
    shCodes.specialhandlingcodes.forEach((shCode) => {
      const code = new CargoCode();
      code.code = shCode.code;
      code.description = shCode.description;
      code.photo = shCode.image;
      code.temperature_sensitive = shCode.temperature_sensitive;
      code.dangerous_goods = false;
      codes.push(code);
    });
    return codes;
  };
}
