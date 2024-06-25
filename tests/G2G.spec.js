const {test, expect} = require('@playwright/test');





test('Jonathan', async ({page})=>
{
   await page.goto("https://gadventures.com/goodtogo/PXJ48ungGzg");
   await page.locator("(//span[@class='Select-arrow-zone'])[1]").click();
   await page.keyboard.type('May');
   await page.waitForTimeout(2000);
   await page.keyboard.press('Enter');
   await page.locator("(//input[@type='text'])[2]").fill("09");
   await page.locator("(//input[@type='text'])[3]").fill("1982");
   await page.locator("(//span[@class='Select-arrow'])[2]").click();
   await page.keyboard.type('American');
   await page.waitForTimeout(2000);
   await page.keyboard.press('Enter');
   await page.waitForTimeout(2000);
   await page.locator("(//button[normalize-space()='Login'])[1]").click();
   await page.waitForTimeout(35000);
   await page.locator("(//span[normalize-space()='Close'])[1]").click();
   await page.waitForTimeout(10000);
   await page.locator("(//a[normalize-space()='Joey Byford'])[1]").click();
   await page.waitForTimeout(15000);
});

test('Mike', async ({page})=>
   {
      await page.goto("https://gadventures.com/goodtogo/wny7zsRarv");
      await page.locator("(//span[@class='Select-arrow-zone'])[1]").click();
      await page.keyboard.type('January');
      await page.waitForTimeout(2000);
      await page.keyboard.press('Enter');
      await page.locator("(//input[@type='text'])[2]").fill("06");
      await page.locator("(//input[@type='text'])[3]").fill("1967");
      await page.locator("(//span[@class='Select-arrow'])[2]").click();
      await page.keyboard.type('American');
      await page.waitForTimeout(2000);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(2000);
      await page.locator("(//button[normalize-space()='Login'])[1]").click();
      await page.waitForTimeout(35000);
   });

test('Jarret', async ({page})=>
   {
      await page.goto("https://gadventures.com/goodtogo/aYqjNu2Y7z");
      await page.locator("(//span[@class='Select-arrow-zone'])[1]").click();
      await page.keyboard.type('November');
      await page.waitForTimeout(2000);
      await page.keyboard.press('Enter');
      await page.locator("(//input[@type='text'])[2]").fill("30");
      await page.locator("(//input[@type='text'])[3]").fill("1993");
      await page.locator("(//span[@class='Select-arrow'])[2]").click();
      await page.keyboard.type('Canadian');
      await page.waitForTimeout(2000);
      await page.keyboard.press('Enter');
      await page.waitForTimeout(2000);
      await page.locator("(//button[normalize-space()='Login'])[1]").click();
      await page.waitForTimeout(35000);
   });