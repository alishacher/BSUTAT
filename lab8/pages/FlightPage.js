const webdriver = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.addArguments("test-type");
chromeOptions.addArguments("start-maximized");
chromeOptions.addArguments("--headless");
chromeOptions.addArguments("--no-sandbox");
chromeOptions.addArguments("--disable-dev-shm-usage");
const { By, Key } = webdriver;
const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

class FlightPage {
    goToFlightSite(theURL){
        driver.get(theURL);
    }

    closeWelcomeModal(css) {
        this.clickByCss(css);
        return this;
    }

    openFlightsTab(css) {
        this.clickByCss(css);
        return this;
    }

    getFoundFlightsLength(css) {
        return driver.findElement(By.css(css))
        .findElements(By.css('div._3oEEPZKhVtt5yklw3-gSdB > div._3myc0zS07d6p2suflgjuDQ'))
        .then(function(flights){
            return flights.length;
        });
    }

    enterTextByCss(css, searchText){
        driver.findElement(By.css(css)).sendKeys(searchText);
    }

    chooseTownFrom(townFrom){
        driver.findElement(By.css('[name="city_from"]')).click();
        driver.findElement(By.css('[name="city_from"]')).sendKeys(townFrom);
        driver.findElement(By.css('[name="city_from"]')).sendKeys(Key.ENTER);
    }

    chooseTownTo(townTo){
        driver.findElement(By.css('[name="city_to"]')).click();
        driver.findElement(By.css('[name="city_to"]')).sendKeys(townTo);
        driver.findElement(By.css('[name="city_to"]')).sendKeys(Key.ENTER);
    }

    chooseDateFrom(dateFrom){
        driver.findElement(By.css('[name="date_from"]')).click();
        driver.findElement(By.css('[name="date_from"]')).sendKeys(dateFrom);
    }

    chooseDateTo(dateTo){
        driver.findElement(By.css('[name="date_back"]')).click();
        driver.findElement(By.css('[name="date_back"]')).sendKeys(dateTo);
    }

    clickByCss(css){
        driver.findElement(By.css(css)).click();
    }

    
}

module.exports = {
  FlightPage,
  driver
};