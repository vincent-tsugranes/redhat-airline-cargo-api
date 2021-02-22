import * as express from 'express';
import * as luxon from 'luxon';

const url = require('url');
var faker = require('faker');

import { AircraftLayoutFactory } from '../business/aircraftlayoutfactory';
import { CargoFactory } from '../business/cargofactory';

class CargoController {
  public router = express.Router();
  public path = '/cargo';

  constructor() {
    this.intializeRoutes();
  }

  public intializeRoutes() {
    this.router.get(this.path + '/layouts', this.getLayouts);
    this.router.get(this.path + '/random', this.getCargo);
  }

  getLayouts = (request: express.Request, response: express.Response) => {
    const layouts = new AircraftLayoutFactory().getAircraftLayouts();

    response.send(layouts);
  };

  getCargo = (request: express.Request, response: express.Response) => {
    // const flightId = request.params.flightId;
    const cargo = new CargoFactory().getRandomCargo();

    response.send(cargo);
  };
}

export default CargoController;
