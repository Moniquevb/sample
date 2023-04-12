import percyScreenshot from "@percy/appium-app";
import { Given } from '@wdio/cucumber-framework';

Given(/^I can see the homescreen$/, async () => {
    await driver.launchApp()
    await $('//android.widget.TextView[@content-desc="Graphics"]').click()
    await percyScreenshot('Home', { fullPage: true, screenLengths: 8 });
});