const{test,expect}=require('@playwright/test');

test("Verify keyboard Input", async ({page}) => {
    await page.goto("https://in.search.yahoo.com/");
    await page.locator("#yschsp").click();
    await page.keyboard.type("APJ Abudl kalam");
    await page.keyboard.press("Enter");
    await page.waitForTimeout(5000);
})