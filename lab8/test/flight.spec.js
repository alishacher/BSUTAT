const FlightForm = require('../pages/FlightForm');
const assert = require('assert');
const {driver} = require ('../pages/FlightPage.js');
const {flightSiteUrl} = require('../utils/flight.utils');
const {waitTableFlights} = require('../utils/flight.utils');

describe('Test flight site', function() {
    this.timeout(0);

  beforeEach(function () {
    FlightForm.goToFlightSite(flightSiteUrl);
  });

  afterEach(async function () {
      driver && driver.quit();
  });

   it('Search flight with correct validation', async function() {
    FlightForm
    .setFlightFormValues()
    .findFlights();

  await waitTableFlights();
  const isFoundFlight = FlightForm.getFoundFlightsLength('div._3oEEPZKhVtt5yklw3-gSdB');
  assert.ok(isFoundFlight);
  })
})