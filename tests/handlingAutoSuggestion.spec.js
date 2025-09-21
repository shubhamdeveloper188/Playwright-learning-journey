const{test,expect}=require('@playwright/test');

test("Verify AutoSuggestions", async({page})=>{
    await page.goto("https://in.search.yahoo.com/");
    await page.locator("#yschsp").type("Testing");
    await page.waitForSelector("//li[@role='option']");
    const elements= await page.$$("//li[@role='option']");
    for(let i=0;i<elements.length;i++){
        const text= await elements[i].textContent();
        if(text.includes('job'))
        {
            await elements[i].click();
            break;
        }
    }
    await page.waitForTimeout(3000);
})