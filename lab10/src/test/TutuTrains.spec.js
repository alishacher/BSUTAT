const Driver = require("../driver/Driver");
const TrainTicket = require("../pages/TrainTicket.page");
const assert = require("assert");

describe('Test train tickets', () => {

    let driver;
    let trainTicket;

    beforeEach(async function() {
        driver = await Driver.getDriver();
        trainTicket = new TrainTicket(driver);
    });

    afterEach(async function() {
        await Driver.closeDriver();
    });

    it('Should get tickets from Moskow to Peterburg', async function() {
        trainTicket.goToTrainPage();

        await trainTicket.waitTownFromInput();

        trainTicket.chooseTownFrom();

        await trainTicket.waitTownToInput();

        trainTicket.chooseTownTo();

        await trainTicket.waitDateFromInput();

        trainTicket.chooseDateFrom();

        trainTicket.clickBy('xpath', '//*[@id="wrapper"]/div[3]/div/form/div/div/div[6]/button/span/span[3]');

        await trainTicket.waitTicketResult();

        const ticketsResult = await trainTicket.getTicketListResult();

        assert.strictEqual(ticketsResult.substring(0, 14), "Выберите поезд");

    });

    it('Should get error for no town from', async function() {
        trainTicket.goToTrainPage();

        await trainTicket.waitTownToInput();

        trainTicket.chooseTownTo();

        await trainTicket.waitDateFromInput();

        trainTicket.chooseDateFrom();

        trainTicket.clickBy('xpath', '//*[@id="wrapper"]/div[3]/div/form/div/div/div[6]/button/span/span[3]');

        await trainTicket.waitErrorTownFrom();

        const errorMessage = await trainTicket.getTownFromError();

        assert.strictEqual(errorMessage.substring(20), "название станции");

    });

    it('Should get error for no town to', async function() {
        trainTicket.goToTrainPage();

        await trainTicket.waitTownFromInput();

        trainTicket.chooseTownFrom();

        await trainTicket.waitDateFromInput();

        trainTicket.chooseDateFrom();

        trainTicket.clickBy('xpath', '//*[@id="wrapper"]/div[3]/div/form/div/div/div[6]/button/span/span[3]');

        await trainTicket.waitErrorTownTo();

        const errorMessage = await trainTicket.getTownToError();

        assert.strictEqual(errorMessage.substring(20), "название станции");

    });

});