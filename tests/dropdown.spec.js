const {test,expect}= require('@playwright/test');

test("Select the Dropdown", async function ({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup");
    //method 1: to use label
    await page.locator("#state").selectOption({label:"Goa"}) 
    // await page.waitForTimeout(1000);
     //method 2: to use value  
    await page.locator("#state").selectOption({value: "Himachal Pradesh"});
    // await page.waitForTimeout(3000);
    //method 3: to use index
    await page.locator("#state").selectOption({index:3});
    // await page.waitForTimeout(3000);

    //to verify that perticular value is present in dropdown or not 
    const values = await page.locator("#state").textContent();
    await expect(values.includes("Goa")).toBeTruthy();



})
