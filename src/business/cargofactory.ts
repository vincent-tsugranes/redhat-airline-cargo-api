var faker = require('faker');

import { AircraftLayout } from '../entity/aircraftlayout';
import { AircraftLayoutZone } from '../entity/aircraftlayoutzone';
import { AircraftLayoutZonePosition } from '../entity/aircraftlayoutzoneposition';

import aircraftLayouts from '../../data/aircraftlayouts.json';
import { LoadPlan } from '../entity/loadplan';
import { Package } from '../entity/package';
import { Pallet } from '../entity/pallet';

export class CargoFactory {
  public static getRandomCargo = (
    aircraftRegistration: string,
    aircraftModel: string,
    departureAirport: string,
    arrivalAirport: string
  ) => {
    const loadPlan = new LoadPlan();
    loadPlan.aircraft_registration = aircraftRegistration;
    loadPlan.departure_airport_iata = departureAirport;
    loadPlan.arrival_airport_iata = arrivalAirport;

    let aircraftLayout = aircraftLayouts.find(
      (layout) => layout.aircraft_model == aircraftModel
    );

    if (aircraftLayout === undefined) {
      aircraftLayout =
        aircraftLayouts[Math.floor(Math.random() * aircraftLayouts.length)];
      console.log(
        'Do not have a defined aircraft layout for: ' +
          aircraftModel +
          ' randomly selecting ' +
          aircraftLayout.aircraft_model
      );
    }

    let zoneCount = 0;
    let positionCount = 0;
    let cubicVolumeSqIn = 0;
    let maxLength = 0;
    let maxWidth = 0;
    let maxHeight = 0;

    aircraftLayout.zones.forEach((zone) => {
      zoneCount += 1;

      zone.positions.forEach((position) => {
        positionCount += 1;
        cubicVolumeSqIn =
          cubicVolumeSqIn + position.length * position.width * position.height;

        if (position.length > maxLength) maxLength = position.length;
        if (position.width > maxWidth) maxWidth = position.width;
        if (position.height > maxHeight) maxHeight = position.height;

        let pallet = new Pallet();
        pallet.length = position.length;
        pallet.width = position.width;
        pallet.height = position.height;
        pallet.origin_airport_iata = departureAirport;
        pallet.destination_airport_iata = arrivalAirport;
        pallet.position_code = position.code;
        const totalPalletVolume = pallet.length * pallet.width * pallet.height;
        const randomPackageCount = faker.random.number({ min: 6, max: 1000 });
        pallet.packages = GeneratePackages(
          randomPackageCount,
          totalPalletVolume,
          pallet.length,
          pallet.width,
          pallet.height,
          departureAirport,
          arrivalAirport
        );
        pallet.packages.forEach((packageObject) => {
          packageObject.position_code = position.code;
        });
        pallet.weight_total = pallet.totalPackageWeight();

        loadPlan.pallets.push(pallet);
      });
    });

    loadPlan.aircraft_layout = aircraftLayout;
    loadPlan.weight_net = loadPlan.totalPackageWeight();

    console.log(
      'Total Available Cubic Volume (Sq In): ' +
        cubicVolumeSqIn.toLocaleString()
    );
    console.log('Total Cargo Positions: ' + positionCount);
    console.log('Total Packages: ' + loadPlan.totalPackages().toLocaleString());
    console.log(
      'Total Package Weight: ' + loadPlan.weight_net.toLocaleString()
    );

    return loadPlan;
  };
}

function GeneratePackages(
  count: number,
  max_total_volume: number,
  max_package_length: number,
  max_package_width: number,
  max_package_height: number,
  origin: string,
  destination: string
) {
  let packages = new Array<Package>();
  let total_volume = 0;

  const max_package_weight = 100;

  for (let index = 0; index < count; index++) {
    //generate package of random dimensions
    const packageObject = new Package().random(
      max_package_length,
      max_package_width,
      max_package_height,
      max_package_weight
    );

    //set the origin and destination
    packageObject.origin_airport_iata = origin;
    packageObject.destination_airport_iata = destination;

    //prevent more packages than total volume allows
    if (total_volume + packageObject.volume() <= max_total_volume) {
      packages.push(packageObject);
      total_volume = total_volume + packageObject.volume();
    }
  }

  return packages;
}
