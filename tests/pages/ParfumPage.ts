import { Locator, Page } from '@playwright/test';

export class ParfumPage{
      readonly page:Page;
      readonly productCards:Locator; 
      readonly neuLink:Locator;
      readonly saleLink:Locator;
      readonly allesInSaleLink:Locator;

constructor(page:Page){
  this.page=page;
  this.productCards= this.page.locator('[data-testid="product-tile"]'); 
  //this.neuLink = this.page.getByRole('link', { name: 'NEU' });
  this.neuLink = this.page.locator('li[aria-label="NEU"] a');
 //this.saleLink = this.page.locator('li.navigation-main-entry.navigation-main-entry--active a');
 this.saleLink=this.page.getByRole('link', { name: 'SALE' }).first();
  //this.saleLink = this.page.locator("//font[contains(text(),'SALE')]");
  this.allesInSaleLink = page.getByRole('link', { name: 'Alles in Sale' }).first();
}

async applyFilter(filterName:string):Promise<void>{
if(filterName==='NEU'){
    await this.neuLink.click();
}
if(filterName==='SALE'){
    await this.saleLink.click();
}
await this.page.waitForTimeout(2000);
//await this.allesInSaleLink.click();
}

// async verifyProductsListed():Promise<void>{
//     await this.page.waitForTimeout(5000);    
// await this.productCards.first().waitFor({state:'attached',timeout:15000});
// //await expect(this.productCards.first()).toBeVisible();
//      // Optional: check that multiple products are loaded
//     const count = await this.productCards.count();
//     console.log(`Number of products found: ${count}`);
//    //await expect(count).toBeGreaterThan(0);

// }



}


// import { Locator, Page, expect } from '@playwright/test';

// export class ParfumPage {
//   readonly page: Page;
//   readonly productCards: Locator;
//   readonly neuLink: Locator;
//   readonly saleLink: Locator;

//   constructor(page: Page) {
//     this.page = page;

//     // ✅ Correct and verified locator
//     this.productCards = this.page.locator('[data-testid="product-tile"] [data-testid="main-link"]'); 

//     // ✅ Stable locators (no dynamic classes)
//     this.neuLink = this.page.locator('li[aria-label="NEU"] a');
//     //this.saleLink = this.page.locator('li[aria-label="SALE"] a');
//     this.saleLink = this.page.locator("//a[contains(text(),'SALE') and contains(@href,'/sale')]");
//   }

//   // ✅ SPA-safe navigation
//   async applyFilter(filterName: string): Promise<void> {
//     if (filterName === 'NEU') {
//       await Promise.all([
//         this.page.waitForURL(/neuheiten/),
//         this.neuLink.click(),
//       ]);
//     }

//     if (filterName === 'SALE') {
//       await Promise.all([
//         this.page.waitForURL(/sale/),
//         this.saleLink.click(),
//       ]);
//     }
//   }

//   // ✅ Correct product verification
//   async verifyProductsListed(): Promise<void> {
    
//     await expect(this.productCards.first())
//       .toBeVisible({ timeout: 15000 });

//     const count = await this.productCards.count();
//     console.log(`Number of products found: ${count}`);

//     expect(count).toBeGreaterThan(0);
//   }
// }
