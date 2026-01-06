import { Locator, Page,expect } from "@playwright/test";

export class ParfumPage {
  readonly page: Page;
  readonly productCards: Locator;
  readonly neuLink: Locator;
  readonly saleLink: Locator;
  readonly allesInSaleLink: Locator;
  readonly Produktart: Locator;
  readonly Marke: Locator;
  readonly FurWen: Locator;
  readonly GeschenkFur: Locator;
  readonly Produkte: Locator;
  readonly eauDeParfumCheckbox: Locator;
  readonly adidasCheckbox: Locator;
  readonly unisexCheckbox: Locator;
  readonly weihnachtenCheckbox: Locator;
  readonly dankeschoenCheckbox: Locator;

  constructor(page: Page) {
    this.page = page;
    this.productCards = this.page.locator('[data-testid="product-tile"]');
    //this.neuLink = this.page.getByRole('link', { name: 'NEU' });
    this.neuLink = this.page.locator(
      "//ul[@id='Navigation_Flyout_Content']//a[normalize-space()='NEU']"
    );
    //this.saleLink = this.page.locator('li.navigation-main-entry.navigation-main-entry--active a');
    this.saleLink = this.page.getByRole("link", { name: "SALE" }).first();
    //this.saleLink = this.page.locator("//font[contains(text(),'SALE')]");
    this.allesInSaleLink = page
      .getByRole("link", { name: "Alles in Sale" })
      .first();

    //===============buttons=======
    this.Produktart = this.page.locator(
      "//span[contains(text(), 'Produktart')]"
    );
    // this.Eaudeparfum = this.page.locator("//a[contains(@class,'facet-option')][.//div[normalize-space()='Eau de Parfum']]"); //checkbox
    this.eauDeParfumCheckbox = this.page.locator(
      "//a[contains(@class,'facet-option')][.//div[normalize-space()='Eau de Parfum']]"
    ); //use click method

    this.Produkte = this.page.locator(
      "//button[@data-testid='button-primary' and contains(normalize-space(), 'Produkte anzeigen')]"
    ); //use click.
    //button[@data-testid='button-primary' and contains(normalize-space(), 'Produkte anzeigen')]

    this.Marke = this.page.locator("//span[contains(text(), 'Marke')]");
    this.adidasCheckbox = this.page.locator(
      "//a[@role='checkbox' and .//div[normalize-space()='adidas']]"
    ); //use click.

    this.FurWen = this.page.locator("//span[contains(text(), 'Für Wen')]");
    this.unisexCheckbox = this.page.locator(
      "//a[@role='checkbox' and .//div[normalize-space()='Unisex']]"
    ); //use click

    //====
    this.GeschenkFur = this.page.locator(
      "//span[contains(text(), 'Geschenk für')]"
    );
    this.weihnachtenCheckbox = this.page.locator(
      "//a[@role='checkbox' and .//div[normalize-space()='Weihnachten']]"
    );
    this.dankeschoenCheckbox = this.page.locator(
      "//a[@role='checkbox' and .//div[normalize-space()='Dankeschön']]"
    );
  }

  // async applyFilter(filterName:string):Promise<void>{
  // if(filterName==='NEU'){
  //     await this.neuLink.click();
  // }
  // if(filterName==='SALE'){
  //     await this.saleLink.click();
  // }
  // await this.page.waitForTimeout(2000);
  // //await this.allesInSaleLink.click();
  // }

  async applyProduktartFilter(): Promise<void> {
    this.Produktart.click();
    this.eauDeParfumCheckbox.click();
    this.Produkte.click();
    

  }

  async applyMarkeFilter(): Promise<void> {
    this.Marke.click();
    this.adidasCheckbox.click();
    this.Produkte.click();
  }

  async applyFurMenFilter(): Promise<void> {
    this.FurWen.click();
    this.unisexCheckbox.click();
    this.Produkte.click();
  }

  async applyGeschenkFurFilter(): Promise<void> {
    this.GeschenkFur.click();
    this.dankeschoenCheckbox.click();
    this.Produkte.click();
  }
}
