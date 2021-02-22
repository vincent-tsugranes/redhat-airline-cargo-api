import { AircraftLayout } from '../entity/aircraftlayout';
import { AircraftLayoutZone } from '../entity/aircraftlayoutzone';
import { AircraftLayoutZonePosition } from '../entity/aircraftlayoutzoneposition';

import aircraftLayouts from '../../data/aircraftlayouts.json';

export class AircraftLayoutFactory {
  public getAircraftLayouts = () => {
    // const layouts = new Array<AircraftLayout>();
    // layouts.push(get747400Layout());
    // return layouts;
    return aircraftLayouts;
  };
}
function get747400Layout() {
  const layout = new AircraftLayout();
  layout.id = 747400;
  layout.aircraft_model = '747-400';

  const zone1 = new AircraftLayoutZone();
  zone1.id = 1;
  zone1.name = 'Main Deck';
  zone1.code = 'MD';
  zone1.rows = 17;
  zone1.columns = 2;
  layout.zones.push(zone1);

  const posA1 = new AircraftLayoutZonePosition();
  posA1.id = 1;
  posA1.code = 'A1';
  posA1.columns = 2;
  zone1.positions.push(posA1);

  const posA2 = new AircraftLayoutZonePosition();
  posA2.id = 2;
  posA2.code = 'A2';
  posA2.columns = 2;
  zone1.positions.push(posA2);

  const posB1 = new AircraftLayoutZonePosition();
  posB1.id = 3;
  posB1.code = 'B1';
  posB1.columns = 2;
  zone1.positions.push(posB1);

  const posCL = new AircraftLayoutZonePosition();
  posCL.id = 4;
  posCL.code = 'CL';
  posCL.columns = 1;
  zone1.positions.push(posCL);

  const posCR = new AircraftLayoutZonePosition();
  posCR.id = 5;
  posCR.code = 'CR';
  posCR.columns = 1;
  zone1.positions.push(posCR);

  const posDL = new AircraftLayoutZonePosition();
  posDL.id = 6;
  posDL.code = 'DL';
  posDL.columns = 1;
  zone1.positions.push(posDL);

  const posDR = new AircraftLayoutZonePosition();
  posDR.id = 7;
  posDR.code = 'DR';
  posDR.columns = 1;
  zone1.positions.push(posDR);

  const posEL = new AircraftLayoutZonePosition();
  posEL.id = 8;
  posEL.code = 'EL';
  posEL.columns = 1;
  zone1.positions.push(posEL);

  const posER = new AircraftLayoutZonePosition();
  posER.id = 9;
  posER.code = 'ER';
  posER.columns = 1;
  zone1.positions.push(posER);

  const posFL = new AircraftLayoutZonePosition();
  posFL.id = 10;
  posFL.code = 'FL';
  posFL.columns = 1;
  zone1.positions.push(posFL);

  const posFR = new AircraftLayoutZonePosition();
  posFR.id = 11;
  posFR.code = 'FR';
  posFR.columns = 1;
  zone1.positions.push(posFR);

  const posGL = new AircraftLayoutZonePosition();
  posGL.id = 12;
  posGL.code = 'GL';
  posGL.columns = 1;
  zone1.positions.push(posGL);

  const posGR = new AircraftLayoutZonePosition();
  posGR.id = 13;
  posGR.code = 'GR';
  posGR.columns = 1;
  zone1.positions.push(posGR);

  const posHL = new AircraftLayoutZonePosition();
  posHL.id = 14;
  posHL.code = 'HL';
  posHL.columns = 1;
  zone1.positions.push(posHL);

  const posHR = new AircraftLayoutZonePosition();
  posHR.id = 15;
  posHR.code = 'HR';
  posHR.columns = 1;
  zone1.positions.push(posHR);

  const posJL = new AircraftLayoutZonePosition();
  posJL.id = 16;
  posJL.code = 'JL';
  posJL.columns = 1;
  zone1.positions.push(posJL);

  const posJR = new AircraftLayoutZonePosition();
  posJR.id = 17;
  posJR.code = 'JR';
  posJR.columns = 1;
  zone1.positions.push(posJR);

  const posKL = new AircraftLayoutZonePosition();
  posKL.id = 18;
  posKL.code = 'KL';
  posKL.columns = 1;
  zone1.positions.push(posKL);

  const posKR = new AircraftLayoutZonePosition();
  posKR.id = 19;
  posKR.code = 'KR';
  posKR.columns = 1;
  zone1.positions.push(posKR);

  const posLL = new AircraftLayoutZonePosition();
  posLL.id = 20;
  posLL.code = 'LL';
  posLL.columns = 1;
  zone1.positions.push(posLL);

  const posLR = new AircraftLayoutZonePosition();
  posLR.id = 21;
  posLR.code = 'LR';
  posLR.columns = 1;
  zone1.positions.push(posLR);

  const posML = new AircraftLayoutZonePosition();
  posML.id = 22;
  posML.code = 'ML';
  posML.columns = 1;
  zone1.positions.push(posML);

  const posMR = new AircraftLayoutZonePosition();
  posMR.id = 23;
  posMR.code = 'MR';
  posMR.columns = 1;
  zone1.positions.push(posMR);

  const posPL = new AircraftLayoutZonePosition();
  posPL.id = 24;
  posPL.code = 'PL';
  posPL.columns = 1;
  zone1.positions.push(posPL);

  const posPR = new AircraftLayoutZonePosition();
  posPR.id = 25;
  posPR.code = 'PR';
  posPR.columns = 1;
  zone1.positions.push(posPR);

  const posRL = new AircraftLayoutZonePosition();
  posRL.id = 26;
  posRL.code = 'RL';
  posRL.columns = 1;
  zone1.positions.push(posRL);

  const posRR = new AircraftLayoutZonePosition();
  posRR.id = 27;
  posRR.code = 'PR';
  posRR.columns = 1;
  zone1.positions.push(posRR);

  const posSL = new AircraftLayoutZonePosition();
  posSL.id = 28;
  posSL.code = 'SL';
  posSL.columns = 1;
  zone1.positions.push(posSL);

  const posSR = new AircraftLayoutZonePosition();
  posSR.id = 29;
  posSR.code = 'SR';
  posSR.columns = 1;
  zone1.positions.push(posSR);

  const posT = new AircraftLayoutZonePosition();
  posT.id = 30;
  posT.code = 'T';
  posT.columns = 1;
  zone1.positions.push(posT);

  return layout;
}
