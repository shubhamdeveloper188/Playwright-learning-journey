const { test, expect } = require("@playwright/test");

test("Valid Login", async ({ page }) => {
  // Navigate to login page
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // Enter credentials
  await page.getByPlaceholder("Username").type("Admin");
  await page.getByPlaceholder("Password").type("admin123");

  // Click login button
  await page.locator("//button[@type='submit']").click();

  // Wait for debugging (not recommended in real tests)
  await page.waitForTimeout(5000);

  // Verify that user is redirected to dashboard
  await expect(page).toHaveURL(/dashboard/);
});
