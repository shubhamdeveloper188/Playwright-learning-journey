const { test, expect } = require("@playwright/test");

test("Valid Login and Logout", async ({ page }) => {
  // Navigate to login page
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // Enter credentials
  await page.getByPlaceholder("Username").type("Admin");
  await page.getByPlaceholder("Password").type("admin123");

  // Click login
  await page.locator("//button[@type='submit']").click();

  // Open profile menu
  await page.getByAltText("profile picture").click();

  // Click logout
  await page.getByText("Logout").click();

  // Verify redirection to login page
  await expect(page).toHaveURL(/login/);
});
