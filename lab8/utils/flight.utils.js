const { driver } = require('../pages/FlightPage');
const { By, until } = require('selenium-webdriver');
const flightSiteUrl = 'https://avia.tutu.ru/';

async function waitTableFlights() {
    console.log("waitTableFlights IN");
    return driver.wait(until.elementLocated(By.css('div._3oEEPZKhVtt5yklw3-gSdB')));
}

module.exports = {
    waitTableFlights,
    flightSiteUrl
};