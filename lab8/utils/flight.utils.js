const { driver } = require('../pages/FlightPage');
const { By, until } = require('selenium-webdriver');
const flightSiteUrl = 'https://www.tutu.ru/';

async function waitTableFlights() {
    console.log("waitTableFlights");
    return driver.wait(until.elementLocated(By.css('div._3oEEPZKhVtt5yklw3-gSdB')));
}

module.exports = {
    waitTableFlights,
    flightSiteUrl
};