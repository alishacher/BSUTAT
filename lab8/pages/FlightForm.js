const webdriver = require('selenium-webdriver');
const { FlightPage, driver } = require('./FlightPage');
const { By, Key } = webdriver;

class FlightForm extends FlightPage {
    
    isFlightFormCompleted = false;

    cityFrom = 'Москва';
    cityTo = 'Санкт-Петербург';
    dateFrom ='15.02.2022';
    dateTo ='19.02.2022';

    setFlightFormValues() {
        console.log("setFlightFormValues");
        this.chooseTownFrom(this.cityFrom);
        this.chooseTownTo(this.cityTo);
        this.chooseDateFrom(this.dateFrom);
        this.chooseDateTo(this.dateTo);
        this.isFlightFormCompleted = true;
        return this;
    }

    findFlights() {
        console.log("findFlights");
        if (this.isFlightFormCompleted) {
            driver.findElement(By.css('div.button_wrp:nth-child(7) > button:nth-child(1)')).sendKeys(Key.ENTER);
            this.isFlightFormCompleted = false;
        }
    }
}

module.exports = new FlightForm();