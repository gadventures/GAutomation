const {test, expect} = require('@playwright/test');





test('Personal Information @personal', async ({page})=>
{
    await page.goto("http://127.0.0.1:8000/g2g/login/");
    const element = page.locator('#month');
    await element.selectOption({value: '12'});
    await page.waitForTimeout(2000);
    await page.locator("#day").fill("27");
    await page.locator("#year").fill("1975");
    const dropDown = page.locator('#nationality');
    await dropDown.selectOption({value: 'BRITISH'});
    await page.waitForTimeout(2000);
    await page.locator("#login-button").click();
    await page.waitForTimeout(3000);
    const passenger = page.locator(".passenger-link");
    await page.waitForTimeout(1000);
    const info = page.locator("//a[normalize-space()='Personal Information']");
    const saveButton = page.locator("//button[normalize-space()='Save']");
});