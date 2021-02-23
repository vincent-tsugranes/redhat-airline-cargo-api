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
    let aircraftRegistration = '';
    let aircraftModel = '';
    let departureAirport = '';
    let arrivalAirport = '';

    if (request.query.aircraftRegistration) {
      aircraftRegistration = request.query.aircraftRegistration.toString();
    }

    if (request.query.aircraftModel) {
      aircraftModel = request.query.aircraftModel.toString();
    }

    if (request.query.departureAirport) {
      departureAirport = request.query.departureAirport.toString();
    }

    if (request.query.arrivalAirport) {
      arrivalAirport = request.query.arrivalAirport.toString();
    }

    const cargo = CargoFactory.getRandomCargo(
      aircraftRegistration,
      aircraftModel,
      departureAirport,
      arrivalAirport
    );

    response.send(cargo);
  };
}

export default CargoController;
