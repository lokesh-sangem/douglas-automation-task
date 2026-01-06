import { Locator, Page } from "@playwright/test";

export class FiltersPage {
  readonly page: Page;
  readonly productTypeButton: Locator;
  readonly brandButton: Locator;
  readonly giftForButton: Locator;
  readonly genderButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productTypeButton = page.locator(
      "button[data-testid*='classificationClassName']:has-text('Produktart')"
    );

    this.brandButton = page.getByTestId("menu-button-brand");
    this.giftForButton = page.getByRole("button", { name: "Geschenk für" }); //
    this.genderButton = page.locator(
      "button[data-testid*='menu-button-gender']:has-text('Für Wen')"
    );
  }

  async clickProductType() {
    await this.productTypeButton.click();
  }

  async clickBrand() {
    // await this.brandButton.waitFor({state:'visible'});
    await this.brandButton.scrollIntoViewIfNeeded();
    await this.brandButton.click();
  }

  async clickGiftFor() {
    await this.giftForButton.click();
  }

  async clickGender() {
    await this.genderButton.click();
  }
}
