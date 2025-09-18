// tests/handleFileUpload.spec.js
const { test, expect } = require("@playwright/test");
const path = require("path");

test("Verify the file upload", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");

  // Use a relative file path (keep the PDF under /tests/files/)
  const filePath = path.join(__dirname, "files", "MyStatement.pdf");

  await page.locator("#file-upload").setInputFiles(filePath);
  await page.locator("#file-submit").click();

  await expect(page.locator("div.example h3")).toHaveText("File Uploaded!");
});
