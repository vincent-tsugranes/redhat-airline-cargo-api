// defined here: https://www.globalbizgate.com/lpd/ac01/docs/1-3-3.pdf
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
}
