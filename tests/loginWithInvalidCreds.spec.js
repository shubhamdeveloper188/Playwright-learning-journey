const { test, expect } = require("@playwright/test");

test("Valid Login", async ({ page }) => {
  // Navigate to login page
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // Enter credentials
  await page.getByPlaceholder("Username").type("Admin");
  await page.getByPlaceholder("Password").type("admin");

  // Click login button
  await page.locator("//button[@type='submit']").click();

  const errorMsg = await page.locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").textContent();

  await expect(errorMsg.includes("Invalid")).toBeTruthy();
});