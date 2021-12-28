const PageBase = require('./PageBase.page');
const {By, until} = require("selenium-webdriver");

class AviaTicketPage extends PageBase {
    #AVIAURL = 'https://avia.tutu.ru/';

    _ticketResultXpath ='/html/body/div[2]/div/div[3]/div/div[1]/span[1]/span/span[2]/span';
    _townFromInputCss = '[class="o33561 o33577"]';
    _townToInputCss = '[class="o33561 o33644"]';
    _dateFromInputCss = '[class="o33561 o33660 o33655 o33656"]';
    _dateToInputCss = '[class="o33561 o33665 o33655 o33656"]';
    _townFromXpath = '//*[@id="root"]/div/div[2]/div[2]/div/div/div/div/div/div[1]/div/div[1]/div[1]/span/span[1]';
    _townToXpath = '//*[@id="root"]/div/div[2]/div[2]/div/div/div/div/div/div[1]/div/div[1]/div[2]/span/span[1]';
    _dateFrom ='15.02.2022';
    _dateTo ='19.02.2022';
    _townFromMessageXpath = '//*[@id="root"]/div/div[2]/div[2]/div/div/div/div/div/div[1]/div/div[1]/div[1]/div[2]/div/div[1]/div/div/div';
    _townToMessageXpath = '//*[@id="root"]/div/div[2]/div[2]/div/div/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div[1]/div/div/div';
    _dateFromMessageXpath = '//*[@id="root"]/div/div[2]/div[2]/div/div/div/div/div/div[1]/div/div[2]/div[1]/div[2]/div/div[1]/div/div/div';

    constructor(driver) {
        super(driver);
    }

    async getTicketListResult() {
        this.logger.info('Searching for tickets');
        const ticketsResultElement = await this.driver.findElement(By.xpath(this._ticketResultXpath));
        return ticketsResultElement.getText();
    }

    async waitTownFromInput() {
        return this.driver.wait(until.elementLocated(By.css(this._townFromInputCss)));
    }

    async waitTownToInput() {
        return this.driver.wait(until.elementLocated(By.css(this._townToInputCss)));
    }

    async waitDateFromInput() {
        return this.driver.wait(until.elementLocated(By.css(this._dateFromInputCss)));
    }

    async waitDateToInput() {
        return this.driver.wait(until.elementLocated(By.css(this._dateToInputCss)));
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

    async waitErrorDateFrom() {
        return this.driver.wait(until.elementLocated(By.xpath(this._dateFromMessageXpath)));
    }

    goToAviaPage() {
        this.logger.info('Open avia page');
        this.driver.get(this.#AVIAURL);
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

    chooseDateTo() {
        this.logger.info('Choose date to');
        this.enterTextBy('css', this._dateToInputCss, this._dateTo );
        return this;
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

    async getDateFromError() {
        this.logger.info('Searching for message');
        const errorMessageElement = await this.driver.findElement(By.xpath(this._dateFromMessageXpath));
        this.logger.info('Get error message');
        return errorMessageElement.getText();
    }

}

module.exports = AviaTicketPage;