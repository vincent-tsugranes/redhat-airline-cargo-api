var faker = require('faker');

import { AircraftLayout } from '../entity/aircraftlayout';
import { AircraftLayoutZone } from '../entity/aircraftlayoutzone';
import { AircraftLayoutZonePosition } from '../entity/aircraftlayoutzoneposition';

import aircraftLayouts from '../../data/aircraftlayouts.json';
import { LoadPlan } from '../entity/loadplan';
import { Package } from '../entity/package';
import { Pallet } from '../entity/pallet';

export class CargoFactory {
  public getRandomCargo = () => {
    const loadPlan = new LoadPlan();

    const randomLayout =
      aircraftLayouts[Math.floor(Math.random() * aircraftLayouts.length)];
    let zoneCount = 0;
    let positionCount = 0;
    let cubicVolumeSqIn = 0;
    let maxLength = 0;
    let maxWidth = 0;
    let maxHeight = 0;

    randomLayout.zones.forEach((zone) => {
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

        const totalPalletVolume = pallet.length * pallet.width * pallet.height;
        const randomPackageCount = faker.random.number({ min: 6, max: 1000 });
        pallet.packages = GeneratePackages(
          randomPackageCount,
          totalPalletVolume,
          pallet.length,
          pallet.width,
          pallet.height
        );
        pallet.position_code = position.code;
        loadPlan.pallets.push(pallet);
      });
    });

    loadPlan.aircraft_layout = randomLayout;

    console.log('Total Available Cubic Volume: ' + cubicVolumeSqIn);
    console.log('Total Cargo Positions: ' + positionCount);
    console.log('Total Packages: ' + loadPlan.totalPackages());
    return loadPlan;
  };
}

function GeneratePackages(
  count: number,
  max_total_volume: number,
  max_package_length: number,
  max_package_width: number,
  max_package_height: number
) {
  let packages = new Array<Package>();
  let total_volume = 0;

  for (let index = 0; index < count; index++) {
    const packageObject = new Package().random(
      max_package_length,
      max_package_width,
      max_package_height
    );

    if (total_volume + packageObject.volume() <= max_total_volume) {
      packages.push(packageObject);
      total_volume = total_volume + packageObject.volume();
    }
  }

  return packages;
}
