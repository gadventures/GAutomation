const {test, expect} = require('@playwright/test');





test('PassportDetails @Passport', async ({page})=>
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
    await page.waitForTimeout(2000);
    await page.locator("//a[normalize-space()='Ross Dalziel (4/9)']");
    await page.waitForTimeout(2000);
    await page.locator("//a[normalize-space()='Passport Information']").click();
    await page.waitForTimeout(2000);
    await page.locator("//input[@name='legal_first_name']").click();
    await page.locator("//input[@name='legal_middle_name']").click();
    await page.locator("//input[@name='legal_last_name']").click();
    await page.locator("//input[@name='title']").click();
    await page.locator("//select[@name='gender']").click();
    await page.locator("//input[@name='nationality']").click();
    await page.locator("//input[@name='date_of_birth']").click();
    await page.locator("//input[@name='expiry_date']").click();
    await page.locator("//input[@name='passport_number']").click();
});