import * as express from 'express';
import * as luxon from 'luxon';

const url = require('url');
var faker = require('faker');

class CargoController {
  public router = express.Router();
  public path = '/airports';

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path + '/flightId', this.getCargo);
  }

  getCargo = (request: express.Request, response: express.Response) => {
    const flightId = request.params.flightId;

    response.send('');
  };
}

export default CargoController;
