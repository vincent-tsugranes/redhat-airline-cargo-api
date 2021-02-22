import { AircraftLayoutZonePosition } from './aircraftlayoutzoneposition';
export class AircraftLayoutZone {
  id: number = 0;
  name: string = '';
  code: string = '';
  description: string = '';
  positions: Array<AircraftLayoutZonePosition> = new Array<
    AircraftLayoutZonePosition
  >();
  rows: number = 0;
  columns: number = 0;
}
