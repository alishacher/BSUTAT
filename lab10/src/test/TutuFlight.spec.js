const Driver = require("../driver/Driver");
const AviaTicket = require("../pages/AviaTicket.page");
const assert = require("assert");

describe('Test avia tickets', () => {

    let driver;
    let aviaTicket;

    beforeEach(async function() {
        driver = await Driver.getDriver();
        aviaTicket = new AviaTicket(driver);
    });

    afterEach(async function() {
        await Driver.closeDriver();
    });

    it('Should get tickets from Moskow to Peterburg', async function() {
        aviaTicket.goToAviaPage()

        await aviaTicket.waitTownFromInput();

        aviaTicket.chooseTownFrom();

        await aviaTicket.waitTownToInput();

        aviaTicket.chooseTownTo();

        await aviaTicket.waitDateFromInput();

        aviaTicket.chooseDateFrom();

        await aviaTicket.waitDateToInput();

        aviaTicket.chooseDateTo();

        aviaTicket.clickBy('css', '[class="order-group-element o33679 o33684 o33686"]');

        await aviaTicket.waitTicketResult();

        const ticketsResult = await aviaTicket.getTicketListResult();

        assert.strictEqual(ticketsResult, "сначала недорогие");

    });

    it('Should get error of missing town from', async function() {
        aviaTicket.goToAviaPage()

        await aviaTicket.waitTownToInput();

        aviaTicket.chooseTownTo();

        await aviaTicket.waitDateFromInput();

        aviaTicket.chooseDateFrom();

        await aviaTicket.waitDateToInput();

        aviaTicket.chooseDateTo();

        aviaTicket.clickBy('css', '[class="order-group-element o33679 o33684 o33686"]');

        await aviaTicket.waitErrorTownFrom();

        const errorMessage = await aviaTicket.getTownFromError();

        assert.strictEqual(errorMessage.substring(20), "город вылета");

    });

    it('Should get error of missing town to', async function() {
        aviaTicket.goToAviaPage()

        await aviaTicket.waitTownFromInput();

        aviaTicket.chooseTownFrom();

        await aviaTicket.waitDateFromInput();

        aviaTicket.chooseDateFrom();

        await aviaTicket.waitDateToInput();

        aviaTicket.chooseDateTo();

        aviaTicket.clickBy('css', '[class="order-group-element o33679 o33684 o33686"]');

        await aviaTicket.waitErrorTownTo();

        const errorMessage = await aviaTicket.getTownToError();

        assert.strictEqual(errorMessage.substring(20), "город прилета");
    });



    it('Should get error of missing town to', async function() {
        aviaTicket.goToAviaPage()

        await aviaTicket.waitTownFromInput();

        aviaTicket.chooseTownFrom();

        await aviaTicket.waitTownToInput();

        aviaTicket.chooseTownTo();

        await aviaTicket.waitDateToInput();

        aviaTicket.chooseDateTo();

        aviaTicket.clickBy('css', '[class="order-group-element o33679 o33684 o33686"]');

        await aviaTicket.waitErrorDateFrom();

        const errorMessage = await aviaTicket.getDateFromError();

        assert.strictEqual(errorMessage.substring(20), "дату вылета");
    });

    it('Should get tickets from Moskow to Peterburg without second date', async function() {
        aviaTicket.goToAviaPage()

        await aviaTicket.waitTownFromInput();

        aviaTicket.chooseTownFrom();

        await aviaTicket.waitTownToInput();

        aviaTicket.chooseTownTo();

        await aviaTicket.waitDateFromInput();

        aviaTicket.chooseDateFrom();

        aviaTicket.clickBy('css', '[class="order-group-element o33679 o33684 o33686"]');

        await aviaTicket.waitTicketResult();

        const ticketsResult = await aviaTicket.getTicketListResult();

        assert.strictEqual(ticketsResult, "сначала недорогие");

    });
});