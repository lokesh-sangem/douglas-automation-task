import { Page } from "@playwright/test";
import { FiltersPage } from "./FiltersPage";
import { HomePage } from "./HomePage";
import { ParfumPage } from "./ParfumPage";

export class PageManager {
  readonly page: Page;
  readonly homePage: HomePage;
  readonly parfumPage: ParfumPage;
  readonly filtersPage: FiltersPage;

  constructor(page: Page) {
    this.page = page;
    this.homePage = new HomePage(this.page);
    this.parfumPage = new ParfumPage(this.page);
    this.filtersPage = new FiltersPage(this.page);
  }
}
