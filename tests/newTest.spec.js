const {test,expect}=require('@playwright/test');

test("My Firts Test",async function ({page}) {
    expect(12).toBe(12);
})
test.skip("My Second Test",async function ({page}) {
    expect(110).toBe(100);
})
test.only("Page Title",async function ({page}) {
    await page.goto("https://www.google.com/");
    await expect(page).toHaveTitle("Google");
})
test("My fourth Test",async function ({page}) {
    expect("Shubham Kumar Gupta").toContain("Kumar Gupta");
})