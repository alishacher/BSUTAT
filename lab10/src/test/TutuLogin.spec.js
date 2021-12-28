const Driver = require("../driver/Driver");
const TutuLoginPage = require("../pages/TutuLogin.page");
const assert = require("assert");
const UserCreator = require("../services/UserCreator.service");

describe('Test login', () => {

    let driver;
    let login;

    beforeEach(async function() {
        driver = await Driver.getDriver();
        login = new TutuLoginPage(driver);
    });

    afterEach(async function() {
        await Driver.closeDriver();
    });

    // it('Should get error from login (test version)', async function() {

    //     const userInfo = await UserCreator.withInvalidEmailandPassword();

    //     login.goToLoginPage();

    //     await login.waitLoginButton();

    //     login.clickBy('css', '[class = "g-link _pseudo m-user_login j-link-login"]');

    //     await login.waitEmailInput();

    //     login.enterEmail(userInfo.getEmail());

    //     await login.waitPasswordInput();

    //     login.enterPassword(userInfo.getPassword());

    //     await login.waitSubmitButton();

    //     login.clickBy('xpath', '//*[@id="login-container"]/div/div/div[1]/form/div[4]/button');

    //     login.clickErrorEmail();

    //     login.clickBy('xpath', '//*[@id="login-container"]/div/div/div[1]/form/div[4]/button');

    //     await login.waitErrorMessage();

    //     const errorMessage = await login.getErrorMessage();

    //     assert.strictEqual(errorMessage.substring(0, 12), "Неверные имя");
    // });

    // it('Should get error message from login', async function() {

    //     const userInfo = await UserCreator.withInvalidEmailandPassword();

    //     login.goToLoginPage();

    //     await login.waitLoginButton();

    //     login.clickBy('css', '[class = "g-link _pseudo m-user_login j-link-login"]');

    //     await login.waitEmailInput();

    //     login.enterEmail(userInfo.getEmail());

    //     await login.waitPasswordInput();

    //     login.enterPassword(userInfo.getPassword());

    //     await login.waitSubmitButton();

    //     login.clickBy('xpath', '//*[@id="login-container"]/div/div/div[1]/form/div[4]/button');

    //     login.clickErrorEmail();

    //     login.clickBy('xpath', '//*[@id="login-container"]/div/div/div[1]/form/div[4]/button');

    //     await login.waitErrorMessage();

    //     const errorMessage = await login.getErrorMessage();

    //     assert.strictEqual(errorMessage.substring(0, 12), "Неверные имя");

    // });

    // it('Should get error message for no mail', async function() {

    //     const userInfo = await UserCreator.withInvalidEmail();

    //     login.goToLoginPage();

    //     await login.waitLoginButton();

    //     login.clickBy('css', '[class = "g-link _pseudo m-user_login j-link-login"]');

    //     await login.waitEmailInput();

    //     login.enterEmail(userInfo.getEmail());

    //     await login.waitPasswordInput();

    //     login.enterPassword(userInfo.getPassword());

    //     await login.waitSubmitButton();

    //     login.clickBy('xpath', '//*[@id="login-container"]/div/div/div[1]/form/div[4]/button');

    //     login.clickErrorEmail();

    //     login.clickBy('xpath', '//*[@id="login-container"]/div/div/div[1]/form/div[4]/button');

    //     await login.waitErrorMessage();

    //     const errorMessage = await login.getErrorMessage();

    //     assert.strictEqual(errorMessage.substring(0, 19), "Укажите электронную");

    // });

    // it('Should get error message for no passwod', async function() {

    //     const userInfo = await UserCreator.withInvalidPassword();

    //     login.goToLoginPage();

    //     await login.waitLoginButton();

    //     login.clickBy('css', '[class = "g-link _pseudo m-user_login j-link-login"]');

    //     await login.waitEmailInput();

    //     login.enterEmail(userInfo.getEmail());

    //     await login.waitPasswordInput();

    //     login.enterPassword(userInfo.getPassword());

    //     await login.waitSubmitButton();

    //     login.clickBy('xpath', '//*[@id="login-container"]/div/div/div[1]/form/div[4]/button');

    //     login.clickErrorEmail();

    //     login.clickBy('xpath', '//*[@id="login-container"]/div/div/div[1]/form/div[4]/button');

    //     await login.waitErrorMessage();

    //     const errorMessage = await login.getErrorMessage();

    //     assert.strictEqual(errorMessage.substring(0, 14), "Укажите пароль");

    // });
});