import { AircraftLayoutZone } from './aircraftlayoutzone';

export class AircraftLayout {
  id: number = 0;
  aircraft_model: string = '';
  zones: Array<AircraftLayoutZone> = new Array<AircraftLayoutZone>();
}
