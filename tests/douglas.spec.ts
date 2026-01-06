import { expect, test } from "@playwright/test";

import { PageManager } from "./pages/PageManager";

test("navigate using baseURL", async ({ page }) => {
  const pages = new PageManager(page);

  await page.goto("https://www.douglas.de/de");
  await page.waitForTimeout(3000);
  await pages.homePage.acceptCookies();
  await page.waitForTimeout(3000);
  await pages.homePage.clickParfum();

  //   await page.waitForTimeout(2000);
  //await page.getByRole('link', { name: /Parfum/i }).first().hover();

  await page.locator('[aria-label="SALE Parfum"]').click();
  //await page.locator("(//a[normalize-space()='Parfum'])[1]").click();

  await page.waitForSelector(".quick-filter-menu", { state: "visible" });

  if (await page.locator("//span[contains(text(),'Produktart')]").isVisible()) {
    await page.waitForTimeout(2000);
    await page.locator("//span[contains(text(),'Produktart')]").click();
    await pages.parfumPage.applyProduktartFilter();
    const count = await page.getByTestId("product-tile").count();
    expect(count).toBeGreaterThan(0);
  } else {
    console.log("productkart not visible");
  }

  if (await pages.parfumPage.Marke.isVisible()) {
    await pages.parfumPage.applyMarkeFilter();
    await expect(
      page
        .locator(
          "//div[contains(@class,'product-grid-row')]//a[@data-testid='main-link']"
        )
        .first()
    ).toBeVisible();
  } else {
    console.log("Marke button is  not visible");
  }

  if (await pages.parfumPage.FurWen.isVisible()) {
    await pages.parfumPage.applyFurMenFilter();
    const productCards = page.getByTestId("main-link");
    await expect(productCards.first()).toBeVisible();
  } else {
    console.log("FurWen button is not visible");
  }

  if (await pages.parfumPage.GeschenkFur.isVisible()) {
    await pages.parfumPage.applyGeschenkFurFilter();
    const productCard = page.getByTestId("main-link");
    await expect(productCard.first()).toBeVisible();
  } else {
    console.log("GeschenkFur button is  not visible");
  }

  
});
