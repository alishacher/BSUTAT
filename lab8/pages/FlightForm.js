const webdriver = require('selenium-webdriver');
const { FlightPage, driver } = require('./FlightPage');
const { By, Key } = webdriver;

class FlightForm extends FlightPage {
    
    isFlightFormCompleted = false;

    cityFrom = 'Москва';
    cityTo = 'Сочи';
    dateFrom ='15.02.2022';
    dateTo ='19.02.2022';

    setFlightFormValues() {
        this.chooseTownFrom(this.cityFrom);
        this.chooseTownTo(this.cityTo);
        this.chooseDateFrom(this.dateFrom);
        this.chooseDateTo(this.dateTo);
        this.isFlightFormCompleted = true;
        return this;
    }

    findFlights() {
        if (this.isFlightFormCompleted) {
            driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div/div/div[3]/div/button')).click();
            this.isFlightFormCompleted = false;
        }
    }
}

module.exports = new FlightForm();