const PageBase = require('./PageBase.page');
const {By, until} = require("selenium-webdriver");

class TutuLoginPage extends PageBase {

    #LOGIN_URL = 'https://www.tutu.ru/';


    _loginButtonCss = '[class = "g-link _pseudo m-user_login j-link-login"]';
    _emailInputXpath ='//*[@id="login-container"]/div/div/div[1]/form/div[1]/input';
    _passwordInputXpath ='//*[@id="login-container"]/div/div/div[1]/form/div[2]/input';
    _nextStateBtnXpath ='//*[@id="login-container"]/div/div/div[1]/form/div[4]/button';
    _errorMessageXpath = '//*[@id="login-container"]/div/div/div[1]/form/div[1]/span/span/span/span[2]/span'
    constructor(driver){
        super (driver);
    }

    async waitLoginButton() {
        return this.driver.wait(until.elementLocated(By.css(this._loginButtonCss)));
    }

    async waitEmailInput() {
        return this.driver.wait(until.elementLocated(By.xpath(this._emailInputXpath)));
    }

    async waitPasswordInput() {
        return this.driver.wait(until.elementLocated(By.xpath(this._passwordInputXpath)));
    }

    async waitSubmitButton() {
        return this.driver.wait(until.elementLocated(By.xpath(this._nextStateBtnXpath)));
    }

    async waitErrorMessage() {
        return this.driver.wait(until.elementLocated(By.xpath(this._errorMessageXpath)));
    }
        
    async getErrorMessage() {
        this.logger.info('Searching for message');
        const errorMessageElement = await this.driver.findElement(By.xpath(this._errorMessageXpath));
        this.logger.info('Get error message');
        return errorMessageElement.getText();
    }

    goToLoginPage() {
        this.driver.get(this.#LOGIN_URL);
        this.logger.info('Open login page');
        return this;
    }

    enterEmail(email) {
        this.logger.info('Input email to email field');
        this.enterTextBy('xpath', this._emailInputXpath, email);
        return this;
    }

    enterPassword(password) {
        this.logger.info('Input password to password field');
        this.enterTextBy('xpath', this._passwordInputXpath, password);
        return this;
    }

    clickErrorEmail() {
        this.clickBy('xpath', '//*[@id="login-container"]/div/div/div[1]/form/div[1]/span/input');
    }

    getLoginElement() {
        const element = this.findElementBy('xpath', '//*[@id="login-container"]/div/div/div[1]/form/div[1]/input');
        return element;
    }

}


module.exports = TutuLoginPage;