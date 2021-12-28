const PageBase = require('./PageBase.page');
const {By, until} = require("selenium-webdriver");

class TrainTicketPage extends PageBase {
    #TRAINURL = 'https://www.tutu.ru/poezda/';

    _townFromInputCss = '[class = "input_field j-station_input  j-station_input_from"]';
    _townToInputCss = '[class = "input_field j-station_input  j-station_input_to"]';
    _dateFromInputCss = '[class = "input_field j-permanent_open j-input j-date_to"]';
    _townFromXpath = '//*[@id="wrapper"]/div[3]/div/form/div/div/div[1]/div/div[2]/span[1]/span';
    _townToXpath = '//*[@id="wrapper"]/div[3]/div/form/div/div/div[3]/div/div[2]/span[1]/span';
    _dateFrom ='15.02.2022';
    _ticketResultXpath = '//*[@id="root"]/div/div[3]/div/div[1]/span[1]/span/span';
    _townFromMessageXpath = '//*[@id="wrapper"]/div[3]/div/div/div[3]';
    _townToMessageXpath = '//*[@id="wrapper"]/div[3]/div/div/div[3]';


    constructor(driver) {
        super(driver);
    }
    
    async waitTownFromInput() {
        return this.driver.wait(until.elementLocated(By.css(this._townFromInputCss)));
    }

    async waitTownToInput() {
        return this.driver.wait(until.elementLocated(By.css(this._dateFromInputCss)));
    }

    async waitDateFromInput() {
        return this.driver.wait(until.elementLocated(By.css(this._townToInputCss)));
    }

    async waitTicketResult() {
        return this.driver.wait(until.elementLocated(By.xpath(this._ticketResultXpath)));
    }

    async waitErrorTownFrom() {
        return this.driver.wait(until.elementLocated(By.xpath(this._townFromMessageXpath)));
    }

    async waitErrorTownTo() {
        return this.driver.wait(until.elementLocated(By.xpath(this._townToMessageXpath)));
    }

    goToTrainPage() {
        this.logger.info('Open train page');
        this.driver.get(this.#TRAINURL);
        return this;
    }

    chooseTownFrom() {
        this.logger.info('Choose town from');
        this.clickBy('xpath', this._townFromXpath);
        return this;
    }

    chooseTownTo() {
        this.logger.info('Choose town to');
        this.clickBy('xpath', this._townToXpath);
        return this;
    }

    chooseDateFrom() {
        this.logger.info('Choose date from');
        this.enterTextBy('css', this._dateFromInputCss, this._dateFrom );
        return this;
    }

    async getTicketListResult() {
        this.logger.info('Searching for tickets');
        const ticketsResultElement = await this.driver.findElement(By.xpath(this._ticketResultXpath));
        this.logger.info('Get tickets from Moskow to Peterburg');
        return ticketsResultElement.getText();
    }

    async getTownFromError() {
        this.logger.info('Searching for message');
        const errorMessageElement = await this.driver.findElement(By.xpath(this._townFromMessageXpath));
        this.logger.info('Get error message');
        return errorMessageElement.getText();
    }

    async getTownToError() {
        this.logger.info('Searching for message');
        const errorMessageElement = await this.driver.findElement(By.xpath(this._townToMessageXpath));
        this.logger.info('Get error message');
        return errorMessageElement.getText();
    }
}

module.exports = TrainTicketPage;