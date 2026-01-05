import { expect, test } from "@playwright/test";

import { PageManager } from "./pages/PageManager";

test("navigate using baseURL", async ({ page }) => {
  // Use a path relative to the `baseURL` in playwright.config.ts
  const pages = new PageManager(page);

  await page.goto("https://www.douglas.de/de");
  await page.waitForTimeout(3000);
  await pages.homePage.acceptCookies();
  await page.waitForTimeout(3000);
  await pages.homePage.clickParfum();
  //   await page.waitForLoadState();

  //   await page.waitForTimeout(2000);
  //await page.getByRole('link', { name: /Parfum/i }).first().hover();

  await page.locator('[aria-label="SALE Parfum"]').click();
  //await page.locator("(//a[normalize-space()='Parfum'])[1]").click();

  await expect(
    page.locator(
      "//div[@role='heading' and contains(normalize-space(.),'Parfum SALE')]"
    )
  ).toBeVisible();

  await page.waitForSelector(".quick-filter-menu", { state: "visible" });

  if (await page.locator("//span[contains(text(),'Produktart')]").isVisible()) {
    await page.waitForTimeout(2000);
    await page.locator("//span[contains(text(),'Produktart')]").click();
  } else {
    console.log("productkart not visible");
  }

  await page.waitForURL(/\/sale\/parfum\/0501/i);
  await expect(page).toHaveURL(/\/sale\/parfum\/0501/i);

  // await produktart.waitFor({ state: 'visible' });

  // await Promise.all([
  //   produktart.click(),
  //   page.waitForLoadState('networkidle'),
  // ]);

  // await page.locator("//span[contains(text(), 'Produktart')]").click();
  // await page.waitForTimeout(1000);
  // await page.locator("//span[contains(text(), 'Marke')]").click();
  // await page.waitForTimeout(1000);
  // await page.locator("//span[contains(text(), 'Für Wen')]").click();
  // await page.waitForTimeout(1000);
  // await page.locator("//span[contains(text(), 'Geschenk für')]").click();
});
