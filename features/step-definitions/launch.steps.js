import { Given } from '@wdio/cucumber-framework';


Given(/^I can see the homescreen$/, async () => {
    // const runner = new ClassicRunner()
    // const eyes = new Eyes(runner)
    // await eyes.open(driver)
    driver.launchApp();
    const accBtn = await $('~Accessibility')
    await expect(accBtn).toBeDisplayed()
    // await eyes.check()
    // eyes.close();
    // eyes.abortIfNotClosed()

});