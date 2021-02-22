"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = __importStar(require("express"));
var url = require('url');
var faker = require('faker');
var aircraftlayoutfactory_1 = require("../business/aircraftlayoutfactory");
var CargoController = (function () {
    function CargoController() {
        this.router = express.Router();
        this.path = '/cargo';
        this.getLayouts = function (request, response) {
            var layouts = new aircraftlayoutfactory_1.AircraftLayoutFactory().getAircraftLayouts();
            response.send(layouts);
        };
        this.getCargo = function (request, response) {
            var flightId = request.params.flightId;
            response.send('');
        };
        this.intializeRoutes();
    }
    CargoController.prototype.intializeRoutes = function () {
        this.router.get(this.path + '/layouts', this.getLayouts);
        this.router.get(this.path + '/flightId', this.getCargo);
    };
    return CargoController;
}());
exports.default = CargoController;
//# sourceMappingURL=cargocontroller.js.map