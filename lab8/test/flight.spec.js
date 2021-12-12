const FlightForm = require('../pages/FlightForm');
const assert = require('assert');
const {driver} = require ('../pages/FlightPage.js');
const {flightSiteUrl} = require('../utils/flight.utils');
const {waitTableFlights} = require('../utils/flight.utils');

describe('Test flight site', function() {
    this.timeout(0);

  beforeEach(function () {
    FlightForm.goToFlightSite(flightSiteUrl);
    console.log("afterEach");
  });

  afterEach(async function () {
      driver && driver.quit();
      console.log("afterEach");
  });

   it('Search flight with correct validation', async function() {
    FlightForm
    .setFlightFormValues()
    .findFlights();

    console.log("flightForm");

  await waitTableFlights();
  console.log("await");
  const isFoundFlight = FlightForm.getFoundFlightsLength('div._3oEEPZKhVtt5yklw3-gSdB');

  assert.ok(isFoundFlight);
  })
})