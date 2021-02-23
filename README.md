# redhat-airline-cargo-api

npm install

npm run start-dev

you can set a port with the environment variable PORT, defaults to 9005

http://localhost:9005/cargo/random?aircraftRegistration=N172VT&aircraftModel=747-400&departureAirport=JFK&arrivalAirport=DXB

This will return a large json representing all of the packages sorted into pallets on the aircraft, with output like:

Total Available Cubic Volume (Sq In): 38,045,760
Total Cargo Positions: 43
Total Packages: 14,917
Total Package Weight: 114,434
