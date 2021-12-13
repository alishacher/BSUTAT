const webdriver = require('selenium-webdriver');
const chrome = require("selenium-webdriver/chrome");
const chromeOptions = new chrome.Options();
chromeOptions.addArguments("test-type");
chromeOptions.addArguments("start-maximized");
chromeOptions.addArguments("--headless");
chromeOptions.addArguments("window-size=1920,1080");
chromeOptions.addArguments("--no-sandbox");
chromeOptions.addArguments("--disable-dev-shm-usage");
chromeOptions.addArguments("--user-agent='Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 640 XL LTE) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Mobile Safari/537.36 Edge/12.10166'");
const { By, Key } = webdriver;
const driver = new webdriver.Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();

class FlightPage {
    goToFlightSite(theURL){
        driver.get(theURL);
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
        driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div/div/div[1]/div/div[1]/div[1]/span/span[1]')).click();
    }

    chooseTownTo(townTo){
        driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[2]/div/div/div/div/div/div[1]/div/div[1]/div[2]/span/span[1]')).click();
    }

    chooseDateFrom(dateFrom){
        driver.findElement(By.css('[class="o33561 o33660 o33655 o33656"]')).click();
        driver.findElement(By.css('[class="o33561 o33660 o33655 o33656"]')).sendKeys(dateFrom);
        driver.wait(webdriver.until.elementTextIs(By.css('[class="o33561 o33660 o33655 o33656"]'), dateFrom), 10000);
    }

    chooseDateTo(dateTo){
        driver.findElement(By.css('[class="o33561 o33665 o33655 o33656"]')).click();
        driver.findElement(By.css('[class="o33561 o33665 o33655 o33656"]')).sendKeys(dateTo);
        driver.wait(webdriver.until.elementTextIs(By.css('[class="o33561 o33665 o33655 o33656"]'), dateTo), 10000);
    }

    clickByCss(css){
        driver.findElement(By.css(css)).click();
    }

    
}

module.exports = {
  FlightPage,
  driver
};