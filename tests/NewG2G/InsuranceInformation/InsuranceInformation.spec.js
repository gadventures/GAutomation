const {test, expect} = require('@playwright/test');





test('Insurance Information @insurance', async ({page})=>
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
    await page.locator("//button[@id='login-button']").click();
    await page.waitForTimeout(3000);
    await page.locator("//a[normalize-space()='Ross Dalziel (4/9)']").click();
    await page.waitForTimeout(10000);
    await page.locator("//a[normalize-space()='Insurance Information']").click();
});