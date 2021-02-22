import { AircraftLayout } from '../entity/aircraftlayout';
import { AircraftLayoutZone } from '../entity/aircraftlayoutzone';
import { AircraftLayoutZonePosition } from '../entity/aircraftlayoutzoneposition';

import aircraftLayouts from '../../data/aircraftlayouts.json';
import { LoadPlan } from '../entity/loadplan';

export class CargoFactory {
  public getRandomCargo = () => {
    const loadPlan = new LoadPlan();

    const randomLayout =
      aircraftLayouts[Math.floor(Math.random() * aircraftLayouts.length)];
    let zoneCount = 0;
    let positionCount = 0;
    let cubicVolumeSqIn = 0;

    randomLayout.zones.forEach((zone) => {
      zoneCount += 1;

      zone.positions.forEach((position) => {
        positionCount += 1;
        cubicVolumeSqIn =
          cubicVolumeSqIn + position.length * position.width * position.height;
      });
    });

    loadPlan.aircraft_layout = randomLayout;

    console.log('Total Cubic Volume: ' + cubicVolumeSqIn);
    console.log('Total Cargo Positions: ' + positionCount);

    return loadPlan;
  };
}
